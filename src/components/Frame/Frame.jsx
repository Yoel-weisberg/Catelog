/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Frame = ({ image, description, phone }) => {
  return (
    <div className="frame">
      <div className="div">
        <p className="p">
          <span className="text-wrapper">{description}</span>
        </p>
        <div className="element-wrapper">
          <p className="element">
            ליצירת קשר <br />
            דיסקרטי ומאובטח ;)
            <br />
            {phone}
          </p>
        </div>
        <img className="screenshot" alt="Screenshot" src={image} />
      </div>
    </div>
  );
};
