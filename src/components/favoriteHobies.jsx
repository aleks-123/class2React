import React from "react";
import "../css/style.css";

const FavoriteHobies = () => {
  const printSomething = () => {
    console.log("Picture of hobbie");
  };

  return (
    <div>
      <h2 id="favoriteHobi">My favorite hobbies is fishing</h2>
      <img
        src="https://files.osgnetworks.tv/14/files/2018/04/microfishing-7.jpg"
        alt="picturefish"
        onClick={printSomething}
      ></img>
    </div>
  );
};

export default FavoriteHobies;
