import React from "react";

const TwoColumnBlock = ({ data }) => (
  <section className="svc-two-col">
    <div className="svc-col left">
      {data.leftTitle && <h4>{data.leftTitle}</h4>}
      <p>{data.leftText}</p>
    </div>
    <div className="svc-col right">
      {data.rightTitle && <h4>{data.rightTitle}</h4>}
      <p>{data.rightText}</p>
    </div>
  </section>
);

export default TwoColumnBlock;
