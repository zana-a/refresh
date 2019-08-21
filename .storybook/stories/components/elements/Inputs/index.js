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

const InputExample = props => {
  return (
    <div>
      <input
        placeholder='text'
        name='firstname'
        className={"input input-gray " + props.type}
        autoComplete='off'
      />
      <br />
      <br />
      <input
        placeholder='text'
        name='lastname'
        className={"input input-gray " + props.type}
        autoComplete='off'
      />
      <br />
      <br />
      <input
        type='submit'
        value='Submit'
        className='btn btn-blue'
        autoComplete='off'
      />
    </div>
  );
};

function Input() {
  return (
    <div>
      <input placeholder='Simple Input' class='input' />
    </div>
  );
}

export default Input;
