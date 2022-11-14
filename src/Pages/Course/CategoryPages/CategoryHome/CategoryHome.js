import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseShow from "../CourseShow/CourseShow";

const CategoryHome = () => {
  const Courses = useLoaderData();
  return (
    <div>
      <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
        Courses
      </p>
      <div className="grid grid-cols-2 gap-4 m-4">
        {Courses.map((course) => (
          <CourseShow key={course.id} course={course}></CourseShow>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
