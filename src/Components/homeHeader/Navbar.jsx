import "./Navbar.css";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
function Navbar() {
  const [state, setState] = useState(false);

  const display = () => {
    setState(!state);
  };
  return (
    <>
      <div className="navbar">
        <div>
          <img
            className="logo-s"
            src="https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=1"
            alt="logo"
          />
        </div>
        <div className="navbar-insu " onMouseOver={display}>
          <p>Insurance Products</p>
          <svg
            width="12"
            height="8"
            className="navbar-vec"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z"
              fill="#0663F6"
            />
          </svg>
        </div>
        <div className="navbar-rev">
          <p>Renew Your Policy</p>
          <svg
            width="12"
            height="8"
            className="navbar-vec1"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z"
              fill="#0663F6"
            />
          </svg>
        </div>
        <div className="navbar-file">
          <p>File a claim</p>
        </div>
        <div className="navbar-sur">
          <p>Support</p>
          <svg
            width="12"
            height="8"
            className="navbar-vec2"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z"
              fill="#0663F6"
            />
          </svg>
        </div>
        <div className="navbar-sign">
          <button>Sign in</button>
        </div>
      </div>
      {state && <Dropdown></Dropdown>}
    </>
  );
}

export default Navbar;
