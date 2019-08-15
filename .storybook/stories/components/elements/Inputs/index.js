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
        <h2>Outline</h2>
        <InputExample type='input-light' />
      </div>
      <div className='bg-white'>
        <div className='p-4'>
          <input
            type='text'
            className='input input-success'
            placeholder='All Good!'
          />
        </div>
        <div className='p-4'>
          <input
            type='text'
            className='input input-danger'
            placeholder='Unsuccessful!'
          />
        </div>
        <div className='p-4'>
          <input
            type='text'
            className='input input-warning'
            placeholder='Warning!'
          />
        </div>
      </div>
      <div className='bg-gray-9'>
        <div className='p-4'>
          <input
            type='text'
            className='input input-success input-outline'
            placeholder='All Good!'
          />
        </div>
        <div className='p-4'>
          <input
            type='text'
            className='input input-danger input-outline'
            placeholder='Unsuccessful!'
          />
        </div>
        <div className='p-4'>
          <input
            type='text'
            className='input input-warning input-outline'
            placeholder='Warning!'
          />
          <input type='button' className='btn btn-yellow' value='Search' />
        </div>
      </div>
    </div>
  );
}

export default Input;
