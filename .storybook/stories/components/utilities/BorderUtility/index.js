import React from "react";

function BorderUtility() {
  return (
    <div>
      <div className='bg-gray-2 border border-black border-weight-2 m-5 px-2'>
        <p className='t-gray-8'>This is an example text.</p>
      </div>

      <div className='bg-cyan border border-red border-w-4 m-5 px-2'>
        <p className='t-white t-shadow-on-dark'>This is an example text.</p>
      </div>
    </div>
  );
}

export default BorderUtility;
