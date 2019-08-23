import React from "react";

function LoginPage() {
  return (
    <div>
      <div className='pt-6 mb-3'>
        <div
          className='bg-white border border-gray-2 pb-2 pt-2 px-2 border-w-2'
          style={{ width: "260px", margin: "0 auto", borderRadius: "5px" }}
        >
          <div>
            <h1 className='mb-0'>Github</h1>
            <h4 className='mt-1'>Sign in to Github</h4>
          </div>
          <form>
            <div className='InputGroup mb-2'>
              <label for='login-usernameoremail'>Username</label>
              <input type='text' class='input' id='login-usernameoremail' />
            </div>
            <div className='InputGroup'>
              <div className='d-flex flex-items-center'>
                <label for='login-pass' className='flex-auto'>
                  Password
                </label>
                <a href='https://google.com'>Forgot Password?</a>
              </div>
              <input type='password' class='input' id='login-pass' />
            </div>
            <div className='InputGroup pt-2'>
              <input type='button' value='Login' class='btn btn-green' />
            </div>
          </form>
        </div>
      </div>
      <div
        className='bg-white border border-gray-2 py-3 px-2 border-w-2 d-flex flex-center'
        style={{ width: "260px", margin: "0 auto", borderRadius: "5px" }}
      >
        Don't have an account?
        <a href='https://google.com' className='pl-1'>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
