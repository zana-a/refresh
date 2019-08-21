import React from "react";

function InputGroup() {
  return (
    <div>
      <div className='bg-gray-1 py-5 container' style={{ width: "420px" }}>
        <div className='InputGroup InputGroup-row mx-4 mb-2'>
          <input className='input' placeholder='First Name' />
          <input className='input' placeholder='Last Name' />
        </div>
        <div className='InputGroup InputGroup-column px-4'>
          <input className='input' placeholder='Username' />
          <input className='input' placeholder='Email Address' />
        </div>
      </div>
    </div>
  );
}

export default InputGroup;
