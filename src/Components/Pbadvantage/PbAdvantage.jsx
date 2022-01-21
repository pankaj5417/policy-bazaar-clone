import { useState } from "react";
import "./PbAdvantage.css";
import { Popup } from "./popup/Popup";
import { PopupData } from "./popup/popupData";

export const PbAdvantage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="global_cont_div">
      <h2>PB Advantage</h2>
      <div className="span_hr"></div>
      <div className="text_div">
        <p>
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers and being present for you in the toughest of times.
        </p>
      </div>
     

       <button className="btn_know_more" onClick={togglePopup}> Know more</button>

      {isOpen && <Popup
       handleClose={togglePopup}
       content={<div> <PopupData /> </div>}
      />}
      <div className="cont_div">
        <div  className="inner_cont_div">
          <div>
            
            <img
              src="https://lh3.googleusercontent.com/9ZUq7rMGou4WpiGUnXMAT5MdYZwnrUWst1RcX1pj5pj8dU3hSjlP1Efb5CIh7vJjxENDJHL1K6EmzuykqvZREBtqCkFmEUgtv9WjGU86"
              alt=""
            />
          </div>
          <div>
            <p className="title_p"> The best Prices</p>
            <p className="para_p">Guaranteed</p>
          </div>
        </div>
        <div className="inner_cont_div">
          <div>
            <img
              src="https://lh3.googleusercontent.com/xy0q-EbHE_wid13JTj-BSqvmQJNjck8xjZdE6P3MTz-jsbApLqfpQ75QOffpsNgcGWGj18jvDkYEvcaPRnbaCew8qq3faHOPa0pcTdw"
              alt=""
            />
          </div>

          <div>
            <p className="title_p">Unbiased Advice</p>
            <p className="para_p">Keeping customers first</p>
          </div>
        </div>
        <div className="inner_cont_div">
          <div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHRcgnC-47MBXk4YE2F3qJ1D380vE30TS37N2Q1yVxOhxrpkGQ"
              alt=""
            />
          </div>
          <div>
            <p className="title_p">100% Reliable</p>
            <p className="para_p">Regulated by IRDAI</p>
          </div>
        </div>
        <div className="inner_cont_div">
            <div><img src="https://lh3.googleusercontent.com/pqbZyr27Zxv4ElTT-ilkLQJhA7tVpirk0PYPbvxf96l6clFhgnCSoaXfbTEQOeGejrKb3osqI9cpCuXudNMEvfiSLhh1tMASJROZfKOo" alt="" /></div>
            <div>
                <p className="title_p">
Claims Support</p>
                <p className="para_p">Made stress-free

</p>
            </div>
        </div>
        <div className="inner_cont_div">
            <div><img src="https://lh3.googleusercontent.com/Mh6AY2S43Bff9BxYrvJhmnsmdagEiZeS3Qqu0sncB36zYg1nhwt9cbwJC5ErZAvZMbwPJ8rJRfVjPIgGOxG5X4KRqhTqskikMuTJxWXC" alt="" /></div>
            <div>
                <p className="title_p">Happy to Help

</p>
                <p className="para_p">Every day of the week

</p>
            </div>
        </div>
      </div>
    </div>
  );
};
