
import {useEffect,useState} from "react";
import CardList from "./Card/CardList";
import Header from "./Header/Header.js";
import Filters from "./Filters/Filters";
import Category from "./Category/Category.js";


function App() {
  const[product,setProduct]=useState([]);
  const[value,setValue]=useState(0);
  const [cartItem, setCartItem]= useState([]);
  const[searchField,setSearchField]=useState('')//state to change the searched values
  // const[quantity,setQuanity]=useState(0);
  const [appliedFilters,setAppliedFilters]=useState([]);//to append the sellected filters to new array
  const [filter,setFilter]=useState('')//to render the selected filter
  const [mainState, setMainState] = useState({
    categoryFilter: [],
      brandFilter:[],
      priceFilter:[],
      discountFilter:[],
      ratingFilter:[],
});
//to make the object empty and change the state and to make the selected filter unselect
const clearFilter=()=>{
  const obj={
    categoryFilter: [],
      brandFilter: [],
     discountFilter:[],
     priceFilter:[],
     ratingFilter:[],

  }
  setMainState(obj)
  setFilter('')
}
//to add the selected values to the filter session
const filterString=(obj)=>{
  const array=Object.keys(obj);
  // console.log(array)
  let string="";
  //here array1 is used for showing applied filters
  let array1=[];
  array.forEach((e)=>{
    
    // here e will be element in array
    obj[e].forEach((ele)=>{
      
      if(e==="categoryFilter"){
        string+=`category/${ele},`
        console.log(string)
        array1.push(`${ele}`)
        console.log(array1)
      }
      if(e==="brandFilter"){
        string+=`${ele},`
        console.log(string)
        array1.push(`${ele}`)
        console.log(array1)
      }
      if(e==="discountFilter"){
        string+=`category/smartphones/${ele},`
        console.log(string)
        array1.push(`${ele}`)
        console.log(array1)
      }
      if(e==="priceFilter"){
        string+=`category/smartphones/${ele},`
        console.log(string)
        array1.push(`${ele}`)
        console.log(array1)
      }
      if(e==="ratingFilter"){
        string+=`category/smartphones/${ele},`
        console.log(string)
        array1.push(`${ele}`)
        console.log(array1)
      }
      
      //if you unchecked all the filters
      if(obj[e].length===0){
        string+=''
      }
      
    })
  })
  //passing array1 values and changing appliedfilters
  setAppliedFilters(array1)
  // console.log(array1)
  //remove last character from string
  return(string.slice(0,string.length-1))
}
//function to handle the searched value
const searchvaluefunc=(e)=>{
  // console.log(e.target.value)
  const searchValue=e.target.value
  setSearchField(searchValue)
  }
  //to filter name by searched value
  const filteredCards=product.filter((card)=>{
   
      return card.description.toLowerCase().includes(searchField.toLowerCase().trim())
    }
  )
  
  const handleAddtocart=(item)=>{
    // var value=0;
    // const exist = cartItem.find((x)=> x.id === item.id)
    // if(exist){
    //   setCartItem(cartItem.map((x)=>{
    //    return x.id === item.id ? {...exist} : x
    //   }))
    // }else {
    //   setCartItem([...cartItem, {...item}]
    //   )
    // }
    // if(cartItem.map((x)=>x.id===item)){
    //   setQuanity(quantity+1)
    // }else{
      product.map((x)=>x.id===item ?  cartItem.push(x):x)
    // }
    setValue(value+1);
     
  }
  const onAdd=(item)=>{
    const exist = cartItem.find((x)=> x.id === item.id)
    if(exist){
      setCartItem(cartItem.map((x)=>{
       return x.id === item.id ? {...exist,qty:1} : x
      }))
    }else {
      setCartItem([...cartItem, {...item}]
      )
    }
  }

  const onRemove=(product)=>{
    const exist = cartItem.find((x)=> x.id === product.id)
    if(exist.qty ===1){
      setCartItem(cartItem.filter((x)=>
        x.id !== product.id
      ))}
      else{
        setCartItem(cartItem.map((x)=>{
          return x.id === product.id ? {...exist, qty: exist.qty - 1} : x
         }))
      }
    }
   
  useEffect(()=>{
    console.log(filter);
    fetch(`https://dummyjson.com/products/${filter}?limit=100`)
    // fetch('https://dummyjson.com/products?limit=100&select=rating,price,discountPercentage,brand')
    // fetch('https://dummyjson.com/products?limit=100&select=${filter}')


    .then(resp=>resp.json())
    .then((resp)=>{
      console.log(resp.products)
       setProduct(resp.products)
      
       let filteredString=filterString(mainState)
      setFilter(filteredString)
})
    
  },[mainState,filter])
  const [clicked,setClicked]=useState([])
  console.log(clicked)
  const handleClicked=(item)=>{
      // setClicked((prev)=>prev + item)
      setClicked(item)
  }
  return <>

<Header value={value} cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} searchvaluefunc={searchvaluefunc}/>
<div style={{display:'flex'}}>
{/* <Filters product={product} setMainState={setMainState} appliedFilters={appliedFilters} clearFilter={clearFilter} /> */}
<Category product={product} handleClicked={handleClicked}/>
<CardList product={filteredCards} handleAddtocart={handleAddtocart} clicked={clicked}/>
</div>
  </>
}

export default App;
