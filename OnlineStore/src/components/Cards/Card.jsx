import React, { useEffect } from "react";
 
import { useState } from "react";
// import Detail from "./Detail";

const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);

  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

   
  return (
    <div className="card md:shadow-md md:p-4 md:m-2 md:rounded-sm md:flex md:flex-col md:justify-between md:duration-200 md:hover:scale-105 hover:shadow-sm shadow-lg p-3 m-3 rounded-lg flex flex-col justify-between">
      <img className="card__img w-1/2 ml-11" src={product.image} alt="" />
      <div>
        <h2 className="text-xl my-2" >{product.category}</h2>
        <h4 className="text-sm" >{product.title}</h4>
        {/* <Detail description={product.description}/> */}
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="card-price-add flex justify-between">
        <span className="text-xl" >Price : ${product.price}</span>
        <button
          className={isAdded ? "hover:bg-green-400 duration-200 bg-green-500 px-2 rounded-md " : "hover:bg-red-400 duration-200 bg-red-500 px-2 rounded-md"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD " : "CANCLE"}
        </button>
      </div>
    </div>
  );
};

export default Card;