import React from 'react'
import Card from "./Card";
import "./CardList.css";

const CardList = ({product,handleAddtocart,onAdd}) => {
    return (
        <div className="cardlist">
            {product.map((item)=>{
  return <Card item={item} handleAddtocart={handleAddtocart} onAdd={onAdd}/>
})}
        </div>
    )
}

export default CardList
