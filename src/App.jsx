import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import Navbar from "./Components/TermlifeInsurance/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes> */}
        {/* all public and private routes be declared here*/}
        {/* <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;

// ! All pages should be placed in the pages folder
// ! All components should be placed in the components folder
// ! Any images, svg, pdf and others will be placed in the public folder
// ! Any common and resuable functions like loadDataFromLocalStorage(key) should be placed in the utils folder
// ! Reach out to me in case of any concerns
