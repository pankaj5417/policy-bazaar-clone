import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import("./Navbar.css");

const Navbar = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="first">
          <img src="policylogo.png" alt="Policy Bazaar" />
        </div>
        <img className="hand" src="money.png" />
        <span className="claim">Claim Assistance</span>
        <img
          className="call"
          src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/4a90e2/external-headphone-business-management-kmg-design-basic-outline-kmg-design.png"
          width="25"
          height="25"
        />
        <span className="claim"> Call us</span>
      </div>
      <div className="form">
          <div className="left">
          <div className = "img-b">
              <img src="https://termlife.policybazaar.com/assets/images/akshayimg.png" />
          </div>

          </div>
          <div className="right">
            <div className = "headings">
                <h1 style={{marginBottom: "0px"}}>
                    <span className = "span1">1 Crore </span>
                    <span className = "blk">life cover at </span>
                    <span className = "span2">₹490</span>
                    <span style={{fontSize:"24px"}}>/month</span>
                    <span className="span3">+</span>
                </h1>
            </div>
                <div className="head2">Get insured from the comfort of your home</div>
                <div className="head3">
                    
                </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
