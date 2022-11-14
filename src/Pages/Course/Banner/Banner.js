import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-8 py-2 btn rounded-none btn-warning bg-gold w-full ">
      <Link to={"/course/checkout"}>
        <span className="text-center font-semibold">
          Get Premium Access Now
        </span>
      </Link>
    </div>
  );
};

export default Banner;
