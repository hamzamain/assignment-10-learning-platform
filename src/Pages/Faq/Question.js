import React from "react";

const Question = ({ question }) => {
  return (
    <div className="max-w-md p-6 overflow-hidden h-full rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
      <article>
        <h2 className="text-xl font-bold">{question.title}</h2>
        <p className="mt-4 dark:text-gray-400">{question.details}</p>
      </article>
    </div>
  );
};

export default Question;
