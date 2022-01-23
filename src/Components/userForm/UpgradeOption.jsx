
import { useState, useEffect } from "react";
import "./UseForm.css";
import { motion, useAnimation } from "framer-motion"
import { makeStyles,useTheme } from '@material-ui/core/styles';
import {TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,} from '@material-ui/core';
    import {
        useForm,
        Controller,
        FormProvider,
        useFormContext,
      } from "react-hook-form";

import React from 'react';

export const UpgradeOption=({formValues,setFormValues,handleChange})=> {

    const {username,email, income,occupation, education,lifeCover, CoverFor,pincode,city,nationality,medicalhistory,planOptions}=formValues
console.log(formValues)

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


const control=useAnimation()
/*
  const initialValues = { username: "", email: "", income: "",occupation:"",education:"",lifeCover:"",CoverFor:"" };
  const [formValues, setFormValues] = useState(initialValues);
  */
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
/*
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
*/
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
  <div>
          <div className="upgrade-container">
          <div className="upgrade-plan">
              <span>Plan Options</span>
     
      <RadioGroup name="planOptions" onChange={handleChange}>
                      

            <FormControlLabel 
            label="₹ 1 Crore in a single instalment "
             value="icrore"
              control={<Radio />}  
            />

            <FormControlLabel 
            
            label="₹ 10 Lacs on death plus Rupee Icon 49,320 monthly income for 15 years" 
            value="10lakh"
             control={<Radio />}
               
            />
            <FormControlLabel 
              label="₹ 10 Lacs on death plus increasing monthly income for 15 years wherein 
            the first year monthly income will be Rupee Icon 49,320 and it will increase every
             year upto Rupee Icon 118368 " 
             value="10lakhplus"
             control={<Radio />}
               className="upgrade-radio-btn"
            />
           
        
        
      </RadioGroup>
     
      </div>
      <div className="horizontal-line">

    </div>
      </div>
          
  </div>
  )
}
//export default UseForm2

