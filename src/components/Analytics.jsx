import React from "react";

const Analytics = () => {
  return (
    <div className="text-black w-full bg-white py-16 ">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2">
        <img src="./img/comp.avif" alt="" className="w-[500px] mx-auto my-4 " />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold uppercase">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit met constraucrue adisphylin quos velt assumoda
            ulam, sed hic ex dextremona kasamda kolem perspecto ebanytad odit
            quos vellit.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 md:mx-0 mx-auto bg-black">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
