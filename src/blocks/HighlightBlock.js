import React from "react";

const HighlightBlock = ({ data }) => (
  <section className="svc-highlight" style={{ background: data.bg || "#00255d", color: data.textColor || "#fff" }}>
    <div className="svc-highlight-inner">
      {data.title && <h3>{data.title}</h3>}
      <p>{data.text}</p>
    </div>
  </section>
);

export default HighlightBlock;
