import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container header-section flex">
        <div className="h-left">
          <h1>Design Confidently </h1>
          <p>
            UsabilityHub is a remote user research platform that takes the
            guesswork out of design decisions by validating them with real
            users.
          </p>
          <a href="#" className="primary-button get">
            Get started
          </a>
        </div>
        <div className="h-right">
            <img src="src/assets/asset 2.png" alt=""  />
        </div>
      </div>
    </header>
  );
};

export default Header;
