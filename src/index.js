import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const reactContentRoot = document.getElementById("root");
const root = ReactDOM.createRoot(reactContentRoot);
root.render(<App />);
console.log(App);