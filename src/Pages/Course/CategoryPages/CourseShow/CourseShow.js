import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaChartLine } from "react-icons/fa";

const CourseShow = ({ course }) => {
  const { title, total_student, Level, thumbnail_url, id } = course;
  return (
    <div>
      <div className="h-full">
        {/* <!-- Card --> */}
        <div className="max-w-xs mx-auto">
          <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <!-- Image --> */}
            <a
              className="block focus:outline-none focus-visible:ring-2"
              href="#0"
            >
              <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src={thumbnail_url}
                  width="320"
                  height="180"
                  alt="Course"
                />
              </figure>
            </a>
            {/* <!-- Card Content --> */}
            <div className="flex-grow flex flex-col p-5">
              {/* <!-- Card body --> */}
              <div className="flex-grow">
                {/* <!-- Header --> */}
                <header className="mb-3">
                  <a
                    className="block focus:outline-none focus-visible:ring-2"
                    href="#0"
                  >
                    <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                      {title}
                    </h3>
                  </a>
                </header>
                {/* <!-- Content --> */}
                <div className="mb-8">
                  <p>
                    <FaChartLine className="inline text-neutral-focus" />
                    <span className="font-semibold text-black"> Level: </span>
                    <span
                      className={
                        (Level === "Bigginer to Advance" &&
                          "text-orange-400") ||
                        (Level === "Advance" && "text-red-600") ||
                        (Level === "Bigginer" && "text-green-500")
                      }
                    >
                      {Level}
                    </span>
                  </p>
                  <p>
                    <FaUsers className="inline text-neutral-focus" />
                    <span className="text-black"> Total Student: </span>
                    <span className="text-neutral-focus">{total_student}</span>
                  </p>
                </div>
              </div>
              {/* <!-- Card footer --> */}
              <div className="flex justify-center space-x-2">
                <Link
                  to={`/course/${id}`}
                  className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500 w-full"
                  href="#0"
                >
                  Show Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseShow;
