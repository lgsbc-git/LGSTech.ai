import React from "react";
import "../../styles/OurPartner.css";

import partner1 from "../../assets/clients/shoka.png";
import partner2 from "../../assets/clients/datamc.png";
import partner3 from "../../assets/clients/microsoft.png";
import partner4 from "../../assets/clients/ddptech.png";

function OurPartner() {
  const logos = [partner1, partner2, partner3, partner4];

  return (
    <section className="partner-section">
      <h2 className="partner-title">Our Partner</h2>
      <p className="partner-subtitle">
        We've proudly partnered with some of the most respected organizations worldwide.
      </p>

      <div className="partner-logos">
        {logos.map((logo, index) => (
          <div className="partner-logo-box" key={index}>
            <img src={logo} alt={`Partner ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPartner;
