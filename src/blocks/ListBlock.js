import React from "react";

const ListBlock = ({ data }) => (
  <section className="svc-section">
    {data.title && <h3 className="svc-section-title">{data.title}</h3>}
    <ul className="svc-bullet-list">
      {data.items && data.items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  </section>
);

export default ListBlock;
