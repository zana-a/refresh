import React from "react";

const ColorUtil = props => {
  return (
    <div className={"bg-" + props.bg + " " + "display-block p-2"}>
      <h1 className={"t-" + props.textColor}>A Dilemma</h1>
      <p className={"t-" + props.textColor}>
        <strong>Morty: </strong> "I mean, why would a Pop-Tart want to live
        inside a toaster, Rick? I mean, that would be like the scariest place
        for them to live. You know what I mean?"
      </p>
      <p className={"t-" + props.textColor}>
        <strong>Rick: </strong> "You're missing the point Morty. Why would he
        drive a smaller toaster with wheels? I mean, does your car look like a
        smaller version of your house? No."
      </p>
    </div>
  );
};

function ColorUtility() {
  return (
    <div>
      <ColorUtil bg='black' textColor='white' />
      <ColorUtil bg='white' textColor='black' />
      <ColorUtil bg='black' textColor='gray-1' />
      <ColorUtil bg='black' textColor='gray-2' />
      <ColorUtil bg='black' textColor='gray-3' />
      <ColorUtil bg='black' textColor='gray-4' />
      <ColorUtil bg='black' textColor='gray-5' />
      <ColorUtil bg='black' textColor='gray-6' />
      <ColorUtil bg='black' textColor='gray-7' />
      <ColorUtil bg='black' textColor='gray-8' />
      <ColorUtil bg='black' textColor='gray-9' />
      <ColorUtil bg='white' textColor='red' />
      <ColorUtil bg='white' textColor='pink' />
      <ColorUtil bg='white' textColor='grape' />
      <ColorUtil bg='white' textColor='violet' />
      <ColorUtil bg='white' textColor='indigo' />
      <ColorUtil bg='white' textColor='blue' />
      <ColorUtil bg='white' textColor='cyan' />
      <ColorUtil bg='white' textColor='teal' />
      <ColorUtil bg='white' textColor='green' />
      <ColorUtil bg='white' textColor='lime' />
    </div>
  );
}

export default ColorUtility;
