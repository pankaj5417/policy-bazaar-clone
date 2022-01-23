import React from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import { pink, orange } from "@mui/material/colors";
// import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const PlansPageHeader = () => {
  const data = JSON.parse(localStorage.getItem("basicUserDetails"));

  return (
    <div className="main">
      <Navbar>
        <Logo>
          <img src="policylogo.png" alt="Policy Bazaar" />
        </Logo>
        <Nav>
          <div>
            <UL>
              <li>{data.gender} | </li>
              <li>{data.age} yrs | </li>
              <li>{data.smoker ? "Smoker" : "Non-Smoker"} | </li>
              <li>{data.income} lac | </li>
              <span style={{ color: "blue" }}>EDIT</span>
            </UL>
          </div>
          <div>
            <UL>
              <LI>
                <img
                  src="https://static.pbcdn.in/term-cdn/images/images/balance.svg"
                  alt=""
                />
                Compare Plans |{" "}
              </LI>
              <LI>
                <img
                  src="https://static.pbcdn.in/term-cdn/images/images/sort.svg"
                  alt=""
                />
                Sort |{" "}
              </LI>
              <LI>
                <img
                  src="https://static.pbcdn.in/term-cdn/images/images/filter-1.svg"
                  alt=""
                />
                Filter
              </LI>
            </UL>
          </div>
        </Nav>
      </Navbar>
      <Navbar2>
        <CHECKBOX>
          <Checkbox {...label} />
          Plans that Return my premium
          <img
            src="https://static.pbcdn.in/term-cdn/images/images/info.png"
            alt=""
            width="20px"
            height="20px"
          />
          <span>(Opted by 23% Customers)</span>
        </CHECKBOX>
        <Middle>
          In my absence, my family will get the life cover :{" "}
          <span style={{ color: "#0078fd", cursor: "pointer" }}>
            All at one go
          </span>
        </Middle>
        <Last>
          <Checkbox
            {...label}
            sx={{
              color: orange[800],
              "&.Mui-checked": {
                color: orange[600],
                size: "small",
              },
            }}
            id="check"
          />
          <label>Save upto</label>
          <img src="https://termlife.policybazaar.com/save-upto.df2f3d1d47ca4d9b0688.svg" alt="" />
        </Last>
      </Navbar2>
    </div>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0% 2%;
`;
const UL = styled.ul`
  list-style: none;
  display: felx;
  padding: 0px 35px;
  font-size: 13px;
  li {
    padding: 0px 5px;
  }
`;

const Navbar = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 999;
  top: 0;
`;

const Logo = styled.div`
  margin: 0.9% 5%;
`;
const LI = styled.li`
  text-align: center;
  color: #0078fd;
  cursor: pointer;
  img {
    max-width: 15px;
    margin: -2px 6px;
  }
`;

const Navbar2 = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 999;
  top: 2px;
`;

const CHECKBOX = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0% 4%;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  img {
    margin-left: 5px;
  }
  span {
    font-size: 10px;
    color: #667586;
    padding-left: 7px;
    font-weight: 400;
  }
`;
const Middle = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: center;
`;

const Last = styled.div`
  width: 130px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7%;
  border: 1px solid orange;
  padding: 7px 0px;
  margin-top: 0.8%;
  border-radius: 5px;
 
  label {
    width: 100%;
    color: orange;
    cursor: pointer;
    box-sizing: border-box;
    margin:-4px;
  }
  img{
    width: 50px;
    height: 40px;
    margin-right: -16px;
  } 
  img:after{ 
    animation: rotation 5s linear infinite;
  }
`;
