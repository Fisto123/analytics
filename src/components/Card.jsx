import React from "react";

const Card = () => {
  return (
    <div className="text-black w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-4">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src="./img/single.png"
            className="w-20 mt-[3rem] mx-auto bg-white"
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3  mx-auto text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src="./img/double.png"
            className="w-20 mt-[3rem] mx-auto bg-white"
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Patnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB storage</p>
            <p className="py-2 border-b mx-8 mt-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 30GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-green-400">
            Start Trial
          </button>
        </div>
        <div className="bg-gray-600 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src="./img/triple.png"
            className="w-20 mt-[3rem] mx-auto bg-white"
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 ">
            Group Account
          </h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB storage</p>
            <p className="py-2 border-b mx-8 mt-8">50 Users Allwoed</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 50GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3  mx-auto text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
