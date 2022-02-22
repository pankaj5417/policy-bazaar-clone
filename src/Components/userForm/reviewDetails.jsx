import { useState, useEffect } from "react";
import "./ReviewDetail.css";
import { motion, useAnimation } from "framer-motion";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  
  FormControlLabel,
  Checkbox,
  
 
  Button,
} from "@material-ui/core";

import React from "react";
import { Link, Navigate } from "react-router-dom";

export const ReviewDetails = ({formValues,setFormValues,handleChange}) => {

   // const {username,email,income,occupation,education,lifeCover,CoverFor,pincode,city,nationality,medicalhistory,planOptions}=formValues

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
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },

    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
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
  const port=process.env.PORT||3001

  const control = useAnimation();
/*
  const initialValues = {
    username: "",
    email: "",
    income: "",
    occupation: "",
    education: "",
    lifeCover: "",
    CoverFor: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  */
  //const [formErrors, setFormErrors] = useState({});
  //const [isSubmit, setIsSubmit] = useState(false);
  const [data,setData]=useState([])
/*
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
*/
  

useEffect(()=>{
getFormData()
},[])

    const getFormData=()=>{
    fetch(`http://localhost:${port}/userDetails `)
    .then((d)=>d.json()).then((res)=>{
        console.log(res)
        setData(res)
    })
}
//getFormData()
console.log(data)

/*
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  */
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
 
    //console.log(d.username)
   // const {username,email,income,occupation,education,lifeCover,CoverFor,pincode,city,nationality,medicalhistory,planOptions}=d

 return (
    <>
    { data.map((d)=>(d.id===data.length?
      <div className="Review-Container">
        <div className="navbar-container">
          <div className="navbar-container-mid">
            <img
              className="policybaazar-logo cursor"
              src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/pbLogo.svg"
              alt=""
            />
            <div className="navbar-right cursor">
              <img
                src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/callingIcon.svg"
                alt=""
              />&nbsp;
              <span>Talk to an Expert</span>
            </div>
          </div>
        </div>
        <div className="review-bottom-container">
          <div className="review-heading-container">
            <div>
              <img
                src="	https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/clientLogo.png"
                alt=""
              />
            </div>

            <div>
              <span className="review-heading">
                Please review below details before proceeding ahead
              </span>
              <p className="review-heading2">
                These cannot be changed at a later stage
              </p>
            </div>
            <div className="review-heading-right-container">
              <img
                src="	https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/termIcon.svg"
                alt=""
              />
              <span className="review-heading-right">Kotak Life e-Term</span>
            </div>
          </div>
          <div className="review-container">
            <div class="reviewAllDetails">
              <div class="d-flex align-items-center">
                <div class="reviewTitle">Personal Info</div>
              </div>
              <div class="reviewFormDetails">
                <ul>
                  <li>
                    <div class="review-Detail-left">First Name:</div>
                    <div class="reviewFormRightDetail">{d.username}</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Email:</div>
                    <div class="reviewFormRightDetail">
                     {d.email}
                    </div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Annual Income:</div>
                    <div class="reviewFormRightDetail">
                      &nbsp;<span class="formattedAmt">₹{d.income} </span>
                    </div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Occupation:</div>
                    <div class="reviewFormRightDetail">
                      <span id="lblOccupation">{d.occupation}</span>
                    </div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Education:</div>
                    <div class="reviewFormRightDetail">
                      {d.education} &amp; Above
                    </div>
                  </li>
                  <li>
                    <div class="review-Detail-left">PIN Code:</div>
                    <div class="reviewFormRightDetail">{d.pincode}</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">City:</div>
                    <div class="reviewFormRightDetail">{d.city}</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Nationality:</div>
                    <div class="reviewFormRightDetail">Indian</div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="reviewAllDetails">
              <div class="d-flex align-items-center">
                <div class="reviewTitle">Profile Details</div>
              </div>
              <div class="reviewFormDetails">
                <ul>
                  <li>
                    <div class="review-Detail-left">Gender:</div>
                    <div class="reviewFormRightDetail">Male</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Date of Birth:</div>
                    <div class="reviewFormRightDetail">03/06/1994</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Tobacco User:</div>
                    <div class="reviewFormRightDetail">No</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Phone Number</div>
                    <div class="reviewFormRightDetail">82******49</div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="reviewAllDetails">
              <div class="d-flex align-items-center">
                <div class="reviewTitle">Plan Info</div>
              </div>
              <div class="reviewFormDetails">
                <ul>
                  <li>
                    <div class="review-Detail-left">Life Cover:</div>
                    <div class="reviewFormRightDetail">
                      &nbsp;<span id="LifeCover">₹ {d.lifeCover}</span>
                    </div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Cover for:</div>
                    <div class="reviewFormRightDetail">{d.CoverFor}</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">Pay for:</div>
                    <div class="reviewFormRightDetail">{d.payFor}</div>
                  </li>
                  <li>
                    <div class="review-Detail-left">
                      Mode of premium payment:
                    </div>
                    <div class="reviewFormRightDetail">{d.paymentMode}</div>
                  </li>
                </ul>
              </div>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="I hereby consent to receive communication from Kotak e-Term or Its authorized representatives through"
            />
            <span>
              <img
                src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/whatsapp-icon.svg"
                alt=""
              />
              &nbsp;Whatsapp on
            </span>

            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  disabled
                  color="primary"
                />
              }
              label="I agree to opt for Auto Debit for all the future premium payments of this policy"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  disabled
                  color="primary"
                />
              }
              label="
        I Agree to the terms and conditions"
            />

            <div className="bottom-container">
              <div className="total-premium">
                <h3>Total Premium</h3>
              </div>

              <div className="checkout-btn">
                <Button variant="contained" >
                <Link className="payment-link" to={`/payment`}>Checkout</Link> 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>    
   :"" ))
}
    </>
  )

};
