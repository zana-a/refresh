import React from "react";

const positions = ["static", "relative", "absolute", "fixed", "sticky"];

const position = positions.map(pos => {
  return (
    <div className={"p-4 position-" + pos} style={{ top: 1, right: 0 }}>
      {pos}
    </div>
  );
});

function PositionUtility() {
  return <div>{position}</div>;
}

export default PositionUtility;
