import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  /* style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1167498797/vector/web-development-coding-and-programming-responsive-layout-internet-site-or-app-of-devices.jpg?s=612x612&w=0&k=20&c=oWp_9mIiX1EBJtdd3il6eo3i-1Qe5Ou9RQMkGnzTNtk=")',
        }} */
  return (
    <div>
      <section
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1167498797/vector/web-development-coding-and-programming-responsive-layout-internet-site-or-app-of-devices.jpg?s=612x612&w=0&k=20&c=oWp_9mIiX1EBJtdd3il6eo3i-1Qe5Ou9RQMkGnzTNtk=")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="dark:bg-gray-800 dark:text-gray-100"
      >
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="text-yellow-300">laborum doloribus</span>delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg ">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to={"/course"}>
              <button className="px-8 py-3 m-2 text-lg font-semibold btn btn-warning">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
