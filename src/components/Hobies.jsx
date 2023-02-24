import React from "react";
import DescrptionHoby from "./descrptionHoby";
import FavoriteHobies from "./favoriteHobies";

const Hobies = () => {
  return (
    <div>
      <h1>My favorite hobbies</h1>
      <ul>
        <li>Fishing</li>
        <li>Hiking</li>
        <li>Tennis</li>
      </ul>
      <FavoriteHobies />
      <DescrptionHoby />
    </div>
  );
};

export default Hobies;
