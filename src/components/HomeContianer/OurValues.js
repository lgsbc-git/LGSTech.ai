import React from "react";
import "../../styles/OurValues.css";

import valuesImg from "../../assets/home/Mission & Vision.webp";
import logoImg from "../../assets/home/LGSTECH Logo White Background_cropped.webp";

function OurValues() {
  return (
    <section className="values-section">

      {/* ================= TOP BLUE STATS BAR ================= */}
      <div className="values-stats-bar">
        <div className="value-stat">
          <h2>150+</h2>
          <p>Microsoft-Certified Technical Consultants Are Just A Call Away To Help You Out, Irresepective Of The Errors Of The Business Solution.</p>
        </div>

        <div className="divider"></div>

        <div className="value-stat">
          <h2>99%</h2>
          <p>Customer Satisfaction Is The Sole Reason We Have Been Working For 500+ Clients Round The Clock.</p>
        </div>

        <div className="divider"></div>

        <div className="value-stat">
          <h2>14+</h2>
          <p>Years Of Experience Have Taught Us to Resolve Challenging Business Issues, In No Time With 100% Success Rate.</p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="values-content">

        {/* LEFT IMAGE */}
        <div className="values-left">
          <img src={valuesImg} alt="Our Values" className="values-main-img" />
        </div>

        {/* RIGHT HEADING + GRID */}
        <div className="values-right">

          <h2 className="values-heading">
            Driving Innovation Through <br />
            AI And New Technology, <br />
            Delivering Tailored.
          </h2>

          {/* ⭐ NEW GRID — LOGO LEFT, CARDS RIGHT */}
          <div className="ourvalues-grid">

            {/* Logo (spans 2 rows) */}
            <div className="values-logo-box">
              <img src={logoImg} alt="LGS Tech" />
            </div>

            {/* Mission */}
            <div className="ourvalues-grid-card">
              <h3>Our Mission</h3>
              <p>
                Our focus is on empowering organizations to become more agile,
                data-driven, and future-ready.
              </p>
            </div>

            {/* Vision */}
            <div className="ourvalues-grid-card">
              <h3>Our Vision</h3>
              <p>
                Our goal is to continually push the boundaries of digital
                transformation by creating smarter, faster, and more connected
                business ecosystems.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurValues;

