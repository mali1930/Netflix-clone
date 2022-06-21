import React from "react";

const Search = () => {
  return (
    <>
      <div>
        <p className="text-white text-center mt-20">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5 w-full">
          <input
            type="text"
            className="p-5 flex-1 w-full outline-none text-myGray"
            placeholder="Email address"
          />
          <button className="mt-3 py-3 px-6 md:py-5 md:mt-0 border-none bg-myRed">
            Get Started {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
