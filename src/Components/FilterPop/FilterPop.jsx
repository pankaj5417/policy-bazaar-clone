import React from "react";
import styled from "styled-components";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { quotesIsLoading, quotesIsSuccess } from "../../features/quotations/actionCreators";

const FilterPop = (props) => {
  // const dispatch = useDispatch();
  // const { loading } = useSelector((state) => ({
  //   loading: state.quotes.isLoading
  // }));
   
  //  setInterval(() => {
  //     dispatch(quotesIsLoading())
  //  }, 3000);
   
  return (
    <>
    <Pop>
        <img
          src="https://termlife.policybazaar.com/assets/images/toast-tick.svg"
          alt=""
        />
        <span>
          {props.content}
           &nbsp;
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
  right: 50px;
  border-left: 5px solid green;
  // tranform : translateX(1800px);
  // transition: transform 0.5s ease;
  animation: fadeInRight 1s ease-in-out;
  img {
    margin: 15px;
  }
  span {
    margin: 13px;
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(500px);
    }
    to {
      opacity: 1;
    }`;

export default FilterPop;
