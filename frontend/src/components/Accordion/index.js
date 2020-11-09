import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  let activeClass = setActive ? "text-indigo-500" : "";
  const accordionContent = props.children || props.content;

  return (
    <div className="bg-white p-2 w-full flex flex-col">
      <button
        className={`bg-white p-2 flex items-center`}
        onClick={toggleAccordion}
      >
        <p className={`text-left text-gray-600  ${activeClass}`}>
          {props.title}
        </p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text">{accordionContent}</div>
      </div>
    </div>
  );
}

export default Accordion;
