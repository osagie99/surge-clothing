import React from "react";
import './customButton.styles.scss'

const CustomButton = ({children,isGoogleSignin,inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-signin' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton