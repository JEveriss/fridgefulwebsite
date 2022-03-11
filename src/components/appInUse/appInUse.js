import React from "react";
import ticked from "../../assets/inTheFridgeTicked.png";
import recipeList from "../../assets/recipeList.png";
import shoppingList from "../../assets/shoppingList.png";
import "./appInUse.scss";

export default function AppInUse() {
  return (
    <div className="app-in-use">
      <div className="image-container">
        <img className="image-a" src={ticked} alt="Ticked items" />
        <p>
          Simply add your ingredients to your fridge, specifying quantity and
          expiry date
        </p>
      </div>
      <div className="image-container">
        <img className="image-a" src={recipeList} alt="Ticked items" />
        <p>
          Fridgeful will let you know when an item is going out od date and
          needs to be used up
        </p>
      </div>
      <div className="image-container">
        <img className="image-b" src={shoppingList} alt="Ticked items" />
        <p>
          Select the ingredients you would like to use up and Fridgeful will
          return you a list of specific recipes to allow you to use those items
        </p>
      </div>
    </div>
  );
}
