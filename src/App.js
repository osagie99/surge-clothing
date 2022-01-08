import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom'
import Header from './components/header/header.component';
import ShopComponent from './pages/shop/shop.component'

function App() {
  return ( 
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/shop' component={ShopComponent}/>
      </Switch>
    </div>
  );
}

export default App;
