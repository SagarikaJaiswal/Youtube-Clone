import React from "react";

const Button = ({ category }) => {
  return (
    <button className="w-fit p-2 mt-5 mx-2 bg-slate-200 rounded-lg relative whitespace-nowrap ">
      {category}
    </button>
  );
};

export default Button;
