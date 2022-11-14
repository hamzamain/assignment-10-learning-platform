import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Success = () => {
  const users = useLoaderData().results;
  console.log(users);
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Development team
        </p>
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          The talented people behind the scenes
        </h1>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {users.map((user) => (
            <User key={user.id.value} user={user}></User>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
