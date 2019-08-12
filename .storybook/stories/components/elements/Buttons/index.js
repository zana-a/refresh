import React from "react";

const BtnColors = [
  "light",
  "dark",
  "gray",
  "red",
  "pink",
  "grape",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange"
];

const ButtonBase = props => {
  return (
    <div className='p-2'>
      <div className='clearfix my-2'>
        <button className={props.class}>{props.name}</button>
      </div>
    </div>
  );
};

const Button = BtnColors.map(color => {
  return <ButtonBase class={"btn btn-" + color} name={color} />;
});

function Buttons() {
  return (
    <div>
      <div>{Button}</div>
    </div>
  );
}

export default Buttons;
