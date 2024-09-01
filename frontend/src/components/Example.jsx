import React from "react";

const Example = () => {
  return (
    <>
      <section className="example-section">
        <div className="container">
          <div className="example-header">
            <h2>One platform, endless possibilities</h2>
            <a className="secondary-button" href="">
              see more examples
            </a>
          </div>
          <div className="example-area flex">
            <a href="" className="example-card">
              <h3 className="card-text">
                Can users complete a task in my software interface?
              </h3>
            </a>
            <a href="" className="example-card">
              <h3 className="card-text">
              Can users find important pages on my website?
              </h3>
            </a>
            <a href="" className="example-card">
              <h3 className="card-text">
              Is my website intended audience clear?
              </h3>
            </a>
            <a href="" className="example-card">
              <h3 className="card-text">
              Do visitors understand what a page is about?
              </h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Example;
