import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonCategory = [
    "All",
    "Music",
    "Economy",
    "History",
    "Movies",
    "Egypt",
    "UPSC",
    "Trending",
    "Cooking",
    "News",
    "Comedy",
    "Action",
    "Harry Potter",
    "Sci-fi",
    "Nolan",
  ];
  return (
    <div className="m-2 p-2 ">
      <div className="flex">
        {buttonCategory.map((btn, id) => (
          <Button category={btn} key={id} />
        ))}
        {/* <Button />
      <Button />
      <Button /> */}
      </div>
    </div>
  );
};

export default ButtonList;
