import React from "react";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cart-item/cartItem.component";
import { connect } from "react-redux";
import "./cartDropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors"; 

const DropDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(DropDropdown);
