import React from "react";
import "../../styles/WhyChoose.css";

import centerImg from "../../assets/home/Why Choose Us.jpeg";
import icon1 from "../../assets/home/1.svg";
import icon2 from "../../assets/home/2.svg";
import icon3 from "../../assets/home/3.svg";
import icon4 from "../../assets/home/4.svg";

function WhyChoose() {
  return (
    <section className="why-section">

      {/* ===== TOP TEXT ===== */}
      <p className="why-subtitle">Why Choose LGSTech?</p>

      <h2 className="why-title">
        Your Trusted Partner In Digital <br />Transformation
      </h2>

      <p className="why-description">
        In A World Where Technology Evolves Faster Than Ever, Choosing The Right Partner Makes All The 
        Difference. At LGSTech, We Go Beyond Solutions — We Deliver Success. Our Approach Blends 
        Innovation, Expertise, And Integrity To Help Your Business Stay Ahead In A Competitive Landscape.
      </p>

      {/* ===== MAIN CONTENT WRAPPER ===== */}
      <div className="why-wrapper">

        {/* LEFT FEATURES */}
        <div className="why-left">
          <div className="why-card">
            <div className="why-icon">
              <img src={icon1} alt="Expertise" />
            </div>
            <div className="why-info">
              <h3>Proven Expertise</h3>
              <p>
                With deep experience across ERP systems, Dynamics 365, Azure Cloud, and data migration, our
                team brings unmatched technical know-how and strategic insight to every project.
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={icon2} alt="Tailored Solutions" />
            </div>
            <div className="why-info">
              <h3>Tailored Solutions</h3>
              <p>
                We understand that every business is unique. Our solutions are customized to fit your goals,
                workflows, and future growth — not one-size-fits-all templates.
              </p>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="why-center">
          <img src={centerImg} alt="Team Meeting" className="why-center-img" />
        </div>

        {/* RIGHT FEATURES */}
        <div className="why-right">
          <div className="why-card">
            <div className="why-icon">
              <img src={icon3} alt="Support" />
            </div>
            <div className="why-info">
              <h3>End-To-End Support</h3>
              <p>
                From consultation and implementation to training and optimization, we're with you at every 
                step of your digital journey.
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={icon4} alt="Innovation" />
            </div>
            <div className="why-info">
              <h3>Innovation At The Core</h3>
              <p>
                We continuously evolve our strategies and adopt cutting-edge technologies to ensure your 
                business remains modern, efficient, and future-ready.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM TAGLINE */}
      <p className="why-bottom-tagline">
        Choose Innovation. Choose Reliability. Choose LGSTech.
      </p>

    </section>
  );
}

export default WhyChoose;
