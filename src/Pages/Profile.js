import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Comp/Header";
import Hero from "../Comp/Hero";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header isDash />

      <Hero>
        <div className=" max-w-3xl -m-20   mx-auto p-2">
          <div className="flex flex-row space-x-2  justify-between">
            <div>
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                NetFlix:Edit Profile
              </h1>
            </div>
            <div>
              <button
                onClick={() => navigate(`/dash`)}
                className="bg-myRed text-white px-3 py-2 pointer  rounded-md"
              >
                Dashboard
              </button>
            </div>
          </div>
          <hr className="text-white mt-3 " />
          <div className="mt-2   ">
            <input
              className="w-full py-2 px-2 rounded-md"
              type="email"
              placeholder="Email123@gmail.com"
            />
          </div>
          <div>
            <div>
              <h1 className="text-white font-bold text-2xl md:text-4xl mt-2">
                Plans(Current Plan:Platinum)
              </h1>
              <hr className="text-white" />
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.8)] w-full flex flex-col p-5 space-y-5 ">
            <p className="text-white ">Renewel Date 09/04/2030</p>
            <div className="flex justify-between flex-row">
              <div>
                <h2 className="text-white  md:text-2xl text-1xl">
                  NetFlix Standard
                </h2>
                <p className="text-white">1080p</p>
              </div>
              <div>
                <button className="bg-myRed text-white px-3 py-2 pointer  rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-between flex-row">
              <div>
                <h2 className="text-white  md:text-2xl text-1xl">
                  NetFlix Basic
                </h2>
                <p className="text-white">480p</p>
              </div>
              <div>
                <button className="bg-myRed text-white px-3 py-2 pointer  rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-between flex-row">
              <div>
                <h2 className="text-white  md:text-2xl text-1xl">
                  NetFlix premium
                </h2>
                <p className="text-white md:text-1xl">4x+HDR</p>
              </div>
              <div>
                <button className="bg-myRed text-white px-3 py-2 pointer  rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate(`/`)}
                className="bg-myRed text-white px-3 py-2 w-full pointer  rounded-md"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Profile;
