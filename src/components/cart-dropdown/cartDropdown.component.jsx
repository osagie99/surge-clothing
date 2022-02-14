import React from "react";
import CustomButton from "../customButton/customButton.component";
import './cartDropdown.styles.scss'

const DropDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default DropDropdown