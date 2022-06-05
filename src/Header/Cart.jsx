import "./Cart.css";

const Cart=({handleClose,cartItem,onAdd,onRemove,quantity})=>{
    const itemPrice = cartItem.reduce((a,c)=> a + c.qty * c.price, 0)
    console.log(cartItem);
    

    return(
        <div className="popup-container" onClick={handleClose}>
<div className="display-cart">
<div className="cancel-symbol" onClick={handleClose}>x</div>
<h1 className="cart-heading">Cart</h1>
<div>{cartItem.length === 0 && <h1 className="cart-is-empty"> Cart is empty</h1>}</div>
    {cartItem.map((item, index)=>{
        console.log(item);
         return <div key={index} className="cart_body">
         <div><strong>{item.title}</strong></div>
         <div>
         <button className='btn_1' onClick={()=>onAdd(item)}>+</button>&nbsp;
        <button className='btn_2' onClick={()=>onRemove(item)}>-</button>
         </div>
       <div>
          Price : {item.price} &nbsp; Qty * {quantity}
       </div>
       <hr />
       <div><b>Total </b>: {itemPrice}</div>
        </div>
    })}
    <hr />
    
</div>
</div>
    )
    }
export default Cart;