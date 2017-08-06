import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../scss/second'
const Home = () => (
  <div>
    <h2>我有一个</h2>
  </div>
)
console.log(Home())
const About = () => (
  <div className="About">
    <h2>About</h2>
  </div>
)




const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      
    </div>
  </Router>
)
export default BasicExample