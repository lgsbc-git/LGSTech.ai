import React from "react";
import "../../styles/OurWorkProcess.css";

// Import images for each process step
import discoverImg from "../../assets/home/female-team-leader-business-meeting-office-1.JPG";
import designImg from "../../assets/home/stepimg05.png.png";
import deliverImg from "../../assets/home/step04.png.png";
import driveImg from "../../assets/home/happy-business-partners-raising-hands.jpg";

function OurWorkProcess() {
  const processSteps = [
    {
      id: 1,
      title: "DISCOVER",
      subtitle: "A shared understanding of success",
      image: discoverImg,
      position: "left",
    },
    {
      id: 2,
      title: "DESIGN",
      subtitle: "A vision of the future",
      image: designImg,
      position: "right",
    },
    {
      id: 3,
      title: "DELIVER",
      subtitle: "Creating meaningful solutions",
      image: deliverImg,
      position: "left",
    },
    {
      id: 4,
      title: "DRIVE",
      subtitle: "Ensuring ongoing value is delivered",
      image: driveImg,
      position: "right",
    },
  ];

  return (
    <section className="work-process-section">
      <div className="work-process-container">
        <h1 className="work-process-heading">Our Work Process</h1>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={step.id} className={`process-step ${step.position}`}>
              {/* Content */}
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-subtitle">{step.subtitle}</p>
              </div>

              {/* Image */}
              <div className="process-image-wrapper">
                <img
                  src={step.image}
                  alt={step.title}
                  className="process-image"
                />
              </div>

              {/* Timeline */}
              {index < processSteps.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorkProcess;
