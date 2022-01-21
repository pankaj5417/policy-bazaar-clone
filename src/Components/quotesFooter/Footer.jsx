import styled from "styled-components";
import "./Footer.css";

export const QuotesFooter = () => {
  return (
    <div className="quotes-footer-container">
      <div>
        <P>
          #Policybazaar is acting only as a facilitator and claims settlement
          shall be at the sole discretion of the Insurer
        </P>

        <P>**By choosing annual premium payment mode, you can save upto 5%.</P>

        <P>
          *Availability of non-medical and tele-medical underwriting are subject
          to disclosures made in the proposal form
        </P>

        <P>
          *Claims settlement for all companies are for individual death claims
          and have been rounded off to the closest first decimal.
        </P>

        <P>
          Policybazaar Insurance Brokers Private Limited (formerly known as
          Policybazaar Insurance Web Aggregator Private Limited) CIN:
          U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44,
          Gurgaon, Haryana – 122001 Policybazaar is now registered as a Direct
          Broker | Registration No. 742, Registration Code No. IRDA/ DB 797/ 19,
          Valid till 09/06/2024, License category- Direct Broker (Life &
          General) | Visitors are hereby informed that their information
          submitted on the website may be shared with insurers. Product
          information is authentic and solely based on the information received
          from the insurers.
        </P>

        <P>© Copyright 2008-2022 policybazaar.com. All Rights Reserved.</P>
      </div>
    </div>
  );
};

const P = styled.p`
  font-size: 11px;
  color: rgba(85, 111, 123, 0.8);
  font-family: Poppins, sans-serif;
`;
