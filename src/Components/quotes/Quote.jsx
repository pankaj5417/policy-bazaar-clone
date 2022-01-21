import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { PlanCard } from "../planCard/PlanCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuotesData } from "../../features/quotations/actionCreators";

import("./Quote.css");

export const Quote = () => {
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
              <b>{filter.coverage}</b>
              <img
                src="https://img.icons8.com/external-those-icons-lineal-those-icons/12/ffffff/external-down-arrows-those-icons-lineal-those-icons-1.png"
                alt="arrow-down"
                style={{ margin: "0px 3px" }}
              />
            </div>
          </div>

          {/* you need to append here */}
          <div className="coverTillAge">
            <div>Cover till age</div>

            <div>
              <b>{filter.coverTillAge}</b>
              <img
                src="https://img.icons8.com/external-those-icons-lineal-those-icons/12/ffffff/external-down-arrows-those-icons-lineal-those-icons-1.png"
                alt="arrow-down"
                style={{ margin: "0px 3px" }}
              />
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
