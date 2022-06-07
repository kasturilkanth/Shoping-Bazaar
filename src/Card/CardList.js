import React from 'react'
import Card from "./Card";
import "./CardList.css";

const CardList = ({product,handleAddtocart,onAdd,clicked}) => {
    // console.log(product)
    const res=product.filter((item)=>item.category===clicked)
console.log(res)
    return (
        <div className="cardlist">
    {clicked.length===0?
product.map((item)=>{
    return <Card item={item} handleAddtocart={handleAddtocart} onAdd={onAdd}/>
  })
  :
 product.filter((item)=>item.category===clicked).map((item)=>{
  return <Card item={item} handleAddtocart={handleAddtocart} onAdd={onAdd}/>
        
    })
}
        </div>
    )
}

export default CardList
