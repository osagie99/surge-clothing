import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import {Route , Switch, Link} from 'react-router-dom'

const HatsPage  = (props) => {
  console.log(props);
  return(
    <div className="hello">
      <button onClick={() => props.history.push('/topics')}>Topics Page </button>
      <h1>Hats Page</h1>
    </div>
  )
}
// const NotFOund = (props) => {
//   console.log(props);
//   return(
//     <div className="notofund">
//       <h1>Not Found</h1>
//     </div>
//   )
// }
// const Topic = (props) => {
//   return (
//     <div className="topics">
//       <h1>Topics Page</h1>
//     </div>
//   )
// }
// const TopicDetails = (props) => {
//   console.log(props);
//   return (
//     <div className="topicdetail">
//       <Link to='/topics'> Go back </Link>
//       <h1>Topic Detials page: {props.match.params.topicid}</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
        {/* <Route exact path='/topics' component={Topic} />
        <Route path='/topics/:topicid' component={TopicDetails} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/*' component={NotFOund} /> */}
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
