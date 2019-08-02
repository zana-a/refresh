import React from "react";

const stContainer = {
  display: "flex",
  width: "100%"
};

const stBox = {
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "flex-end"
};

const backgroundImageBox = {
  width: "100%",
  height: "450px"
};

export function Flex(props) {
  return <div style={stContainer}>{props.children}</div>;
}

export function Box(props) {
  return (
    <div style={{ flex: 1 }}>
      <div style={stBox} className={"bg-" + props.color} />
      <span className='display-flex p-top-sm p-bottom-sm color-gray-6'>
        <small>{".bg-" + props.color}</small>
      </span>
    </div>
  );
}
