import React from "react";

const StepsBlock = ({ data }) => (
  <section className="svc-section">
    {data.title && <h3 className="svc-section-title">{data.title}</h3>}
    <ol className="svc-steps">
      {data.steps && data.steps.map((s, i) => (
        <li key={i}><strong>Step {i+1}.</strong> {s}</li>
      ))}
    </ol>
  </section>
);

export default StepsBlock;
