import React from 'react'
import {useState} from "react";
import "./Card.css"

const Card = ({item,handleAddtocart,onAdd}) => {
    const[display,setDisplay]=useState(false);
    return (
        <div className='card' >
        <div className="image-cont" onMouseEnter={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}>
          <img className='img' src={item.thumbnail}  alt='chitra' />
        {display?
          <div className='detail'>
          <h4 >VIEW DETAIL</h4>
          </div>
         :null}
          </div>
          <div  className='heart'>♡</div>
          <h4 className='name'>{item.title}</h4>
          <h4 className='price-display'>Rs.{item.price}</h4>
          <h4 className='discount'>{item.discountPercentage}% off</h4>
        {display? <h4 className='size-dropdown'>Stock-Status:{item.stock<50?"hurry! only a few items left":item.stock}</h4>:null}
        <button className="add-btn" onClick={()=>handleAddtocart(item.id)}>Add to Cart</button>
      </div>
    )
}

export default Card
