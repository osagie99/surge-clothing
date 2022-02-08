import React from "react";
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/084 crown.svg'
import {Link} from "react-router-dom"
import {auth} from '../../firebase/firebase.utils'
import { connect } from "react-redux";

const Header = ({currentUser}) => (
<div className="header">
    <Link className="logo-container" to='/'>
        <Logo  className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" to='/contact'>
            CONTACT
        </Link>
        {
            currentUser ? 
            <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }

    </div>

</div>

)
// This is the function that will use to bring in our reducers
// argument state is the root reducer
// currentUser is the name of the props we want to pass to this component
// and it goes into state (root reducer) and then to the user key in rootReducer which points to the userReducer
//  and in turn in the user reducer get the value for the currentUser 
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
// we pass two func to the connect whihc is an high order component
export default connect(mapStateToProps)(Header)