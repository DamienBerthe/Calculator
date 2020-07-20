import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [expression, setExpression] = useState('0');
  const [ans, setAns] = useState('0');
  const x = [];
  for (let i = 1; i < 10; i++) {
    x.push(i)
  }
  const numbersNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const y = x.map(kek => <Button className="button" variant="secondary" onClick={() => {setExpression(filter(expression, kek))}} id={numbersNames[kek - 1]}>{kek}</Button>)

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
      else if ((x === '0' && /[1-9]/.test(y) === true)||(ans!=='0'&& expression===ans && /[-9-9]/.test(y) === true)) {
        return y.toString()
      }
      else if ((/.*[+*/-]0/.test(x) === true && /[1-9]/.test(y) === true)
        || ((x.charAt(x.length - 1)) === '-' && /[+*/]/.test(y) === true)
        || (/[+*/]/.test(x.charAt(x.length - 1)) === true && /[+*/]/.test(y) === true && x.charAt(x.length - 1) !== y)
        || (x.charAt(x.length - 1) === '+' && y === '-')) {
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
    <div id="salut">
      <div id="display">
        {expression}
      </div>
      {y}
      <Button variant="secondary" className="button" onClick={() => setExpression(filter(expression, '0'))} id="zero">{'0'}</Button>
      <Button variant="secondary" className="button" onClick={() => {
        if (/\d+\.\d+$/.test(expression) === false) {
          setExpression(filter(expression, '.'))
        }
      }
      } id="decimal">{"."}</Button>
      <Button variant="secondary" className="button" onClick={() => setExpression(filter(expression, '+'))} id="add">{"+"}</Button>
      <Button variant="secondary" className="button" onClick={() => setExpression(filter(expression, '-'))} id="subtract">{"-"}</Button>
      <Button variant="secondary" className="button" onClick={() => setExpression(filter(expression, '*'))} id="multiply">{"*"}</Button>
      <Button variant="secondary" className="button" onClick={() => setExpression(filter(expression, '/'))} id="divide">{"/"}</Button>
      <Button variant="success" className="button" onClick={() => setExpression("0")} id="clear">{"AC"}</Button>
      <Button variant="success" className="button" onClick={() => {
        if (/^\d$/.test(expression)=== false){
          setExpression(expression.slice(0, expression.length - 1))
        }
        else {
          setExpression('0')
        }
      }
      }>{"CE"}</Button>
      <Button variant="secondary" className="button" onClick={() => {
        if (/[^+*/.-]/.test(expression.charAt(expression.length - 1)) === true) {
          setExpression(stringToExpression(expression).toString());
          setAns(stringToExpression(expression).toString());
        }
      }
      } id="equals">{"="}</Button>
    </div>
  );
}

export default App;