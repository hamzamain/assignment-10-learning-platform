import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, UserProfileUpdate, verify } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(password);
    console.log(confirm);

    if (password != confirm) {
      toast.error("password not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(name, photo);
        userVerify();
        toast.success("user Create successFull");
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const updateUserProfile = (name, photo) => {
    UserProfileUpdate(name, photo)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const userVerify = () => {
    verify()
      .then(() => {
        toast.success("A verification mail send to your inbox. Please verify");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="p-6 dark:dark:text-gray-50">
      <form
        onSubmit={handleSubmit}
        noValidate=""
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
              <label htmlFor="firstname" className="text-sm">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="photoURL" className="text-sm">
                Photo URL
              </label>
              <input
                required
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="password" className="text-sm">
                Passsword
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:dark:border-gray-700 text-white"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="password" className="text-sm">
                Confirm Password
              </label>
              <input
                required
                type="password"
                name="confirm"
                placeholder="confirm password"
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
