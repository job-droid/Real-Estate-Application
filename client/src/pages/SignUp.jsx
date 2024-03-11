import React from "react";
import {Link} from 'react-router-dom'

function SignOut() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg  bg-white focus:bg-none "
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg bg-white "
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg bg-white"
          id="password"
        />
        <button className="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          SignUp
        </button>
      </form>
      <div className="flex gap-3 mt-3">
        <p>have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignOut;
