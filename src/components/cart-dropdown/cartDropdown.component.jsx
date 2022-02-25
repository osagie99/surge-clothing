import React from "react";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cart-item/cartItem.component";
import { connect } from "react-redux";
import "./cartDropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect"; 
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

const DropDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { cartItems.length ?
      cartItems.map((cartItem) => (  
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))
    : 
    <span className="empty-message">Your Cart is Empty</span>
    }
    </div>
    <CustomButton onClick={() => {
      dispatch(toggleCart())
      history.push('checkout')}}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(DropDropdown));
