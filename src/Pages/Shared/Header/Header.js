import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const themeValues = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  useEffect(() => {
    themeChange(false);
  });
  const img = require("../../../assests/photo/logo162.png");
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {img ? (
            <Link to={"/"}>
              <img src={img} width="80px" className="inline" alt="" />
              <span className="font-bold text-4xl inline">LP</span>
            </Link>
          ) : (
            <Link to={"/"} className="ml-5 font-bold normal-case text-xl">
              Learn Programming
            </Link>
          )}

          <div className="main-routes">
            <Link>Courses</Link>
            <Link>FAQ</Link>
            <Link>Blogs</Link>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div>
            <select
              className="text-primary btn-sm rounded-lg"
              data-choose-theme
            >
              <option value="" className="text-success">
                Default Value
              </option>
              {themeValues.map((value) => (
                <option
                  className="text-primary"
                  key={value.toLocaleLowerCase()}
                  value={value.toLocaleLowerCase()}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div> */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-7 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="login-register">
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
