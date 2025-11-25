import React from "react";

const HeroBlock = ({ data }) => {
  // data.heading, data.subheading, optional bg
  const style = data.bg ? { backgroundImage: `url(${data.bg})` } : {};
  return (
    <section className="svc-hero" style={style}>
      <div className="svc-hero-inner">
        <h2>{data.heading}</h2>
        {data.subheading && <p className="svc-hero-sub">{data.subheading}</p>}
      </div>
    </section>
  );
};

export default HeroBlock;
