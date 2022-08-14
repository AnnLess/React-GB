import ReactDOM from 'react-dom/client';
import React from 'react';
import {MessagesList} from "./components"


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return <MessagesList />
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


