import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Details from "./Components/TermlifeInsurance/Details";
import UseForm from "./Components/userForm/UseForm";
import { Quote } from "./Components/quotes/Quote";
import { PlanCard } from "./Components/planCard/PlanCard";
import Planspage from "./Components/Insuranceplanpage/Planspage";

function App() {
  return (
    <div className="App">
      <Planspage />
      {/* <PlanCard /> */}
      <Routes>
        {/* all public and private routes be declared here*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UseForm />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// ! All pages should be placed in the pages folder
// ! All components should be placed in the components folder
// ! Any images, svg, pdf and others will be placed in the public folder
// ! Any common and resuable functions like loadDataFromLocalStorage(key) should be placed in the utils folder
// ! Reach out to me in case of any concerns
