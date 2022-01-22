
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

export const UseForm2=()=> {
    const { control2 } = useFormContext();

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
  <div>
      <form onSubmit={handleSubmit} action="">

     <div className="field">
     <FormControl  className={classes.formControl}>

            <TextField
            id="standard-basic" 
            label="Pincode"
              type="text"
              name="username"
             // placeholder="Full Name as per your ID Proof"
              value={formValues.pincode}
              onChange={handleChange}
            />
            </FormControl>
               </div>
          
       
          <p>{formErrors.pincode}</p>
          <div className="field">
          <FormControl  className={classes.formControl}>

            <TextField
            id="standard-basic" 
            label="City"
              type="text"
              name="email"
             // placeholder="Email Address"
              value={formValues.city}
              onChange={handleChange}
            />
            </FormControl>
          </div>
          <p>{formErrors.city}</p>
          
          <p>{formErrors.password}</p>

          <FormControl  className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Nationality</InputLabel>
            <Select  onChange={handleChange}  MenuProps={MenuProps} name="Occupation" id="occupation">
                <option value="" selected>Occupation</option>
                <option value="salaried">Resident Indian</option>
               
                </Select>
         </FormControl>
                <br />
                <FormControl  className={classes.formControl}>
               <label>Is there any personal medical history of Heart Disease
                / Open Chest CABG / Open Heart Replacement or repair of Heart valves /
                 Heart surgery / Angioplasty / Cardiomyopathy / Any Cancer / Stroke /
                  Brain Tumor / Muscular Dystrophy / Blindness / Organ Transplant?</label>
                  </FormControl>
                  <br />
                  
                  <RadioGroup  className={classes.formControl} style={{display:"inline"}} onChange={handleChange}>
                      

             <FormControlLabel  value="yes" control={<Radio />} label="Yes" />
             <FormControlLabel  value="no" control={<Radio />} label="No" />
        </RadioGroup>
        
       
        
      
     
      
         
            </form>
  </div>
  )
}
//export default UseForm2

