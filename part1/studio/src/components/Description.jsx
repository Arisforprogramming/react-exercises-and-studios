import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://hot-thai-kitchen.com/green-curry-new-2/";
  let authorPhoto =
    "https://hot-thai-kitchen.com/wp-content/uploads/2024/07/Untitled-design-2-720x405-copy.jpg";
  let authorName = "Pai Pailin";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        scr={authorPhoto}
        alt="Pailin Photo"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href="{authorLink}">hot thai kitchen blog</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>HOT THAI KITCHEN GREEN CURRY</h1>
          <p>Authentic Thai Green Curry Chicken</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
