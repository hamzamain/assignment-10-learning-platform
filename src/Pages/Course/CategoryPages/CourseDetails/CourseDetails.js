import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
const CourseDetails = () => {
  const course = useLoaderData();
  const {
    title,
    total_student,
    details,
    thumbnail_url,
    ratings,
    Level,
    author,
  } = course;
  console.log(course);
  const { Publish_date, img, name } = author;

  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${thumbnail_url})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          className={`container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 
          ${
            (Level === "Bigginer" && "border-2 border-green-400") ||
            (Level === "Bigginer to Advance" && "border-2 border-yellow-200") ||
            (Level === "Advance" && "border-2 border-red-500")
          }`}
        >
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={img}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">{name}</h4>
                <span className="text-xs dark:text-gray-400">
                  {Publish_date}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-yellow-500"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold dark:text-yellow-500">
                  {ratings}
                </span>
              </div>
              <p className="text-xs dark:text-gray-400 block">
                Students: <span>{total_student}</span>
              </p>
            </div>
          </div>

          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <h4 className="text-2xl ">{title}</h4>
            <p
              className={`${
                (Level === "Bigginer" && "text-green-200") ||
                (Level === "Bigginer to Advance" && "text-yellow-200") ||
                (Level === "Advance" && "text-red-500")
              }`}
            >
              <small>{Level}</small>
            </p>
            <p>{details}</p>
          </div>
          <Link to={"/course/checkout"}>
            <button
              // onClick={navigate("/course/checkout")}
              className="btn btn-outline w-full"
            >
              CheckOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
