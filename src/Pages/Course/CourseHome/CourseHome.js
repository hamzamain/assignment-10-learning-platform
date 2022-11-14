import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";

const CourseHome = () => {
  const courses = useLoaderData();
  return (
    <div>
      <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
        Check It Out!!
      </p>
      <h2 className="mb-6 text-4xl font-bold leading-none text-center sm:text-5xl">
        Our Exclusive Courses
      </h2>
      <div className="grid grid-cols-2 gap-4 m-4">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default CourseHome;
