import React from "react";
import { useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Banner from "../Banner/Banner";
import Aside from "../../Shared/Aside/Aside";
import "./Course.css";

const Course = () => {
  const catetories = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div className="grid-manual">
      <Aside catetories={catetories} className=""></Aside>
      <div className="">
        {user?.uid ? (
          <Outlet></Outlet>
        ) : (
          <>
            <Banner></Banner>
            <Outlet></Outlet>
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
