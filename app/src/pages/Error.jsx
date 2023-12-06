import React from "react";

const Error = () => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">
        Error in either username or password!{" "}
      </strong>
      <span className="block sm:inline"> Please provide valid values.</span>
    </div>
  );
};

export default Error;
