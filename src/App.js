import React,{useState} from 'react'
import Header from './components/Header'
import Card from './components/tasks/Card'
import Buttons from './components/tasks/Buttons'
import './App.css';


function App() {
  const [input, setInput] = useState(0); 

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Card input={input}></Card>
        <Buttons input={input} setInput={setInput}></Buttons>
      </div>
    </div>
  );
}

export default App;
