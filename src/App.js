import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom'
import ShopComponent from './pages/shop/shop.component'

function App() {
  return ( 
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/shop' component={ShopComponent}/>
      </Switch>
    </div>
  );
}

export default App;
