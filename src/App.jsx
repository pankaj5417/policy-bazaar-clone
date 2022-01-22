import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./";
import Details from "./Components/TermlifeInsurance/Details";
import UseForm from "./Components/userForm/UseForm";
import { Quote } from "./Components/quotes/Quote";
import { PlanCard } from "./Components/planCard/PlanCard";
import Planspage from "./Components/Insuranceplanpage/Planspage";
import UserForm from "./Components/userForm/UserForm";
import { ReviewDetails } from "./Components/userForm/reviewDetails";
import { QuotationPage } from "./pages/Quotations/QuotationPage";

function App() {
  return (
    <>
      {/* <Planspage /> */}
      {/* <PlanCard /> */}
      <Routes>
        {/* all public and private routes be declared here*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UseForm />}></Route>
        <Route path="/user/review" element={<ReviewDetails />}></Route>

        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/quotationPage" element={<QuotationPage />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;

// ! All pages should be placed in the pages folder
// ! All components should be placed in the components folder
// ! Any images, svg, pdf and others will be placed in the public folder
// ! Any common and resuable functions like loadDataFromLocalStorage(key) should be placed in the utils folder
// ! Reach out to me in case of any concerns
