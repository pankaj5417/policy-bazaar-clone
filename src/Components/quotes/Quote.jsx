import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { PlanCard } from "../planCard/PlanCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuotesData } from "../../features/quotations/actionCreators";
import { useState } from "react";

import("./Quote.css");

export const Quote = () => {
  // const [list , setList] = useState(false)
  const filter = {
    coverage: "35 Lac",
    coverTillAge: "38 Yrs",
  };

  const { loading, err, data } = useSelector((state) => ({
    loading: state.quotes.isLoading,
    err: state.quotes.isError,
    data: state.quotes.quotes,
  }));

  console.log("data in quotes", data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotesData());
  }, []);

  // const handleList = () => {
  //    if(list){
  //      setList(false);
  //    }
  //    else{
  //      setList(true)
  //    }
  // }

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 52,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 0,
      padding: 0,
      bottom: 0,
      left: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(30px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('https://img.icons8.com/external-becris-lineal-becris/14/ffffff/external-check-mintab-for-ios-becris-lineal-becris-1.png')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#00E676" : "#00E676",
      width: 20,
      height: 20,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('https://img.icons8.com/external-becris-lineal-becris/14/ffffff/external-check-mintab-for-ios-becris-lineal-becris-1.png')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <>
      <div className="quote-container">
        <div className="header">
          <div>
            <p>Insurer</p>
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/16/ffffff/external-filter-interface-kiranshastry-lineal-kiranshastry.png"
              alt="filter img"
              style={{ margin: "0px 3px" }}
            />
          </div>

          {/* you need to append here */}
          <div className="lifeCover">
            <div>Life Cover</div>
            <div>
              <select>
                <option value="25lakh">25 Lacs</option>
                <option value="50lakh">50 Lacs</option>
                <option value="75lakh">75 Lacs</option>
                <option value="1crore">1 Crore</option>
                <option value="1.25crore">1.25 Crore</option>
                <option value="1.5crore">1.5 Crore</option>
                <option value="1.75crore">1.75 Crore</option>
                <option value="2crore">2 Crore</option>
                <option value="2.25crore">2.25 Crore</option>
                <option value="2.50crore">2.50 Crore</option>
                <option value="2.75crore">2.75 Crore</option>
                <option value="3crore">3 Crore</option>
                <option value="3.25crore">3.25 Crore</option>
                <option value="3.50crore">3.50 Crore</option>
                <option value="3.75crore">3.75 Crore</option>
                <option value="4crore">4 Crore</option>
                <option value="4.25crore">4.25 Crore</option>
                <option value="4.50crore">4.50 Crore</option>
                <option value="4.75crore">4.75 Crore</option>
                <option value="5crore">5 Crore</option>
                <option value="6crore">6 Crore</option>
              </select>
            </div>
          </div>

          {/* you need to append here */}
          <div className="coverTillAge">
            <div style={{ fontSize: "12px" }}>Cover till age</div>
            <div>
              <select>
                <option value="32years">32 Years</option>
                <option value="33years">33 Years</option>
                <option value="34years">34 Years</option>
                <option value="35years">35 Years</option>
                <option value="36years">36 Years</option>
                <option value="37years">37 Years</option>
                <option value="38years">38 Years</option>
                <option value="39years">39 Years</option>
                <option value="40years">40 Years</option>
                <option value="41years">41 Years</option>
                <option value="42years">42 Years</option>
                <option value="43years">43 Years</option>
                <option value="44years">44 Years</option>
                <option value="45years">45 Years</option>
                <option value="46years">46 Years</option>
                <option value="47years">47 Years</option>
                <option value="48years">48 Years</option>
                <option value="49years">49 Years</option>
                <option value="50years">50 Years</option>
                <option value="51years">51 Years</option>
                <option value="52years">52 Years</option>
                <option value="53years">53 Years</option>
                <option value="54years">54 Years</option>
                <option value="55years">55 Years</option>
                <option value="60years">60 Years</option>
                <option value="75years">75 Years</option>
              </select>
            </div>
          </div>

          <div>
            <p>Claim Settled</p>
            <img
              src="https://img.icons8.com/pastel-glyph/18/ffffff/sorting-arrows--v1.png"
              alt="up and down arrow"
              style={{ margin: "0px 3px" }}
            />
          </div>
          <div>
            <p>Pay Monthly</p>

            <FormGroup>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 0 }} defaultChecked />}
                label=""
              />
            </FormGroup>

            <p>Pay Yearly</p>
          </div>
        </div>

        {data.map((e, i) => (
          <PlanCard {...e} key={i} />
        ))}
      </div>
    </>
  );
};

//! incomplete
