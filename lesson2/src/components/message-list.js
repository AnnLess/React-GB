import React, { useEffect, useState, } from 'react';
import {Message} from "./message" 

export const MessagesList = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue]= useState ("");

    const sendMessage = () => {
        if (value) {
            setMessageList ([
                ...messageList, 
                {author: "User1" , message : value}
            ]);
            setValue("");
        }

    };

    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage();
        }
    };

    useEffect(() => {
        const lastMessage= messageList[messageList.length-1];
        let timerID = null;

        if (messageList.length && lastMessage.author === "User1") {
        timerID = setTimeout(()=> {
                setMessageList([
                    ...messageList,
                    {author: "Bot" , message : "Hello , how can i help you ?"},
                ]);
            }, 500);

            return () => {
                clearInterval (timerID)
            };
        }
    },[messageList]);

    return ( 
    <div> 
      <h1 class="lesson">Lesson 2</h1>
      {messageList.map((message, index)=> (
        <Message message= {message}/>
      ))}
    <button class="button" onClick={sendMessage}>Send</button>
      <input value={value} 
      onChange={e => setValue(e.target.value)}
      onKeyPress = {handlePressInput} />
      </div>
    );
    }