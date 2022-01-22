import React from "react";
import styled from "styled-components";

const FilterPop = (props) => {
  return (
    <>
      <Pop>
        <img
          src="https://termlife.policybazaar.com/assets/images/toast-tick.svg"
          alt=""
        />
        <span>
          {props.content}
          <br />
          <strong>{props.title}</strong>
        </span>
      </Pop>
    </>
  );
};

const Pop = styled.div`
  background-color: #ebf7ee;
  border: 1px solid rgba(56, 179, 89, 0.5019607843137255);
  width: 370px;
  position: fixed;
  height: 65px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px;
  top: 78%;
  z-index: 99;
  // tranform : translate(1800px);
  // transition: transform 0.5s ease;
  right: 50px;
  border-left: 5px solid green;
  img {
    margin: 15px;
  }
  span {
    margin: 13px;
  }
`;

export default FilterPop;
