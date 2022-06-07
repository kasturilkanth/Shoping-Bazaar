import React from 'react'
import {useState} from 'react';

function Category({product,handleClicked}) {
 
    const categoryArray=[];
    product.map((item)=>categoryArray.includes(item.category,item.thumbnail)?null:
    categoryArray.push(item.category))


    const brandArray=[];
    product.map((item)=>brandArray.includes(item.brand)?null:brandArray.push(item.brand))
    // console.log(brandArray);
    return (
      <div>
        {categoryArray.map((item)=>{
  return <button onClick={()=>handleClicked(item)} >{item}</button>
})}
        </div>
    )
}

export default Category
