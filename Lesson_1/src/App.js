import logo from './logo.svg';
import './App.css';
import Message from './Message';


  function App () {
    const myText = "Hello, Ann";
    return (
      <div className="App">
      <Message text={myText}/>
      </div>
      );
    } 
  
  export default App;
