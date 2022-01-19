// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import React from "react";
import("./Details.css");

const Details = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [alignment, setAlignment] = React.useState('web');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="main">
      <div className="navbar">
        <div className="first">
          <img src="policylogo.png" alt="Policy Bazaar" />
        </div>
        <img className="hand" src="money.png" alt="" />
        <span className="claim">Claim Assistance</span>
        <img
          className="call"
          src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/4a90e2/external-headphone-business-management-kmg-design-basic-outline-kmg-design.png"
          width="25"
          height="25"
          alt=""
        />
        <span className="claim"> Call us</span>
      </div>
      <div className="form">
        <div className="left">
          <div className="img-b">
            <img src="https://termlife.policybazaar.com/assets/images/akshayimg.png" alt="img" />
          </div>
        </div>
        <div className="right">
          <div className="headings">
            <h1 style={{ marginBottom: "0px" }}>
              <span className="span1">1 Crore </span>
              <span className="blk">life cover at </span>
              <span className="span2">₹490</span>
              <span style={{ fontSize: "24px" }}>/month</span>
              <span className="span3">+</span>
            </h1>
          </div>
          <div className="head2">Get insured from the comfort of your home</div>
          <div className="head3">
            <p>No Medical Tests Required</p>
            <p>COVID-19 covered</p>
          </div>

          <form className="forms">
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
              >
              <ToggleButton value="male">Male</ToggleButton>
              <ToggleButton value="female" className="female-btn">FeMale</ToggleButton>
              </ToggleButtonGroup>
            <br />
            <TextField
              className="Name"
              label="Full Name"
              variant="outlined"
              placeholder="Enter Your Name"
            />
            <TextField
              className="Name"
              label="Date of Birth"
              variant="outlined"
              placeholder="DD/MM/YYYY"
            />
            <TextField
              maxLength="10"
              type = "Number"
              className="Name"
              label="Mobile Number"
              variant="outlined"
              placeholder="Your Mobile Number"
            />
            <br />
            <Button variant="contained" className="Button" >View Free Quotes →</Button>
          </form>
           <div className="secure">
             <img src="https://termlife.policybazaar.com/assets/images/lock.svg" alt=""/>
              Your personal information is secure with us
           </div>
           <br />
           <div className="policy">
               By clicking, you agree to our <span>Privacy policy</span>,Terms of Use & + <span>Disclaimers</span>
           </div>
           <div className="whts">
            <img src="https://static.pbcdn.in/term-cdn/images/images/term_whatsapp.svg" alt="" />
            <span>Get updates on WhatsApp</span>   
            <Switch {...label} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Details;





