import React from "react";

export default function Iced_tea() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Side */}
        <div className="col-md-6 d-flex flex-column gap-4 ">
          <h3
            className=" fw-semibold fs-1 pt-5 "
            style={{ fontFamily: "Italiana", color: "#88c7d3" }}
          >
            Long Island Iced Tea
          </h3>
          <p
            className="text-white"
            style={{ fontFamily: "Poppins", textAlign: "justify" }}
          >
            The cocktail in question is an exquisite fusion of flavors that
            promises a delightful drinking experience. Its most prominent
            characteristic is its refreshing nature, making it an ideal choice
            for anyone seeking respite from the heat or simply looking for a
            revitalizing beverage. What sets this cocktail apart is its
            remarkable freshness; every sip is a burst of invigorating and crisp
            sensations that instantly enliven the palate. But it's not all about
            being refreshing; this cocktail also packs a punch with its robust
            alcoholic strength, ensuring a pleasantly warming effect with each
            sip. Adding a delightful twist to the mix is the zestiness of limes,
            which imparts a tangy and citrusy dimension to the drink. Together,
            these qualities create a harmonious and well-balanced cocktail
            that's sure to please the senses and leave a lasting impression.
          </p>
        </div>
        {/* Right Side */}
        <div className="col-md-6 border">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
