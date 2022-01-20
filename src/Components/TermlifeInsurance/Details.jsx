// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

import React from "react";
import("./Details.css");

const Details = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [details, setDetails] = React.useState(false);
    
  const handleDetails = ()=>{
     if(details){
       setDetails(false);
     }
     else{
       setDetails(true);
     }
  }
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
            <img
              src="https://termlife.policybazaar.com/assets/images/akshayimg.png"
              alt="img"
            />
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
              <ToggleButton value="female" className="female-btn">
                FeMale
              </ToggleButton>
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
              type="Number"
              className="Name"
              label="Mobile Number"
              variant="outlined"
              placeholder="Your Mobile Number"
            />
            <br />
            <Button variant="contained" className="Button">
              View Free Quotes →
            </Button>
          </form>
          <div className="secure">
            <img
              src="https://termlife.policybazaar.com/assets/images/lock.svg"
              alt=""
            />
            Your personal information is secure with us
          </div>
          <br />
          <div className="policy">
            By clicking, you agree to our <span>Privacy policy</span>,
            <span>Terms of Use</span> & + <span>Disclaimers</span>
          </div>
          <div className="whts">
            <img
              src="https://static.pbcdn.in/term-cdn/images/images/term_whatsapp.svg"
              alt=""
            />
            <span>Get updates on WhatsApp</span>
            <Switch {...label} />
          </div>
        </div>
      </div>
      <div className="form2">
        <h3 className="know-more" onClick = {handleDetails}>
          <span>Know More about life insurance</span>
        </h3>
        {/* <br /> */}
        { details ? 
          <div className="details">
          <h3>Term Life Insurance</h3>
          <ul>
            <li>
              Term Life insurance provides coverage for a fixed period of time
              at a fixed premium rate.
            </li>
            <li>
              In case of untimely death of the life insured during the policy
              term , the nominee of the life insured gets the Total
              Payout/Benefit. The benefit can be paid out as a lump sum payout
              or a combination of Lump sum & Monthly payout or only as a Monthly
              payout.
            </li>
            <li>
              Therefore Term insurance plans are said to be pure protection
              plans which ensure financial stability of the dependants in case
              of untimely death of the life insured.
            </li>
          </ul>
          <h3>Benefits of Term Life Insurance</h3>
          <ul>
            <li>
              Death Benefit: In the unfortunate event of death of life insured
              during policy term, the nominee shall receive the Total Payout as
              a Lump sum amount or a combination of Lump sum & Monthly amount.
            </li>
            <li>
              Lump sum amount to take care of immediate financial liabilities.
            </li>
            <li>Monthly income to sustain the family lifestyle.</li>
            <li>
              Tax Benefit: The premiums paid for Term Life Insurance are Tax
              free under section 80(C) upto an amount of Rs 1,50,000.
            </li>
            <li>
              Rider Benefits: Riders are an important addition to the basic plan
              offering & provide an option to customize the coverage to the life
              insured.
            </li>
            <li>
              Accidental Death Benefit rider offers an additional sum assured
              over the base plan offering in case death occurs due to an
              accident.
            </li>
            <li>
              Accidental Disability rider offers an immediate lump sum payment
              on occurrence of any disability due to an accident.
            </li>
            <li>
              Critical Illness rider offers an additional sum assured over the
              base plan offering if the life insured is diagnosed with one of
              the critical illnesses mentioned in the rider.
            </li>
            <li>
              Waiver of Premium rider offers the waiver of all policy premiums
              in case the life insured is diagnosed permanent disability or
              critical illness.
            </li>
            <li>
              Option to increase Death benefit: Certain plans have offerings
              where the life insured can increase the life cover at key stages
              in life like marriage , birth of child.
            </li>
          </ul>
          <h3>Key Terms when comparing Term Life insurance plans</h3>
          <ul>
            <li>Total Payout of each plan</li>
            <li>Premium amount paid for desired Total Payout</li>
            <li>Policy term offered</li>
            <li>High claim settlement ratio</li>
          </ul>
        </div>:null
        }
        </div>
        
    </div>
  );
};

export default Details;
