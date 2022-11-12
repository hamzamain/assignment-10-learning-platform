import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="p-6 dark:dark:text-gray-50">
      <form
        novalidate=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm border">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Please Register !!</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          {/* ---------------------------------------------------------------------------------------- */}
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="photoURL" className="text-sm">
                Photo URL
              </label>
              <input
                id="photoURL"
                type="text"
                placeholder="Photo URL"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>

            <div className="col-span-full">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label for="password" className="text-sm">
                Passsword
              </label>
              <input
                id="password"
                type="password"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="password" className="text-sm">
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="confirm"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>

            <button type="submit" className="btn btn-outline">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
