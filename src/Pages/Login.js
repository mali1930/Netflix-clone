import React, { useState } from "react";
import Header from "../Comp/Header";
import Hero from "../Comp/Hero";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Hero>
        <div className="container max-w-3xl   mx-auto ">
          <div className="bg-black w-full flex flex-col p-5 space-y-5 opacity-75">
            <div className="text-white text-4xl  md:p-10 text-center">
              {isLogin ? "Login" : "Register"}
            </div>
            <input
              className="p-2 border-none rounded-md w-full px-5"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-2 border-none rounded-md w-full px-5"
              type="password"
              placeholder="password"
            />
            <input
              className={`${
                isLogin && "hidden"
              } p-2 border-none rounded-md w-full px-5 `}
              type="password"
              placeholder="re-enter password"
            />
            <button
              onClick={() => navigate(`/dash`)}
              className="bg-myRed p-2 rounded-md   text-white w-full"
            >
              {isLogin ? "Login" : "Register"}
            </button>
            <p className="text-white underline text-center cursor-pointer">
              {isLogin ? "Not A Member?" : "Already a member? "} ||
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-myRed "
              >
                {isLogin ? " Register" : " Login"} instead
              </span>
            </p>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Login;
