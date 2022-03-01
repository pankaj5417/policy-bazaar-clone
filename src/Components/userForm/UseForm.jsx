import { useState, useEffect } from "react";
import "./UseForm.css";
import { Navigate, useParams } from "react-router-dom";

import { motion, useAnimation } from "framer-motion"
import { makeStyles,useTheme } from '@material-ui/core/styles';
import {TextField,
    
    FormControl,
    
    InputLabel,
    Select,
    
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,} from '@material-ui/core';
import { UseForm2 } from "./UseForm2";
import UserForm from "./UserForm";
import { UpgradeOption } from "./UpgradeOption";
//import { ReviewDetails } from "./reviewDetails";
import Navbar from "./navbar";
import { JSON_API } from "../../constants";
import { useSelector } from "react-redux";

//import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";

    function UseForm() {

        const initialValues = { username: "", email: "", income: "",occupation:"",education:"",lifeCover:"",CoverFor:"" ,paymentMode:"",pincode:"",city:"",nationality:"",medicalhistory:"",planOptions:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
 const [isSubmit, setIsSubmit] = useState(false);
//   const { step, navigation } = useStep({
//     steps,
//     initialStep: 0,
//   });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const props = { formValues,setFormValues,handleChange };


    const useStyles = makeStyles((theme) => ({
        inputField: {
          width: "100%",

          margin: theme.spacing(1, 0),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 350,
            maxWidth: 400,
            marginLeft:30
          },
          chips: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          chip: {
            margin: 2,
          },
          noLabel: {
            marginTop: theme.spacing(3),
          },

          root: {
            width: '100%',
          },
          button: {
            marginRight: theme.spacing(1),
          },
          instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
          },
        }))

    const classes = useStyles();
   // const theme = useTheme();

    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 360,
      
    },
  },
};

function getSteps() {
  return ['Your Details', 'Upgrade your plan', 'Add-On Riders'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserForm {...props}/>  ;
    case 1:
      return <UseForm2 {...props}/>;
      case 2:
        return <UpgradeOption {...props}/>
    case 3:
      return ''
    default:
      return '';
  }
}

const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();
  console.log(activeStep)

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const control=useAnimation()


 /* useEffect(()=>{
    getFormData()
},[])
   
    const getFormData=()=>{
    fetch(`http://localhost:3003/userDetails `)
    .then((d)=>d.json()).then((res)=>{
        setFormValues(res)
    })
}
*/
const { loading, err, data } = useSelector((state) => ({
  loading: state.quotes.isLoading,
  err: state.quotes.isError,
  data: state.quotes.quotes,
}));


const basicdata = JSON.parse(localStorage.getItem("basicUserDetails"));
  
const addFormData=()=>{
    const payload=formValues
 
     fetch(`${JSON_API}/userDetails`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "content-type":"application/json"

        }
    }).then(()=>{
       
    })
}
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
  //  setFormErrors(validate(formValues));
  
   // setIsSubmit(true);
   
  };
