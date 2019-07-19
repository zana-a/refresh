import React from "react";

const container = {
  marginLeft: "10px",
  marginTop: "10px"
};

function Buttons() {
  return (
    <div style={container}>
      <button className='btn btn-default'>Default</button>
      <button className='btn btn-primary'>Primary</button>
    </div>
  );
}

export default Buttons;
