import React from "react";
import styled from "styled-components"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Planspage = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="main">
      <div className="navbar">
        <div>
          <img src="policylogo.png" alt="Policy Bazaar" />
        </div>
        <Nav>
          <div>
          <UL>
            <li>Male |</li>
            <li>21 yrs |</li>
            <li>Non-Smoker |</li>
            <li>10-15lac |</li>
            <span style={{color:"blue"}}>Edit</span>
          </UL>
          </div>
          <div>
          <UL>
            <li>Male |</li>
            <li>21 yrs |</li>
            <li>Non-Smoker |</li>
            <li>10-15lac |</li>
            {/* <span style={{color:"blue"}}>Edit</span> */}
          </UL>
          </div>
        </Nav>
      </div>
    </div>
  );
};

const UL = styled.ul`
list-Style: none;
display:felx;`

const Nav = styled.div`
display: flex;
justify-content:flex-end;`

export default Planspage;
