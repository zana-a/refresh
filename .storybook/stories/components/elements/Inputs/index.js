import React from "react";

const InputText = props => {
  return (
    <input
      type='text'
      placeholder={props.placeholder}
      className={"input" + " " + props.class}
    />
  );
};

function Input() {
  return (
    <div className='p-4'>
      <InputText class='input-red' placeholder='Hello' />
      <button className='btn btn-gray btn-outline'>Button</button>
    </div>
  );
}

export default Input;
