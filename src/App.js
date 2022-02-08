import './App.css';
import React from 'react';
import HomepageComponent from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component';
import ShopComponent from './pages/shop/shop.component';
import Authentication from './pages/authentication/authentication.component';
// import the auth from firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {

  // constructor() {
  //   super();
// store our user into our app state soo we can pass it into components that need it 
// Also set the iinitial state of the current user to null
  //   this.state = {  
  //     currentUser: null
  //   }
  // }
  // since our subscription is always open we have to close it
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    //  calling the onauthstatechange to listen if the auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //  if there is a userAuth object
      if(userAuth) {
        // await the userRed to check if the data exists  
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()          
          })
        })
        
      } else {
        // if the userAuth is null i.e. the user signs out we set the currentUser in out app state to null 
        setCurrentUser(userAuth)
      }
    })
  // the onAuthStateChange is like a fetch to our firebase to always get the status of the user thats currently
  // logged in
    // auth.onAuthStateChanged(user => {
    //   this.setState({currentUser: user})

    //   console.log(user);
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return ( 
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomepageComponent} />
          <Route path='/shop' component={ShopComponent}/>
          <Route path='/signin' component={Authentication}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
