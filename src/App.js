import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('0');
  const x = [];
  for (let i = 1; i < 10; i++) {
    x.push(i)
  }
  const y = x.map(kek => <button onClick={() => setExpression(filter(expression, kek))}>{kek}</button>)

  function filter(x, y) {
    if (/[+*/-]/.test(x.charAt(x.length - 1)) === true && /[+*/-]/.test(x.charAt(x.length - 2)) === true && /[+*/-]/.test(y) === true) {
      if (x.charAt(x.length - 1) === y) {
        return x
      }
      else {
        return x.slice(0, x.length - 2) + y
      }
    }
    else {
      if ((x.charAt(x.length - 1) === y && /[+*/.-]/.test(y) === true) || (x === '0' && y === '0')) {
        return x
      }
      else if (x === '0' && /[1-9]/.test(y) === true) {
        return y.toString()
      }
      else if ((/.*[+*/-]0/.test(x) === true && /[1-9]/.test(y) === true)
      ||((x.charAt(x.length - 1)) === '-' && /[+*/]/.test(y) === true)
      ||(/[+*/]/.test(x.charAt(x.length - 1)) === true && /[+*/]/.test(y) === true && x.charAt(x.length - 1) !== y)
      ||(x.charAt(x.length - 1)==='+' && y === '-'))
      {
        return x.slice(0, x.length - 1) + y
      }
      else return x + y
    }
  }

  function stringToExpression(obj) {
    // eslint-disable-next-line
    return Function('"use strict";return (' + obj + ')')();
  }

  return (
    <div>
      <p>
        {y}
        <button onClick={() => setExpression(filter(expression, '0'))}>{'0'}</button>
        <button onClick={() => setExpression("0")}>{"AC"}</button>
        <button onClick={() => {
         if (/\d+\.\d+$/.test(expression) === false) {
           setExpression(filter(expression, '.'))
          }
        }
        }>{"."}</button>
        <button onClick={() => setExpression(filter(expression, '+'))}>{"+"}</button>
        <button onClick={() => setExpression(filter(expression, '-'))}>{"-"}</button>
        <button onClick={() => setExpression(filter(expression, '*'))}>{"*"}</button>
        <button onClick={() => setExpression(filter(expression, '/'))}>{"/"}</button>
        <button onClick={() => {
          if (/[^+*/.-]/.test(expression.charAt(expression.length - 1)) === true) {
            setExpression(stringToExpression(expression).toString())
          }
        }
        }>{"="}</button>
        <br />
        {expression}
      </p>
    </div>
  );
}

export default App;
