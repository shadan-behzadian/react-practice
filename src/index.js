import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();

//function tick() {
//  const element = (
//    <div>
//      <h1>Hello, world!</h1>
//      <h2>It is {new Date().toLocaleTimeString()}.</h2>
//    </div>
//  );
//  ReactDOM.render(elemnt, document.getElementById('root'));
//}
//
//setInterval(tick, 1000);

//function Welcome(props) {
//  return <h1>Hello, {props.name}</h1>;
//}
////Always use componnet names with capital letter
//const element = <Welcome name="Sara" />;
//ReactDOM.render(
//  element,
//  document.getElementById('root')
//);
//
//
//function Welcome1(prop){
//    return <h1> Hi, {prop.name}</h1>;
//}
//
//function MyWelcome(){
//    return (
//        <div>
//          <Welcome name="Sara" />
//      <Welcome name="Cahal" />
//      <Welcome name="melany" />
//        
//        </div>
//    
//    )
//}
//
//ReactDOM.render(
//  <MyWelcome />,
//  document.getElementById('root')
//);




/////////////////////////////-------------------/////////////////////////
//function formatDate(date) {
//  return date.toLocaleDateString();
//}
//
//
//function Avatar(props) {
//  return (
//    <img className="Avatar"
//      src={props.user.avatarUrl}
//      alt={props.user.name}
//    />
//
//  );
//}
//
//
//function UserInfo(props){
//   return(
//   <div className="UserInfo">
//        <Avatar user={props.user}/>
//        <div className="UserInfo-name">
//          {props.user.name}
//        </div>
//   </div>
//   );
//    
//}
//
//
//
//
//
//function Comment(props) {
//  return (
//    <div className="Comment">
//   <UserInfo user={props.author}/>
//      <div className="Comment-text">{props.text}</div>
//      <div className="Comment-date">
//        {formatDate(props.date)}
//      </div>
//    </div>
//  );
//}
//
//const comment = {
//  date: new Date(),
//  text: 'I hope you enjoy learning React!',
//  author: {
//    name: 'Hello Kitty',
//    avatarUrl: 'https://placekitten.com/g/64/64',
//  },
//};
//
//
//ReactDOM.render(
//  <Comment
//    date={comment.date}
//    text={comment.text}
//    author={comment.author}
//  />,
//  document.getElementById('root')
//);

//////////////////////-----------------------------////////////////////

//function tick() {
//  ReactDOM.render(
//    <Clock  />,
//    document.getElementById('root')
//  );
//}
//
//setInterval(tick, 1000);



//function Clock(props) {
//  return (
//    <div>
//      <h1>Hello, world!</h1>
//      <h2>It is {props.date.toLocaleTimeString()}.</h2>
//    </div>
//  );
//}

////////////////--------------///////////////////

//class Clock extends React.Component{
//    constructor(props){
//        super(props);
//        this.state = {date: new Date()};
//    }
//    
//    componentDidMount() {
//        this.timerID = setInterval(
//      () => this.tick(),
//      1000
//    );
//         
//
//  }
//
//    componentWillUnmount() {
//    clearInterval(this.timerID);
//  }
//    
//    
//    tick() {
//    this.setState({
//      date: new Date()
//    });
//  }
//
//    
//    
//   render() {
//        return (
//    <div>
//      <h1>Hello, world!</h1>
//      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//    </div>
//  );
//       
//   }
//    
//}
//
//ReactDOM.render(
//    <Clock  />,
//    document.getElementById('root')
//  );

/////////////////////////////////////////////////////////////////

//const students = ["Gerarldine","Shadan","Dani","Ben"]
//
//ReactDOM.render(
//  <li>{students}</li>,
//  document.getElementById('root')
//);













//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

