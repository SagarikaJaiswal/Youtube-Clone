import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  //Debouncing
  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSuggestions = async () => {
    //console.log("API CALL - ", searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const info = await data.json();
    setSuggestions(info[1]);
  };
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="shadow-lg flex justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <img
          onClick={() => toggleHandler()}
          className="h-12 w-12 p-2 mx-2 items-center "
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="ham-icon"
        />
        <img
          className="h-20 w-20 p-2"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube-logo"
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-gray-400 p-2 w-[550px] rounded-l-full"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full">
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed bg-white z-10 w-[550px] shadow-lg rounded-lg border-gray-200">
            <ul className="sticky">
              {suggestions.map((s, id) => (
                <li
                  key={id}
                  className="px-2 py-1 hover:bg-slate-100 shadow-sm cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-14 w-14 p-2 m-2"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/296/443/small_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;