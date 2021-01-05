import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="Hero" data-scroll-section>
      <div className="container container--pall">
        <div className="hero-grid">
          <div className="leftgrid">
            <h1>Enhancing small businesses through curated ads </h1>
            <p>
              Outcome-centered products that reduce churn, optimize pricing, and
              grow your subscription business end-to-end.
            </p>

            <div className="btn-row flex flex-ai-c">
              <a href="/" className="btn">
                Get started
              </a>
              <div className="round-btn">
                <a href="">
                  <Image
                    src="/button-arrow.svg"
                    width={30}
                    height={30}
                    alt="arrow-down"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="rightgrid">
            <Image
              src="/man.png"
              width={2160}
              height={2160}
              alt="hands"
              className="imgself"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
