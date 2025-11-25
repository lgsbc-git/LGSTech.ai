import React from "react";

const ParagraphBlock = ({ data }) => (
  <section className="svc-section">
    {data.title && <h3 className="svc-section-title">{data.title}</h3>}
    <p className="svc-section-text">{data.text}</p>
  </section>
);

export default ParagraphBlock;
