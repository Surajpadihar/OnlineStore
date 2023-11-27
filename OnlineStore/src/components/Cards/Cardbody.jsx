import React from "react";
import Card from "./Card";
import "./Cardbody.css";
 
const CardBody = ({ products, addItem, removeItem, addedItems }) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="md:grid md:grid-cols-3 md:m-4 md:p-4  grid grid-cols-1 m-2 p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardBody;
