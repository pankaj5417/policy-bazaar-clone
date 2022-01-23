import React from "react";
import Footer from "../../Components/homeFooter/Footer";
import Header from "../../Components/homeHeader/Navbar";
import Homebody from "../../Components/homeBody.jsx/Homebody";
function Home() {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <Header />
      <Homebody />
      <Footer />
    </div>
  );
}

export default Home;
