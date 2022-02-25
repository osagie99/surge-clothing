import "./App.css";
import React from "react";
import HomepageComponent from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./components/header/header.component";
import ShopComponent from "./pages/shop/shop.component";
import Authentication from "./pages/authentication/authentication.component";
// import the auth from firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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

  componentDidMount() {
    // destructure setcurrentuser from our props
    const { setCurrentUser} = this.props;
    //  calling the onauthstatechange to listen if the auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //  if there is a userAuth object
      if (userAuth) {
        // await the userRef to check if the data exists
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          // we call destructed setCurrentUser and pass it a action.payload of the user
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // if the userAuth is null i.e. the user signs out we set the currentUser in out app state to null
        setCurrentUser(userAuth);
      }
    });
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

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomepageComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route
            path="/signin"
            // render with a func to check if currentUser !null and render
            render={()=> this.props.currentUser ? <Redirect to="/" /> : <Authentication />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// to update out reducer value with the new setcurrentuser action we made
// the connect() takes two arguments the mapStateToProps and mapDispatchToProps
// But we dont need the state here we just need to update the state so we pass null as the first argument to connect()
// we import setCurrentUser from our user actions
// we are returning setCurrentUser which goes in the user actions
// it goes to a function that get the user object
// and calls dispatch(), whatever object we pass to dispatch is going to be an action object that is passed to every reducer
// our user action is function that get the user and returns a user action object
// so we call out action and pass the user in
// so we are invoking the serCurrentUser and passing an argument of user which will be used as the payload
// so basically we are disptching the object

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
