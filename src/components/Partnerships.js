import React from "react";
import Image from "next/image";

export default function Partnership() {
  return (
    <section className="Partnership" data-scroll-section>
      <div className="container container--pall">
        <div className="logo-container">
          <span>
            <Image src="/visa.svg" width={80} height={80} alt="master-card" />
          </span>
          <span>
            <Image src="/airbnb.svg" width={80} height={80} alt="master-card" />
          </span>
          <span>
            <Image
              src="/google-play.svg"
              width={100}
              height={100}
              alt="master-card"
            />
          </span>
          <span>
            <Image src="/ba.svg" width={80} height={80} alt="master-card" />{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
