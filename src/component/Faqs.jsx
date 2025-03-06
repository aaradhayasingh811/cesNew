import React from "react";
import DisabledAccordion from "./DisabledAccordion";
const Faqs = () => {
  return (
    <div className="h-full py-10 bg-[#e5e2e2]">
      <h1 className="text-[#132049] sm:text-4xl text-3xl font-bold text-center pt-10 pe-3 ">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <p className="text-[#9d9a9d] sm:text-2xl text-xl font-normal text-center my-5 underline underline-offset-8">
        Here are some of the interesting questions
      </p>
      <div className="lg:px-64 md:px-20 px-10">
        <DisabledAccordion />
      </div>
    </div>
  );
};

export default Faqs;
