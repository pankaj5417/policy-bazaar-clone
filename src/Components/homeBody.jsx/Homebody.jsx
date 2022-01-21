import React from "react";
import thunder from "../../images/thuder.png";
import thunder1 from "../../images/thuder1.png";
import umre from "../../images/Umbrella1.png";
import Fam1 from "../../images/Fam1.png";
import bk from "../../images/bk.png";
import box from "../../images/boxz1.png";
import car1 from "../../images/car1.png";
import cr from "../../images/cr1.png";
import pepl from "../../images/pepl.png";
import bacha from "../../images/bacha1.png";
import tra from "../../images/trv1.png";
import Grid from "@mui/material/Grid";
import term from "../../images/term-add.mp4";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { PbAdvantage } from "../Pbadvantage/PbAdvantage";
import { SlideCorousel1 } from "../Carousel/Carousel1";
import { SlidesCarousel2 } from "../Carousel/Corousel2";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "65%",
  color: theme.palette.text.secondary,
}));

function Homebody() {
  return (
    <>
      <div className="home-main">
        <div className="home-total">
          <div className="home-head">
            <p className="home-up">
              Let’s find you <br />
              the <b>Best Insurance</b>
            </p>
          </div>
          <div>
            <video
              width="700"
              autoplay=""
              muted
              loop
              playsinline
              preload="metadata"
              className="home-img2"
            >
              <source src={term} type="video/mp4"></source>
            </video>
          </div>
          <div>
            <p style={{ marginLeft: "17%" }}>
              <img src={thunder} alt="thunder" />
              <p className="home-cont1">
                50+ insurers with one of the best prices{" "}
              </p>
            </p>
          </div>
          <div>
            <p>
              <img className="home-img" src={thunder1} alt="thunder" />
              <p className="home-cont2">Quick, easy & hassle free</p>
            </p>
          </div>
          <div className="home-maind">
            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Guaranteed Return Plan </p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam> Save tax
              </p>
            </div>
            <div className="home-tol">
              <img src={Fam1} alt="one" />
              <p className="home-tm">Family Health Insurance</p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam> New
              </p>
            </div>
            <div className="home-tol">
              <img src={bk} alt="one" />
              <p className="home-tm">2 Wheeler Insurance </p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam>Instant Policy
              </p>
            </div>
            <div className="home-tol">
              <img src={car1} alt="one" />
              <p className="home-tm">Car Insurance</p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam> Instant Policy
              </p>
            </div>
            <div className="home-tol">
              <img src={bk} alt="one" />
              <p className="home-tm">Investment Plans </p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam>
                Save Tax
              </p>
            </div>
            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Health Insurance </p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam> Covers covid-19
              </p>
            </div>
            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Term Life Insurance </p>
              <p className="home-tm1-5">
                <spam className="home-dot"> </spam> Covers covid-19
              </p>
            </div>
            <div className="home-tol">
              <img src={box} alt="one" />
              <p className="home-tm">View All Products </p>
            </div>
            <div className="home-tol">
              <img src={cr} alt="one" />
              <p className="home-tm"> 1 Cr Health Insurance </p>
            </div>
            <div className="home-tol">
              <img src={pepl} alt="one" />
              <p className="home-tm">Group Health Insurance</p>
              <p className="home-tmc">
                <spam className="home-dot1"> </spam> New
              </p>
            </div>
            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Retirement Plans </p>
              <p className="home-tmc">
                {" "}
                <spam className="home-dot1"> </spam> New
              </p>
            </div>
            <div className="home-tol">
              <img src={bacha} alt="one" />
              <p className="home-tm">Child Savings Plans</p>
              <p className="home-tmc">
                {" "}
                <spam className="home-dot1"> </spam> New
              </p>
            </div>
            <div className="home-tol">
              <img src={tra} alt="one" />
              <p className="home-tm">Travel Insurance </p>
              <p className="home-tm1-5">
                {" "}
                <spam className="home-dot"> </spam> Covers covid-19
              </p>
            </div>
            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Saral Jeevan Bima </p>
              <p className="home-tmc">
                {" "}
                <spam className="home-dot1"> </spam> New
              </p>
            </div>
          </div>
        </div>
        <p className="home-also">ALSO BUY</p>
        <Grid
          container
          spacing={2}
          style={{
            width: "80%",
            alignItems: "left",
            textAlign: "left",
            marginLeft: "19%",
          }}
        >
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Term Life
              </p>
              <p className="home-te1">Return of Premium</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Term Life
              </p>
              <p className="home-te1">Non-Working Spouse Plan</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <spam
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></spam>{" "}
                Health
              </p>
              <p className="home-te1">Corona Virus Health Insurance</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <spam
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></spam>{" "}
                Health
              </p>
              <p className="home-te1">Arogya Sanjeevani</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Home
              </p>
              <p className="home-te1">Home Building & Items</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#3AC2F3" }}>
                {" "}
                <spam
                  className="home-dot3"
                  style={{ backgroundColor: "#3AC2F3" }}
                ></spam>{" "}
                Motor
              </p>
              <p className="home-te1">Comercial Vehicals</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Others
              </p>
              <p className="home-te1">pet Insurance</p>
            </Item>
          </Grid>
        </Grid>
      </div>
      <SlideCorousel1 />
      <PbAdvantage />
      <SlidesCarousel2 />
    </>
  );
}

export default Homebody;
