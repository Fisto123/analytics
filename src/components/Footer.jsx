import React from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] py-10 mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit met constraucrue adisphylin quos velt assumoda
          ulam, sed hic ex dextremona kasamda kolem perspecto ebanytad odit quos
          vellit.
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <FaFacebookF size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaDribbbleSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-600">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Analytics</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Analytics</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
