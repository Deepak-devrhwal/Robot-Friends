import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
  return (
    <div
      className='scroll2 scroll'
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
