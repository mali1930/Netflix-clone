import React from "react";
import GrayBorder from "./GrayBorder";

const Footer = () => {
  return (
    <>
      {" "}
      <GrayBorder />
      <div className="bg-black py-3 ">
        <div className="text-white text-center  text-4xl font-bold mb-12">
          <h1>Questions? Call 1-844-505-2993</h1>
        </div>
        <div className="md:flex md:flex-row flex flex-col  text-center px-20 space-y-8 md:justify-between md:px-26">
          <div className=" text-white space-y-3 cursor-pointerr ">
            <div>FAQ</div>
            <div>Media Center</div>
            <div>Redeem Gift Cards</div>
            <div>Terms of Use</div>
            <div>Corporate Information</div>
            <div>Legal Notices</div>
          </div>
          <div className=" text-white  space-y-3">
            <div>Help Center</div>
            <div>Jobs</div>
            <div>Terms of Use</div>
            <div>Contact Us</div>
          </div>
          <div className=" text-white space-y-3 ">
            <div>Account</div>
            <div>Redeem Gift Cards</div>
            <div>Privacy</div>
            <div>Speed Test</div>
          </div>
          <div className=" text-white space-y-3 ">
            <div>Media Center</div>
            <div>Buy Gift Cards</div>
            <div>Cookie Preferences</div>
            <div>Legal Notices</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
