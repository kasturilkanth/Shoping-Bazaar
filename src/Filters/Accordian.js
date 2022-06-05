import React from 'react';
import {useState,useEffect} from "react";

const Accordian = ({data,setMainState,callback,tag,title}) => {
    const [display, setDisplay] = useState(false);
    const [checkedState, setCheckedState] = useState([]);

    const func=()=>{
        setDisplay((prev) => !prev)
        
      }
      useEffect(()=>{
        const clearCheckState=()=>{
            setCheckedState([])
        }
        const singleCheckState=(id)=>{
            const newState = [...checkedState];
            setCheckedState(newState.filter(value => value !== id));
        }
        if(callback){
            callback(clearCheckState,singleCheckState,tag)
        }
        
    },[callback,checkedState,tag])
      
      const addValue = (inputVal, filterName) => {
        if (inputVal) {
            setMainState((prev) => {
                const currentValues = { ...prev };
                const filters = [...currentValues[filterName]];
                filters.push(inputVal);
                currentValues[filterName] = filters;
                return currentValues;
            })
        }
      };
      // for removing value from object array
      const removeValue = (inputVal, filterName) => {
        if (inputVal) {
            setMainState((prev) => {
                const currentValues = { ...prev };
                currentValues[filterName] = currentValues[filterName].filter((val) => val !== inputVal)
                return currentValues;
            })
        }
      };
    const handleChange = (e, name, tag) => {
        console.log(tag)
          const isChecked = e.target.checked;
          console.log(isChecked)
          if (isChecked) {
              addValue(name, tag)
              //Add value to check state
              const newState = [...checkedState, name];
              console.log(newState)
              setCheckedState(newState)
          }
          else {
              removeValue(name, tag)
              //Remove value from check state
              const newState = [...checkedState];
              console.log(newState.filter(value => value !== name))
              setCheckedState(newState.filter(value => value !== name));
          }
        
        }

    const dropdown=()=>{
        return(
       data.map((name) => {
         //  console.log(name);
         return (
             <div className='color-achord' key={Math.random()}>
               <input type="checkbox" name="inputbox" value={name} onChange={(e)=>handleChange(e,name,tag)} checked={checkedState.includes(name)}/>
               <span className='name'>{name}</span>
             </div>
         )
         }
         )
         )
      }
    return (
        <div>
   <div className="color" onClick={func}>
     {title}

     {display?<span>&#94;</span>:<span>&#x2228;</span>} 
    
    </div>
    {data && display && dropdown()}
      </div>
    
    )
}

export default Accordian
