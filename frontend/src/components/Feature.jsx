import React from "react";

const Feature = () => {
  return (
    <>
      <section className="feature-section">
        <div className="container">
          <div className="feature-header">
            <h2>Your user research Swiss Army knife</h2>
            <a className="secondary-button" href="">
              see all feature
            </a>
          </div>
          <div className="feature-area flex">
            <div className="feature-card flex">
                <img src="src/assets/asset 11.svg" alt="" />
                <h3>Card Starting</h3>
                <p>Discover how people group and label information.</p>
                <a className="secondary-button" href="">
              Learn more
            </a>
            </div>
            <div className="feature-card flex">
                <img src="src/assets/asset 13.svg" alt="" />
                <h3>Prototype tests</h3>
                <p>Discover how people navigate your Figma prototypes.</p>
                <a className="secondary-button" href="">
              Learn more
            </a>
            </div>
            <div className="feature-card flex">
                <img src="src/assets/asset 14.svg" alt="" />
                <h3>First click tests</h3>
                <p>Test interaction with first click and navigation tests.</p>
                <a className="secondary-button" href="">
              Learn more
            </a>
            </div>
            <div className="feature-card flex">
                <img src="src/assets/asset 15.svg" alt="" />
                <h3>Design surveys</h3>
                <p>Get feedback on images, videos or audio files.</p>
                <a className="secondary-button" href="">
              Learn more
            </a>
            </div>
            <div className="feature-card flex">
                <img src="src/assets/asset 16.svg" alt="" />
                <h3>Preference tests</h3>
                <p>Find out which designs users prefer and why.</p>
                <a className="secondary-button" href="">
              Learn more
            </a>
            </div>
            <div className="feature-card flex">
                <img src="src/assets/asset 17.svg" alt="" />
                <h3>Five second tests</h3>
                <p>Test comprehensibility by measuring first impressions.</p>
                <a className="secondary-button" href="">
              Learn more
            </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
