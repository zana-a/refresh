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
    <div>
      <div className='InputGroup m-4'>
        <input className='input' placeholder='Firstname' />
        <input className='input' placeholder='LastName' />
      </div>
      <div className='InputGroup InputGroup-row m-4'>
        <input className='input' placeholder='Firstname' />
        <input className='input' placeholder='Middle Name' />
        <input className='input' placeholder='LastName' />
      </div>
      <div className='InputGroup InputGroup-column m-4'>
        <input className='input' placeholder='Firstname' />
        <input className='input' placeholder='Middle Name' />
        <input className='input' placeholder='LastName' />
      </div>

      <div className='bg-gray-9 py-5 container' style={{ width: "420px" }}>
        <div className='InputGroup InputGroup-row mx-4 mb-2'>
          <input className='input' placeholder='Firstname' />
          <input className='input' placeholder='LastName' />
        </div>
        <div className='InputGroup InputGroup-column mx-4'>
          <input className='input' placeholder='Username' />
          <input className='input' placeholder='Email Address' />
        </div>
      </div>
    </div>
  );
}

export default Input;
