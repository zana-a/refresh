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

const InputExample = porps => {
  return (
    <div>
      <input
        placeholder='text'
        name='firstname'
        className={"input input-gray " + porps.type}
        autoComplete='off'
      />
      <br />
      <br />
      <input
        placeholder='text'
        name='lastname'
        className={"input input-gray " + porps.type}
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
    <div className='p-4'>
      <div>
        <InputText class='input-red' placeholder='Hello' />
        <button className='btn btn-blue'>Go!</button>
      </div>
      <div className='py-4'>
        <h2>Normal</h2>
        <InputExample />
      </div>
      <div className='t-white p-4 bg-black'>
        <h2>Normal</h2>
        <InputExample type='input-outline-light' />
      </div>
    </div>
  );
}

export default Input;
