import React from "react";
import Image from "next/image";

export default function Two() {
  return (
    <section className="Hero" data-scroll-section>
      <div className="container container--pall">
        <div className="hero-grid">
          <div className="leftgrid">
            <h1>Real-time analysis </h1>
            <p>
              Donec ut elementum nulla, eu bibendum sapien. Integer vitae velit
              egestas felis eleifend dapibus accumsan sed tellus.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
              dui elementum, placerat nulla et, efficitur magna.
            </p>

            <a href="/" className="btn">
              Learn more
            </a>
          </div>

          <div className="rightgrid">
            <div className="imgWrapper">
              <Image
                src="/two.png"
                width={347}
                height={474}
                alt="analysis"
                className="imgself"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
