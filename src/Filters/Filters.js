import React from 'react';
import "./Filters.css";
import Accordian from "./Accordian";
import {useCallback,useState} from "react";


function Filters({product,setMainState,clearFilter,appliedFilters}) {
    // console.log(product)
    // const category=product.filter((x)=>x.category);
    // console.log(category)
    // const data=[...new Set(category)]
    // console.log(data);
    const [singleFilter,setSingleFilter]=useState({});
    const [clearfilter,setClearfilter]=useState([])
   const categoryData=['smartphones','laptops','fragrances','skincare','groceries','home-decoration','furniture','tops','womens-dresses','womens-shoes','mens-shirts','mens-shoes','mens-watches','womens-watches','womens-bags','womens-jewellary','sunglasses','automotive','motercycle','lighting']
  const brandData=['Apple','samsung','oppo']
  const discountData=['']
  const priceData=['']
  const ratingData=['']
  //to clear all the filters sellected
   const onclickHandler=()=>{
    clearFilter()
    clearfilter.forEach((e)=>{e()})
}
   //reset is passed to the callback function
const resetState=useCallback((func,singleCheckState,tag)=>{
    setClearfilter((prev)=>[...prev,func])
   
    setSingleFilter((prev)=>{
        const current={...prev}
        current[tag]=singleCheckState
        return current
    })
  },[])
  //to remove the values when we press the x symbol
  const cancelfunc=(str)=>{
    const split=str.split(':')
    const tag=split[0].toLowerCase()
    const inputVal=split[1]
    let filterName;
    if(tag==='category'){
      filterName='categoryFilter'
  }
  if(tag==="brand"){
    filterName='brandFilter'
}
    if(tag==="discount"){
        filterName='discountFilter'
    }
    if(tag==='price'){
      filterName='priceFilter'
  }
  if(tag==='rating'){
    filterName='ratingFilter'
}
const func=singleFilter[filterName]
    if(func){
        func(inputVal)
    }
const removeValue = (inputVal, filterName) => {
      if (inputVal) {
          setMainState((prev) => {
              const currentValues = { ...prev };
              currentValues[filterName] = currentValues[filterName].filter((val) => val !== inputVal)
              return currentValues;
          })
      }
    };
    removeValue(inputVal,filterName)
}
return (
        <div className="box">
        <Accordian title={'Category'} data={categoryData} tag='categoryFilter' setMainState={setMainState} callback={resetState} />
        <Accordian title={'Brand'} data={brandData} tag='brandFilter' setMainState={setMainState} callback={resetState} />
        <Accordian title={'Discount'} data={discountData} tag='discountFilter' setMainState={setMainState} callback={resetState} />
        <Accordian title={'Price'} data={priceData} tag='priceFilter' setMainState={setMainState} callback={resetState} />
        <Accordian title={'rating'} data={ratingData} tag='ratingFilter' setMainState={setMainState} callback={resetState} />
        </div>
    )
}

export default Filters
