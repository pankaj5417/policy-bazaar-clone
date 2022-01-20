import { useState, useEffect } from "react";
import "./UseForm.css";
import { makeStyles,useTheme } from '@material-ui/core/styles';
import {TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    InputLabel,
    Switch,
    Select,
    MenuItem,
    Button,} from '@material-ui/core';

    function UseForm() {

    const useStyles = makeStyles((theme) => ({
        inputField: {
          width: "100%",
          margin: theme.spacing(1, 0),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 320,
            maxWidth: 400,
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
      }));

    const classes = useStyles();
    const theme = useTheme();

    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};


  const initialValues = { username: "", email: "", income: "",occupation:"",education:"",lifeCover:"",CoverFor:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
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
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        
        <div className="form-left-container">
        <div className="form-left">
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
            <Select   MenuProps={MenuProps}  name="payFor" >
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
            <Select   MenuProps={MenuProps}  name="premiumPayment" >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                

            </Select>
            </FormControl>
       
        </div>
        </div>


        <div className="form-right-container">
        <div className="ui form">
        <h1>Your Details</h1>
          <div className="field">
           
            <TextField
              type="text"
              name="username"
              placeholder="Full Name as per your ID Proof"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            
            <TextField
              type="text"
              name="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            
            <TextField
              type="number"
              name="income"
              placeholder="Annual Income"
              value={formValues.income}
              onChange={handleChange}
            />
             </div>
          <p>{formErrors.password}</p>

          <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Occupation</InputLabel>
            <Select   MenuProps={MenuProps} name="Occupation" id="occupation">
                <option value="" selected>Occupation</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
                </Select>
         </FormControl>
                <br />

                <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Education</InputLabel>
            <Select   MenuProps={MenuProps}  name="Education" id="education">
                <option disabled value="" selected>Education</option>
                <option value="postgraduate">Post-Graduate & Above</option>
                <option value="12th">12th</option>
                <option value="10th">10th</option>
                <option value="below10th">Below 10th</option>
                <option value="graduate">Graduate</option>

            </Select>
            </FormControl>
            <br />
         
          <Button className="fluid ui button blue">Proceed</Button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default UseForm;