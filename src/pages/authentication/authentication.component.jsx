import React from "react";
import './authentication.styles.scss'
import SignIn from '../../components/sign-in/signin.component'
import SignUp from '../../components/sign-up/signup.component'

const Authentication = () => (
    <div className="authentication">
        <SignIn />
        <SignUp />
    </div>
)

export default Authentication