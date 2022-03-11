import React from "react";
import ticked from "../../assets/inTheFridgeTicked.png";
import recipeList from "../../assets/recipeList.png";
import shoppingList from "../../assets/shoppingList.png";
import "./appInUse.scss";

export default function AppInUse() {
  return (
    <div className="image-container">
      <img className="image-a" src={ticked} alt="Ticked items" />
      <img className="image-a" src={recipeList} alt="Ticked items" />
      <img className="image-b" src={shoppingList} alt="Ticked items" />
    </div>
  );
}
