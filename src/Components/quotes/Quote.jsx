import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { PlanCard } from "../planCard/PlanCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuotesData } from "../../features/quotations/actionCreators";
import { useState } from "react";
import FilterPop from "../FilterPop/FilterPop";

import("./Quote.css");

export const Quote = () => {
  const dispatch = useDispatch();

  const [payMonthly, setPayMonthly] = useState(false);
  const [range, setRange] = useState({
    lifeCover: 100,
    coverage: 500,
    claimsSettled: true,
  });

  const { loading, err, data } = useSelector((state) => ({
    loading: state.quotes.isLoading,
    err: state.quotes.isError,
    data: state.quotes.quotes,
  }));

  const updateRange = (e) => {
    let newRange = {
      ...range,
      [e.target.name]: +e.target.value,
    };

    console.log("updateRange", newRange);
    dispatch(getQuotesData(newRange));
  };

  console.log("data in quotes", data);

  useEffect(() => {
    dispatch(getQuotesData(range));
  }, []);

  const landingData = [{ img: "url", title: "title", tag: "Covers covind 19" }];

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

          <div className="lifeCover">
            <div>Life Cover</div>
            <div>
              <select onChange={updateRange} name="lifeCover">
                <option value="25">25 Lacs</option>
                <option value="50">50 Lacs</option>
                <option value="75">75 Lacs</option>
                <option value="100">1 Crore</option>
                <option value="125">1.25 Crore</option>
                <option value="150">1.5 Crore</option>
                <option value="175">1.75 Crore</option>
                <option value="200">2 Crore</option>
                <option value="225">2.25 Crore</option>
                <option value="250">2.50 Crore</option>
                <option value="275">2.75 Crore</option>
                <option value="300">3 Crore</option>
                <option value="325">3.25 Crore</option>
                <option value="350">3.50 Crore</option>
                <option value="375">3.75 Crore</option>
                <option value="400">4 Crore</option>
                <option value="425">4.25 Crore</option>
                <option value="450">4.50 Crore</option>
                <option value="475">4.75 Crore</option>
                <option value="500">5 Crore</option>
                <option value="600">6 Crore</option>
              </select>
            </div>
          </div>

          <div className="coverTillAge">
            <div style={{ fontSize: "12px" }}>Cover till age</div>
            <div>
              <select onChange={updateRange} name="coverage">
                <option value="32">32 Years</option>
                <option value="33">33 Years</option>
                <option value="34">34 Years</option>
                <option value="35">35 Years</option>
                <option value="36">36 Years</option>
                <option value="37">37 Years</option>
                <option value="38">38 Years</option>
                <option value="39">39 Years</option>
                <option value="40">40 Years</option>
                <option value="41">41 Years</option>
                <option value="42">42 Years</option>
                <option value="43">43 Years</option>
                <option value="44">44 Years</option>
                <option value="45">45 Years</option>
                <option value="46">46 Years</option>
                <option value="47">47 Years</option>
                <option value="48">48 Years</option>
                <option value="49">49 Years</option>
                <option value="50">50 Years</option>
                <option value="51">51 Years</option>
                <option value="52">52 Years</option>
                <option value="53">53 Years</option>
                <option value="54">54 Years</option>
                <option value="55">55 Years</option>
                <option value="60">60 Years</option>
                <option value="75">75 Years</option>
              </select>
            </div>
          </div>

          <div
            onClick={() => {
              setRange({
                ...range,
                claimsSettled: !range.claimsSettled,
              });

              dispatch(getQuotesData(range));
            }}
          >
            <p>Claim Settled</p>
            <img
              src="https://img.icons8.com/pastel-glyph/18/ffffff/sorting-arrows--v1.png"
              alt="up and down arrow"
              style={{ margin: "0px 3px" }}
            />
          </div>
          <div>
            <p>Pay Monthly</p>

            <FormGroup
              // onChange={() => {
              //   setPayMonthly(!payMonthly);
              // }}
            >
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 0 }} />}
                label=""
              />
            </FormGroup>

            <p>Pay Yearly</p>
          </div>
        </div>

        {data.map((e, i) => (
          <PlanCard {...e} payMonthly={payMonthly} key={i} />
        ))}
      </div>
      <FilterPop />
    </>
  );
};

//! incomplete
