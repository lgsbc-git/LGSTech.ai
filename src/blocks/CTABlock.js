import React from "react";
import { useNavigate } from "react-router-dom";

const CTABlock = ({ data }) => {
  const navigate = useNavigate();
  return (
    <section className="svc-cta">
      <h3>{data.text}</h3>
      <button onClick={() => (data.link ? navigate(data.link) : null)}>{data.button}</button>
    </section>
  );
};

export default CTABlock;
