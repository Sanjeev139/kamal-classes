import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className="absolute p-40 m-40 w-6/12">
        <h1 className="font-bold text-3xl">Learn From Tha Expert</h1>
        <p></p>
        <div>
          <button className="text-sm rounded-lg bg-purple-500 p-2 cursor-pointer">
            ADMISSION NOW
          </button>
        </div>
        <div className="pl-12 right-3 bg-black">
          <form className="p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg">
            <input
              type="text"
              className="w-full p-5 my-4 bg-gray-700"
              placeholder="Username"
            ></input>
            <input
              type="password"
              className="w-full p-5 my-4 bg-gray-700"
              placeholder="Password"
            ></input>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
