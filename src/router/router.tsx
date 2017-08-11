import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class B {}
let b = new B();

b.constructor === B.prototype.constructor // true

class Person{
  protected name:string;
  protected constructor(name:string){//受保护的类不可被实例化，但期内部的属性可以呗其他类继承
    this.name=name;
  }
}
class Employee extends Person{
  private department:string;
  constructor(name:string,department:string){
    super(name)
    this.department=department;
  }
  public getElevatorPitch(){
    return `ddddddddddddd`
  }
}
let howard=new Employee("Howard","Sales");
console.log(howard.getElevatorPitch())
// console.log(howard.name)派生类的实例化不能继承其保护属性和私有属性

class Octopus{
  readonly name:string;
  readonly numberOfLegs:number=8;
  constructor(theName:string){
    this.name=theName;
  }
 
}
 let dad =new Octopus("hhe1")
//  dad.name="dddd"//只读属性不可写入编辑
class Animal{
  constructor(private name:string){
    
  }
  move(distanceInMeters:number){
      console.log(`${this.name} moved ${distanceInMeters}m`)
  }
}
let test=new Animal("xxx")
test.move(1313)

let passcode="secret passcode";
class Employ{
  private _fullName:string;
  get fullName():string{
    
    return this._fullName;
  }
  set fullName(newName:string){//newName是赋值变量
    if(passcode && passcode=="secret passcode"){
      this._fullName=newName;
      console.log(newName)
    }else{
      console.log("Error")
    }
  }
}
let employee=new Employ();

employee.fullName="Bob Smith"
if(employee.fullName){
  alert(employee.fullName)
}
class Grid{
  static origin={x:0,y:0}
  calculateDistanceFromOrigin(point:{x:number;y:number}){
    let xDist =(point.x-Grid.origin.x)
    let yDist=(point.y-Grid.origin.y)
    return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale;
  }
  constructor(public scale:number){}
}
let Grid1=new Grid(1.0);
let Grid2=new Grid(5.0)
console.log(Grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
console.log(Grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

abstract class kaka {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
abstract class Department{
  constructor(public name:string){

  }
  printName():void{
    console.log('Department name:'+this.name)
  }
  abstract printMeeting():void;
}
class AccountingDepartment extends Department{
  constructor(){
    super("Accounting and Auditing");
  }
  printMeeting():void{
    console.log("Generating accounting reports")
  }
  generateReports():void{
    console.log("Generating accounting reports...")
  }
}
let department:Department;
// department=new Department("xxx");
department =new AccountingDepartment()
department.printName();
department.printMeeting();
// department.generateReports();类似接口检查，并没神魔乱用
class Greeter{
  greeting:string;
  constructor(message:string){
    this.greeting=message;
  }
  greeter(){
    return "Hello,"+this.greeting;
  }
}
let greeter:Greeter;//声明所属类
greeter=new Greeter("world")
console.log(greeter.greeter())

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};//将类当作接口使用
let myAdd:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y;}
function buildName(firstName:string,lastName="Smith"){
  return firstName+""+lastName;
}
let result1=buildName("Bob");

function buildNamee(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNamee("Joseph", "Samuel", "Lucas", "MacKinzie");
let deck={
  suits:["herts"]
}
function f(this: void) {
    // make sure `this` is unusable in this standalone function
}
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x:any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }:any) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }:any) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
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
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample