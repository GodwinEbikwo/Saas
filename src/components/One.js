import React from "react";
import Image from "next/image";

export default function One() {
  return (
    <section className="Hero" data-scroll-section>
      <div className="container container--pall">
        <div className="hero-grid">
          <div className="rightgrid">
            <Image
              src="/hero-img.png"
              width={610}
              height={644}
              alt="hands"
              className="imgself"
            />
          </div>

          <div className="leftgrid">
            <h1>Engagement index </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
              dui elementum, placerat nulla et, efficitur magna. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>

            <a href="/" className="btn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
