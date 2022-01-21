import { PlansPageHeader } from "../../Components/Insuranceplanpage/Planspage";
import { Quote } from "../../Components/quotes/Quote";
import { AdCard } from "../../Components/ads/AdCard.jsx";

import "./QuotationPage.css";

export const QuotationPage = () => {
  return (
    <>
      <PlansPageHeader />
      <div className="quotation-page-main">
        <Quote />
        <AdCard />
      </div>
    </>
  );
};
