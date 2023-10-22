import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  const buttonClass = isAdded ? "in-cart" : "add"
  const buttonText = isAdded ? "Remove from Cart" : "Add to Cart";


  function handleClick(){
    setIsAdded(!isAdded)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{buttonText}</button>
    </li>
  );
}

export default Item;
