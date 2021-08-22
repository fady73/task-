import React, { useState } from "react";
import { withRouter } from "react-router";
import classnames from "classnames";

import projects from "../../assets/1.png";
import location from "../../assets/2.png";
import date from "../../assets/3.png";
import zoom from "../../assets/4.png";

import "./Home.css";

const arrMaped = [
  {
    icon: date,
    text: "Monday Feb 16,11:00 Am - 2:00 ( 2 hrs)",
  },
  {
    icon: projects,
    text: "projects",
  },
  {
    icon: location,
    text: "location",
    left: (
      <div className="br-container_zoom-icon">
        <img src={zoom} alt="zoom" />
        <div>join call</div>
      </div>
    ),
  },
];

const Home = () => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    setClick(!click);
  };

  return (
    <div
      className={classnames("br-container", {
        "br-container-with-border": !click,
      })}
      onClick={handleOnClick}
    >
      <div className="br-container__row">
        <div className="br-container__title">Metting title</div>
        <div className="br-container__scheduled">scheduled</div>
      </div>
      {arrMaped.map((item) => (
        <div className="br-container__row">
          <div className="br-container__title_with_icon">
            <div>
              <img src={item.icon} alt={item.text} />
            </div>
            <div>{item.text}</div>
          </div>
          {item.left}
        </div>
      ))}
    </div>
  );
};

export default withRouter(Home);
