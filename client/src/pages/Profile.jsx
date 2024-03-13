import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-black text-3xl font-semibold text-center mt-3">
        Profile
      </h1>
      <form className="flex flex-col">
        <img
          className="rounded-full self-center mt-3 cursor-pointer"
          src={currentUser.avatar}
          alt=""
        />
        <input
          className="border p-3 rounded-lg my-3"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg my-3"
          type="text"
          placeholder="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg my-3"
          type="password"
          placeholder="password"
          id="password"
        />
      </form>
      <div className="flex justify-between">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
