import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="max-w-[1240px] grid lg:grid-cols-3 mx-auto">
        <div className="flex flex-col lg:col-span-2 my-4 ">
          <h1 className="md:text45xl sm:text-3xl text-2xl font-bold">
            Want tips and trips to optimize your flow
          </h1>
          <p className="">Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="lg:col-span-1 my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex rounded-md text-black w-full"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 md:mx-0 mx-auto text-black ml-4">
              Notify me
            </button>
          </div>
        </div>
        <p>
          We care about production of your data, Read our{" "}
          <span className="text-green-300">Privacy Policy</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
