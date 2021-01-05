import React from "react";
import Image from "next/image";

export default function Three() {
  return (
    <section className="Three" data-scroll-section>
      <div className="container container--pall">
        <div className="three_grid">
          <Card
            src="/1.png"
            width={302}
            height={194}
            title="Payment Processing"
            content="See how you stack up against comparable companies in similar
            stages."
          />

          <Card
            src="/3.png"
            width={302}
            height={194}
            title="Retention Audit"
            content="See how you stack up against comparable companies in similar
                stages."
          />

          <Card
            src="/2.png"
            width={302}
            height={194}
            title="Pricing Audit"
            content="See how you stack up against comparable companies in similar
                stages."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ src, width, height, title, content }) {
  return (
    <div className="threeCard flex flex-ai-c flex-jc-c flex-fd-c">
      <div className="iconWrapper">
        <Image src={src} width={width} height={height} alt="Pricing Audit" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
