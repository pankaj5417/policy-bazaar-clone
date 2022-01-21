import umre from "../../images/Umbrella1.png";
import car1 from "../../images/car1.png";
import box from "../../images/boxz1.png";
import piggy from "../../images/piggy.png";
import Dil from "../../images/dil.png";
import "./Home.css";
import "../homeHeader/Navbar.css";
export const Dropdown = () => {
  return (
    <>
      <div>
        <div className="home-ho dropdown new">
          <div
            className="footer-f"
            style={{
              lineHeight: "16px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <div>
              <img src={umre} style={{ margin: "5px" }} alt="one" />
              <b
                style={{
                  position: "absolute",
                  fontSize: "16px",
                  margin: "5px",
                }}
              >
                Life Insurance
              </b>
              <div style={{ marginLeft: "0%" }}>
                <p className="footer-hov">Term Insurance</p>
                <p className="footer-hov">Saral Jevan Beema</p>
                <p className="footer-hov">Life Insurance</p>
                <p className="footer-hov">Coronavirus Term Insurance</p>
                <p className="footer-hov">Term Insurance Return Of Premium</p>
                <p className="footer-hov">Term Life Insurance For Spouse</p>
                <p className="footer-hov">Term Insurance Calculator</p>
                <p className="footer-hov">Dedicated Claim Assistance</p>
              </div>
              <br></br>
              <div style={{ marginRight: "0%" }}>
                <img src={box} alt="one" />
                <b
                  style={{
                    marginLeft: "1%",
                    position: "absolute",
                    fontSize: "16px",
                  }}
                >
                  Other Insurance
                </b>
                <div style={{ marginRight: "0%" }}>
                  <p className="footer-hov">Travelar Insurance</p>
                  <p className="footer-hov">Group Health Insurance </p>
                  <p className="footer-hov">Home Insurance</p>
                  <p className="footer-hov">Senior Citizen Health Insurance</p>
                  <p className="footer-hov">Corona Virus Insurance</p>
                  <p className="footer-hov">Corona Kavach Policy</p>
                  <p className="footer-hov">Corona Rakshak Policy</p>
                  <p className="footer-hov">Arogya Sanjeevni Policy</p>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "3%" }}>
              <img src={piggy} alt="one" />
              <b
                style={{
                  marginLeft: "1%",
                  position: "absolute",
                  fontSize: "20px",
                }}
              >
                Investment Plans
              </b>
              <div style={{ marginRight: "0%" }}>
                <p className="footer-hov">Child Plans</p>
                <p className="footer-hov">Pension Plans </p>
                <p className="footer-hov">ULIP</p>
                <p className="footer-hov">Money Back Policy</p>
                <p className="footer-hov">Endowment Policy</p>
                <p className="footer-hov">Tax Saving Investments</p>
                <p className="footer-hov">Guaranteed Return Plans</p>
                <p className="footer-hov">Capital Guarantee Plans</p>
                <p className="footer-hov">Annuity Plans</p>
              </div>
            </div>
            <div>
              <img src={Dil} alt="one" />
              <b
                style={{
                  marginLeft: "2%",
                  position: "absolute",
                  fontSize: "16px",
                }}
              >
                Health Insurance
              </b>
              <div style={{ marginRight: "0%" }}>
                <p className="footer-hov">Family Health Insurance</p>
                <p className="footer-hov">Senior Citizen Health Insurance</p>
                <p className="footer-hov">Health Insurane For Parents</p>
                <p className="footer-hov">Coronavirus Health Insurance</p>
                <p className="footer-hov">Arogya Sanjeevani Insurance</p>
                <p className="footer-hov">Critical Illiness Insurance</p>
                <p className="footer-hov">Mediclaim Policy</p>
                <p className="footer-hov">Best Health Insurance Plans</p>
                <p className="footer-hov">Health Insurance Claim</p>
                <p className="footer-hov">Health Insurance Calculator</p>
              </div>
            </div>
            <div>
              <img src={car1} alt="one" />
              <b
                style={{
                  marginLeft: "1%",
                  position: "absolute",
                  fontSize: "16px",
                }}
              >
                Car Insurance
              </b>
              <div style={{ marginRight: "0%" }}>
                <p className="footer-hov">Motor Insurance</p>
                <p className="footer-hov">Two Wheeler Insurance</p>
                <p className="footer-hov">Commercial Vehicle Insurance</p>
                <p className="footer-hov">Taxi Insurance</p>
                <p className="footer-hov">Third Party Insurance</p>
                <p className="footer-hov">Best Car Insurance Companies</p>
                <p className="footer-hov">Uses Car Insurance</p>
                <p className="footer-hov">Pay As You Drive Insurance</p>
                <p className="footer-hov">Third Party Bike Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
