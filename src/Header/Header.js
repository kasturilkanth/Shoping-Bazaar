import React from 'react';
import {useState} from "react";
import "./Header.css";
import Cart from "./Cart";

const Header = ({value,cartItem,onAdd,onRemove,quantity,searchvaluefunc}) => {
  const[display,setDisplay]=useState(false);
  const handleClick=()=>{
    setDisplay(true)
  }
  const handleClose=()=>{
    setDisplay(false)
  }
  return (
    
      <div className="wrapper">
         {display?<Cart handleClose={handleClose} cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} quantity={quantity}/>:null}
    <div className="left"><img className="logo" src="https://cdn.vectorstock.com/i/1000x1000/75/38/happy-cart-logo-icon-vector-15457538.webp"/>
    <h2>SHOPPING BAZAAR</h2>
    </div>
    <div className="right">
        <input type="text" placeholder="Search for the product...." className="input-box" onChange={searchvaluefunc}/>
        <button className="cart-btn" onClick={handleClick}><img className="cart-logo" src='https://pic.onlinewebfonts.com/svg/img_290616.png' alt='cart-btn'/></button>
        <div className="value">{value}</div>
    </div>
    </div>
  )
}

export default Header