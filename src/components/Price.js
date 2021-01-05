import React from "react";

export default function Price() {
  return (
    <section className="Price" data-scroll-section>
      <div className="container container--pall">
        <div className="inner">
          <h1>Get the right payment plan for future product.</h1>
        </div>
        <div className="price-grid">
          <Pcard
            label="Starter"
            title="Free"
            itemOne="1 website"
            itemTwo="5 GB Hosting"
            itemThree="Limited suppoort"
          />
          <PcardH
            label="Premium"
            title="$24"
            itemOne="3 website"
            itemTwo="15 GB Hosting"
            itemThree="Unlimited suppoort"
          />
          <Pcard
            label="Enterprise"
            title="$49"
            pp="/month"
            itemOne="1 GB website"
            itemTwo="5 GB Hosting"
            itemThree="Limited suppoort"
          />
        </div>
      </div>
    </section>
  );
}

function PcardH({ label, title, itemOne, itemTwo, itemThree }) {
  return (
    <div className="pcard pHover flex flex-ai-c flex-jc-c flex-fd-c">
      <div className="top">
        <span>{label}</span>
        <h1>
          {title}
          <span>/month</span>
        </h1>
      </div>
      <div className="bottom">
        <li>{itemOne}</li>
        <li>{itemTwo}</li>
        <li>{itemThree}</li>
      </div>
      <a href="/" className="btn">
        Get started
      </a>
    </div>
  );
}

function Pcard({ label, title, itemOne, itemTwo, itemThree, pp }) {
  return (
    <div className="pcard flex flex-ai-c flex-jc-c flex-fd-c">
      <div className="top">
        <span>{label}</span>
        <h1>
          {title} <span className="pp">{pp}</span>
        </h1>
      </div>
      <div className="bottom">
        <li>{itemOne}</li>
        <li>{itemTwo}</li>
        <li>{itemThree}</li>
      </div>
      <a href="/" className="btn">
        Get started
      </a>
    </div>
  );
}
