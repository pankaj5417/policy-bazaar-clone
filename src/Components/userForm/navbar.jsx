import React from 'react';

export default function Navbar() {
  return <div>
       <div className="navbar-container">
          <div className="navbar-container-mid">
            <img
              className="policybaazar-logo cursor"
              src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/pbLogo.svg"
              alt=""
            />
            <div className="navbar-right cursor" >
              <img
                src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/callingIcon.svg"
                alt=""
              />&nbsp;
              <span>Talk to an Expert</span>
            </div>
          </div>
        </div>
  </div>;
}
