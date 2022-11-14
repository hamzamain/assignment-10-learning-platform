import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { picture, id, name, guid } = course;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={picture}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-25 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <Link to={`/course/category/${id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-sky-400 dark:text-gray-900"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCourse;
