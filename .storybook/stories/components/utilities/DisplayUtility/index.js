import React from "react";

const positions = [
  "inline",
  "block",
  "flex",
  "grid",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "none",
  "inherit"
];

const position = positions.map(pos => {
  return (
    <div className={"bg-blue p-4 m-4 d-" + pos} style={{ top: 1, right: 0 }}>
      {pos}
    </div>
  );
});

function DisplayUtility() {
  return <div>{position}</div>;
}

export default DisplayUtility;
