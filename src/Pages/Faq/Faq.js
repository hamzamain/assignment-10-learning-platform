import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Faq = () => {
  const questions = useLoaderData();
  console.log(questions);
  return (
    <div>
      {" "}
      <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <div className="grid-cols-2 grid gap-5 m-10">
        {questions.map((question) => (
          <Question key={question.title} question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Faq;
