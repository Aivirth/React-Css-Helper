import React, { Component } from "react";

class Stage extends Component {
  render() {
    return (
      <div className="Stage">
        <div className="Stage__actor">Actor</div>

        <div className="Stage__options">
          <ul className="Stage__tabs">
            <li className="Stage__tab">
              <a href="#test4" className="active">
                Test 1
              </a>
            </li>
            <li className="Stage__tab">
              <a className="" href="#test5">
                Test 2
              </a>
            </li>
            <li className="Stage__tab">
              <a href="#test6" className="">
                Test 3
              </a>
            </li>
          </ul>
        </div>

        <div className="Stage__content">
          <div id="test4" style={{ display: "block" }} className="active">
            Test 1
          </div>
          <div id="test5" className="" style={{ display: "none" }}>
            Test 2
          </div>
          <div id="test6" style={{ display: "none" }} className="">
            Test 3
          </div>
        </div>

        <div className="Stage__reveal">
          <span className="Stage__title">
            Card Title<i className="">close</i>
          </span>

          <button>Get Styles</button>
        </div>
      </div>
    );
  }
}

export default Stage;
