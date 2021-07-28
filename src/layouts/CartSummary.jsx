import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {  Dropdown,Label,Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function CartSummary() {

const {cartItems} = useSelector(state => state.cart)
const dispatch = useDispatch();
const handleRemoveCart=(product)=>{
  dispatch(removeToCart(product));
  toast.error(`${product.productName} Sepetten Silindi!!!`)
  }
    return (
        <div>
            
            <Dropdown item text="Sepetim" style={{marginTop:"8px"}}>
              <Dropdown.Menu >
                {cartItems.map((cartItem)=>(
                 <Dropdown.Item key={cartItem.product.id}>
                   {cartItem.product.productName}
                   <Label style={{marginLeft:"6px"}}>
                     {cartItem.quantity}
                   </Label>
                   <Button color="red" style={{innerWidth:"3px"}} onClick={()=>handleRemoveCart(cartItem.product)}>Sil</Button>
                 </Dropdown.Item>
                ))}
               
               
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Kos</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
