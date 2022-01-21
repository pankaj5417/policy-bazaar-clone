import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { PlanCard } from "../planCard/PlanCard";

import("./Quote.css");

export const Quote = () => {
  const filter = {
    coverage: "35 Lac",
    coverTillAge: "38 Yrs",
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('https://img.icons8.com/external-becris-lineal-becris/14/ffffff/external-check-mintab-for-ios-becris-lineal-becris-1.png')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
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
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <p>Insurer</p>
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/16/000000/external-filter-interface-kiranshastry-lineal-kiranshastry.png"
              alt="filter img"
              style={{ margin: "0px 3px" }}
            />
          </div>
          <div className="lifeCover">
            <div>Life Cover</div>
            <div>
              <b>{filter.coverage}</b>
              <img
                src="https://img.icons8.com/external-those-icons-lineal-those-icons/12/000000/external-down-arrows-those-icons-lineal-those-icons-1.png"
                alt="arrow-down"
                style={{ margin: "0px 3px" }}
              />
            </div>
          </div>

          <div className="coverTillAge">
            <div>Cover till age</div>

            <div>
              <b>{filter.coverTillAge}</b>
              <img
                src="https://img.icons8.com/external-those-icons-lineal-those-icons/12/000000/external-down-arrows-those-icons-lineal-those-icons-1.png"
                alt="arrow-down"
                style={{ margin: "0px 3px" }}
              />
            </div>
          </div>
          <div>
            <p>Claim Settled</p>
            <img
              src="https://img.icons8.com/pastel-glyph/18/000000/sorting-arrows--v1.png"
              alt="up and down arrow"
              style={{ margin: "0px 3px" }}
            />
          </div>
          <div>
            <p>Pay Monthly</p>

            <FormGroup>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label="Pay Yearly"
              />
            </FormGroup>
          </div>
        </div>

        <PlanCard />
      </div>
    </>
  );
};

//! incomplete
