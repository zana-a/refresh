import React from "react";

const BtnColors = [
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

const BtnSizes = ["sm", "md", "lg", "xl"];

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

const ButtonOutline = BtnColors.map(color => {
  return <ButtonBase class={"btn btn-outline btn-" + color} name={color} />;
});

const ButtonSize = BtnSizes.map(size => {
  return (
    <ButtonBase
      class={"btn btn-blue btn-" + size}
      name={"Button " + size.toUpperCase()}
    />
  );
});

function Buttons() {
  return (
    <div>
      <div>{Button}</div>
      <div>{ButtonSize}</div>
      <div>{ButtonOutline}</div>
    </div>
  );
}

export default Buttons;