const handleData=(e)=>{
    
   e.preventDefault()
   addFormData()
     
}
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleNext()
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "The Name Field is required!";
    }
    if (!values.email) {
      errors.email = "The Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.income) {
      errors.password = "Income is required";
    }
     
    return errors;
  };

  return (
    <div>

    <Navbar/>
    <div className="container">

     <div className="form-heading">
       <div>
       <span>{basicdata.gender}</span>&nbsp;<span>|</span>&nbsp;<span>D O B:</span>&nbsp;
       <span>{basicdata.dob}</span>&nbsp;<span>|</span>&nbsp;<span>No Smoker</span>&nbsp;<span>|</span>&nbsp;<span>Phone no.</span>|&nbsp;<span>{basicdata.mobile}</span>
      

       </div>
      
       

     <div className="knowYourPlan">
       <img  src="https://buylifeinsurance.policybazaar.com/ifplus/images/web/knowYourPlan.svg" alt="" />
       <span>Know Your Plan in 2 min</span>
     </div>
     </div>
    

      <form onSubmit={handleData}>
        
        <div className="form-left-container">
        <div className="form-left">
          <div className="">
          <img src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/clientLogo.png" alt="kotakimg" />
        <span> e-Term Life</span>
          </div>
          <div className="horizontal-line"></div>
         
        <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Life Cover</InputLabel>

        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          name="lifeCover"
          
          value={formValues.lifeCover}
          onChange={handleChange}
          MenuProps={MenuProps}
          
        >
         <option value="25lakh">25 Lacs</option>
         <option value="50lakh">50 Lacs</option>
         <option value="75lakh">75 Lacs</option>
         <option value="1crore">1 Crore</option>
         <option value="1.25crore">1.25 Crore</option>
         <option value="1.5crore">1.5 Crore</option>
         <option value="1.75crore">1.75 Crore</option>
         <option value="2crore">2 Crore</option>
         <option value="2.25crore">2.25 Crore</option>
         <option value="2.50crore">2.50 Crore</option>
         <option value="2.75crore">2.75 Crore</option>
         <option value="3crore">3 Crore</option>
         <option value="3.25crore">3.25 Crore</option>
         <option value="3.50crore">3.50 Crore</option>
         <option value="3.75crore">3.75 Crore</option>
         <option value="4crore">4 Crore</option>
         <option value="4.25crore">4.25 Crore</option>
         <option value="4.50crore">4.50 Crore</option>
         <option value="4.75crore">4.75 Crore</option>
         <option value="5crore">5 Crore</option>
         <option value="6crore">6 Crore</option>



        </Select>
        </FormControl>
        <br />

        <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label"> Cover For</InputLabel>

        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          name="CoverFor"
          
          value={formValues.CoverFor}
          onChange={handleChange}
          MenuProps={MenuProps}
          
        >
         <option value="32years">32 Years</option>
         <option value="33years">33 Years</option>
         <option value="34years">34 Years</option>
         <option value="35years">35 Years</option>
         <option value="36years">36 Years</option>
         <option value="37years">37 Years</option>
         <option value="38years">38 Years</option>
         <option value="39years">39 Years</option>
         <option value="40years">40 Years</option>
         <option value="41years">41 Years</option>
         <option value="42years">42 Years</option>
         <option value="43years">43 Years</option>
         <option value="44years">44 Years</option>
         <option value="45years">45 Years</option>
         <option value="46years">46 Years</option>
         <option value="47years">47 Years</option>
         <option value="48years">48 Years</option>
         <option value="49years">49 Years</option>
         <option value="50years">50 Years</option>
         <option value="51years">51 Years</option>
         <option value="52years">52 Years</option>
         <option value="53years">53 Years</option>
         <option value="54years">54 Years</option>
         <option value="55years">55 Years</option>
         <option value="60years">60 Years</option>
         <option value="75years">75 Years</option>



        </Select>
        </FormControl>
        <br />
     
        <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Pay For</InputLabel>
            <Select  onChange={handleChange}  MenuProps={MenuProps}  name="payFor" >
                <option disabled value="" selected>Education</option>
                <option value="onetime">One Time</option>
                <option value="5years">5 Years</option>
                <option value="10years">10 Years</option>
                <option value="20years">20 Years</option>

            </Select>
            </FormControl>
            <br />

            <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Mode of Premium Payment</InputLabel>
            <Select  onChange={handleChange}  MenuProps={MenuProps}  name="paymentMode" >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                

            </Select>
            </FormControl>
       
        </div>
        </div>


        <div className="form-right-container">
          <div>
       
          </div>
       
          <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="horizontal-line"></div>
      
          
        
         

          <div>
      {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              
            <Navigate to={`/review`}></Navigate>;
             
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
              <motion.div className="total-button-container "  
               animate={control}
                onFocus={()=>{control.start({
                  y:-40,
                 transition:{duration:2}
                })}}>
                  <div className="total-amount-container">
                <span className=" ">Total Amount</span>

                  </div>
                  <div className="button-container">
                  <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
               
                className={classes.button}
                 type="submit"
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Proceed '}	&#x279C;
              </Button>

                  </div>

               
              </motion.div>

              
            </div>
          </div>
        )}
      </div>
    </div>
         

        </div>
      
      </form>
    </div>
    </div>
  );
}

export default UseForm;