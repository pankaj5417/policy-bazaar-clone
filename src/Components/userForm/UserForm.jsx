
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

import React from 'react';
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
  } from "react-hook-form";

 const UserForm=({formValues,setFormValues,handleChange})=> {
    const {username,email,income,occupation,education,lifeCover,CoverFor,pincode,city,nationality,medicalhistory,planOptions}=formValues
     console.log(formValues)
  //  const { control2 } = useFormContext();

    const useStyles = makeStyles((theme) => ({
        inputField: {
            width: "100%",
  
            margin: theme.spacing(1, 0),
          },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 470,
            maxWidth: 400,
            marginLeft:100
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
     
     <div className="field">
{/*
     <Controller
      //  control={control2}
        name="username"
        render={({ field }) => (
            <FormControl  className={classes.formControl}>

            <TextField
            id="standard-basic" 
            label="Full Name as per your ID Proof"
              type="text"
              
              required
             // placeholder="Full Name as per your ID Proof"
              value={formValues.username}
              onChange={handleChange}
              {...field}
            />
            </FormControl>
        )}
      />
      </div>
      */}
        
     <FormControl  className={classes.formControl}>

            <TextField
            id="standard-basic" 
            label="Full Name as per your ID Proof"
              type="text"
              name="username"
              required
             // placeholder="Full Name as per your ID Proof"
              value={username}
              onChange={handleChange}
            />
            </FormControl>
           
               </div>
          
       
          <p>{formErrors.username}</p>
          <div className="field">
          
          <FormControl  className={classes.formControl}>

            <TextField
            id="standard-basic" 
            label="Email Address"
              type="text"
              name="email"
              required
             // placeholder="Email Address"
              value={email}
              onChange={handleChange}
            />
            </FormControl>
            
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
          
          <FormControl  className={classes.formControl}>
            <TextField
            id="standard-basic" 
            label="Annual Income"
              type="number"
              name="income"
              required
             // placeholder="Annual Income"
              value={income}
              onChange={handleChange}
            />
            </FormControl>
            
             </div>
          <p>{formErrors.password}</p>
          
          <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Occupation</InputLabel>
            <Select required onChange={handleChange}  MenuProps={MenuProps} name="Occupation" id="occupation">
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
            <Select  onChange={handleChange}  MenuProps={MenuProps}  name="Education" id="education">
                <option disabled value="" selected>Education</option>
                <option value="postgraduate">Post-Graduate & Above</option>
                <option value="12th">12th</option>
                <option value="10th">10th</option>
                <option value="below10th">Below 10th</option>
                <option value="graduate">Graduate</option>

            </Select>
            </FormControl>
          
      
            <br />
         
            
  </div>
  )
}
export default UserForm

