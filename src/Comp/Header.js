import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ isDash }) => {
  const Navigate = useNavigate();

  return (
    <>
      <div
        className={`${isDash ? "bg-black" : "bg-transparent"}  absolute w-full`}
      >
        <div className="flex bg-transparent flex-row px-4 justify-between items-center md:px-[52px]">
          <img
            onClick={() => Navigate(`/`)}
            className="w-40 h-auto cursor-pointer"
            src="https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0"
          />
          <button
            onClick={() => Navigate(`${isDash ? "/profile" : "/login"}`)}
            className="text-white bg-myRed py-[5px] px-6 rounded-md "
          >
            {isDash ? "profile" : "sign in"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
