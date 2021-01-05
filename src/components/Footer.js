import React from "react";

export default function Footer() {
  return (
    <section data-scroll-section className="Footer">
      <div className="container container--pall">
        <div className="footer-grid m-f-grid ">
          <div className="f-column" style={{ marginBottom: "2rem" }}>
            <div className="f-cta">Let's get your business started</div>
            <a href="/" className="btn">
              Get started
            </a>
          </div>
          <div className="f-column">
            <div className="f-title">Services</div>
            <a href="/" className="f-link">
              User analytics
            </a>
            <a href="/" className="f-link">
              Branding
            </a>
            <a href="/" className="f-link">
              Campaigns
            </a>
            <a href="/" className="f-link">
              Email marketing
            </a>
          </div>

          <div className="f-column">
            <div className="f-title">About</div>
            <a href="/" className="f-link">
              Our Story
            </a>
            <a href="/" className="f-link">
              Team
            </a>
            <a href="/" className="f-link">
              Benefits
            </a>
            <a href="/" className="f-link">
              Career
            </a>
          </div>

          <div className="f-column">
            <div className="f-title">Help</div>
            <a href="/" className="f-link">
              FAQ's
            </a>
            <a href="/" className="f-link">
              Contact Us
            </a>
            <a href="/" className="f-link">
              Enquires
            </a>
            <a href="/" className="f-link">
              Media Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
