import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="w-full h-full  bg-blue-500">
      <div class=" flex justify-center items-center content-center flex-wrap">
        <p class="font-sans text-white error-text">404</p>
      </div>

      <div class="bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span class="opacity-50">Take me back to</span>
        <Link class="border-b" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
