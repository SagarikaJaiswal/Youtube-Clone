import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="min-h-screen w-2/12 bg-white p-4 mt-4 flex flex-col shadow-lg">
      <div className="pb-5">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="pb-5">
        <h1 className="text-lg font-bold">Subscriptions</h1>
      </div>
      <div>
        <h1 className="text-lg font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
