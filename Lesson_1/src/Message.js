import logo from './logo.svg';
import './Message.css';


  function Message ({text}) {
    return (
    <div className="Message">
    <p>Lesson 1 (Message App)</p>
    <h3>{text}</h3>
    </div>
    );
    } 
  export default Message;
