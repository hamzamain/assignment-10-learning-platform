import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { addToDb } from "../../../../Storage/Storage";

const CheckOut = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user, premium } = useContext(AuthContext);

  const handleAddToDb = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const cvc = form.cvc.value;
    const date = form.date.value;
    const cradit = form.cradit.value;
    console.log(email, name, cvc, user?.uid, date, cradit);
    if (premium) {
      toast.success("you are our Premium User");
      navigate(from, { replace: true });
    } else {
      addToDb(user?.uid, email, name, cvc, date, cradit);
      navigate(from, { replace: true });
    }
  };
  return (
    <form
      onSubmit={handleAddToDb}
      class="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container"
    >
      {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
      <div class="flex flex-col justify-start items-start w-full space-y-9">
        <div class="flex justify-start flex-col items-start space-y-2">
          <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
            Checkout
          </p>
          <p class="text-base leading-normal sm:leading-4 text-gray-600 dark:text-white">
            {premium ? (
              <>
                <span className="text-success">
                  You are Our Premium user Already
                </span>
                <Link to={"/course/confirm"}>
                  <button className="btn ml-5 btn-outline btn-success">
                    Confirm Page
                  </button>
                </Link>
              </>
            ) : (
              "Pay Montly A Little Amount And Get Access All our Courses"
            )}
          </p>
        </div>

        <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
            <p className="text-center text-xl text-white">Monthly</p>
            <div class="flex flex-row justify-center items-center mt-6">
              <hr class="border w-full" />
              <p class="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                $19
              </p>
              <hr class="border w-full" />
            </div>

            <div class="mt-8">
              <input
                class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                id=""
                placeholder="Email"
              />
            </div>

            <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Card details
            </label>
            <div class="mt-2 flex-col">
              <div>
                <input
                  class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="number"
                  name="cradit"
                  id=""
                  placeholder="0000 1234 6549 15151"
                />
              </div>
              <div class="flex-row flex">
                <input
                  class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="date"
                  name="date"
                  id=""
                  placeholder="MM/YY"
                />
                <input
                  class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="password"
                  name="cvc"
                  id=""
                  placeholder="CVC"
                />
              </div>
            </div>

            <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Name on card
            </label>
            <div class="mt-2 flex-col">
              <div>
                <input
                  class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name on card"
                />
              </div>
            </div>

            <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Country or region
            </label>
            <div class="mt-2 flex-col">
              <div class="relative">
                <button
                  id="changetext"
                  class="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                  type="email"
                  name=""
                >
                  Bangladesh
                </button>
                <svg
                  onClick="showMenu(true)"
                  id="closeIcon"
                  class="cursor-pointer absolute top-4 right-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.75L8 10.25L12.5 5.75"
                    stroke="#27272A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  onClick="showMenu(true)"
                  id="openIcon"
                  class="cursor-pointer hidden transform rotate-180 absolute top-4 right-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.75L8 10.25L12.5 5.75"
                    stroke="#27272A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div
                  id="dropdown"
                  class="mt-1 hidden absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600"
                >
                  <div
                    onClick="changeText('China')"
                    class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                  >
                    China
                  </div>
                  <div
                    onClick="changeText('Russia')"
                    class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                  >
                    Russia
                  </div>
                  <div
                    onClick="changeText('UK')"
                    class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                  >
                    UK
                  </div>
                </div>
              </div>
              <input
                class="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="text"
                name=""
                id=""
                placeholder="ZIP"
              />
            </div>

            <Link to={"/course/confirm"}>
              <button
                type="submit"
                class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
              >
                <div>
                  <p class="text-base leading-4">Pay </p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
