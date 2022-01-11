import './App.css';
import React from 'react';
import HomepageComponent from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom'
import Header from './components/header/header.component';
import ShopComponent from './pages/shop/shop.component'
import Authentication from './pages/authentication/authentication.component'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return ( 
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomepageComponent} />
          <Route path='/shop' component={ShopComponent}/>
          <Route path='/signin' component={Authentication}/>
        </Switch>
      </div>
    );
  }
}

export default App;
