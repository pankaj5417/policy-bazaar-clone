import Button from "@mui/material/Button";
import "./AdCard.css";

export const AdCard = () => {
  const data = {
    title: "Why Buy From Policybazaar?",
    content: [
      "Best Prices",
      "Dedicated Claim Assistance",
      "Unbiased & Certified advisors",
      "One click easy refunds",
    ],
    img: "http://termlife.policybazaar.com/family_adv.bfefdf35861e99b3d3dd.png",
  };

  return (
    <div className="adCard">
      <img src={data.img} alt="ad img" className="adImg" />

      <h3>{data.title}</h3>

      <div className="content">
        {data.content.map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      </div>

      <Button variant="outlined" className="knowMore">
        Know More
      </Button>
    </div>
  );
};
