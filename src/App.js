import React, { useState} from 'react'
import { BsBackspaceFill } from 'react-icons/bs';
import './App.css';

function App() {
  const [calc, setCalc] = useState('')
  const [res, setRes] = useState('')
  const operators = ['/', '+', '-', '*', '.']

  const outputHandler = (value) => {
    if(operators.includes(value) && calc == '' || 
        operators.includes(value) && operators.includes(calc.slice(-1))) {
          return
        }
    setCalc(calc + value)
    if(!operators.includes(value)){
      setRes(eval(calc+value))
    }
  }
  
  const calcHandler = () => {
    setCalc(eval(calc)+"")
    setRes('')
    console.log(calc)
  }

  const backspaceHandler = () => {
    const newValue = calc.slice(0, -1)
    setCalc(newValue)
  }

  console.log(calc)

  return (
    <div className="App">
      <div className="calc">
        <div className="output">
          {res ? <span>({res}) </span> : ''}
          {calc || '0'}
          <p></p>
        </div>
        <div className="operators">
          <button onClick={() => outputHandler('/')}>&#247;</button>
          <button onClick={() => outputHandler('*')}>&#215;</button>
          <button onClick={() => outputHandler('-')}>-</button>
          <button onClick={() => outputHandler('+')}>+</button>

          <button className="delete-btn" onClick={backspaceHandler}><BsBackspaceFill /></button>
        </div>
        <div className="numbers">
          <button onClick={() => outputHandler('1') }>1</button>
          <button onClick={() => outputHandler('2') }>2</button>
          <button onClick={() => outputHandler('3') }>3</button>
          <button onClick={() => outputHandler('4') }>4</button>
          <button onClick={() => outputHandler('5') }>5</button>
          <button onClick={() => outputHandler('6') }>6</button>
          <button onClick={() => outputHandler('7') }>7</button>
          <button onClick={() => outputHandler('8') }>8</button>
          <button onClick={() => outputHandler('9') }>9</button>
          <button onClick={() => outputHandler('0') }>0</button>
          <button onClick={() => outputHandler('.') }>.</button>
          <button onClick={calcHandler}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
