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


function warnUser(): void {
    alert("This is my warning message");
}
let unusable: void = undefined;
console.log(unusable)


let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let prettySure: Object = 4;
console.log(typeof prettySure)
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}
interface LabelledValue{
  label:string;
}
function printLabel(labelledobj:LabelledValue){
  console.log(labelledobj.label)
}
let myObj={size:10,label:"size 10 obj"}
printLabel(myObj)

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}


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