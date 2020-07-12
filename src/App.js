import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [total, setTotal] = useState(0);
  const x = [];
  for (let i = 0; i < 10; i++) {
    x.push(i)
  }
  const y = x.map(kek => <button onClick={() => setExpression(expression + kek)}>{kek}</button>)

  function splitter(x) {
    return x.split(/[+*/-]/)
  }

  function filter(x, y) {
    if (/[+*/-]/.test(x.charAt(x.length - 1)) === true && /[+*/-]/.test(x.charAt(x.length - 2)) === true) {
      return x
    }
    else {
      if (x.charAt(x.length - 1) === y) {
        return x
      }
      else if (((x.charAt(x.length - 1)) === '-' && /[+*/]/.test(y) === true) ||
        (/[+*/]/.test(x.charAt(x.length - 1)) === true && /[+*/]/.test(y) === true && x.charAt(x.length - 1) !== y)) {
        return x.slice(0, x.length - 1) + y
      }
      else if (/[+]/.test(x.charAt(x.length - 1)) === true && y === '-') {
        return x.slice(0, x.length - 1) + y
      }
      else return x + y
    }
  }

  function calcul(x) {
    let y = 0;
    for (let i = 0; i < x.length; i++) {
      if (Number.isInteger(x[i]) === true) {
        y += x[i]
      }
    }
    return y;
  }


  return (
    <div>
      <p>
        {y}
        <button onClick={() => setExpression("")}>{"AC"}</button>
        {//<button onClick={()=> setExpression(expression=>[...expression, '+'])}>{"+"}</button>
        }
        <button onClick={() => setExpression(expression + '.')}>{"."}</button>
        {/*<button onClick={() => setExpression(expression + '+')}>{"+"}</button>
           <button onClick={() => setExpression(expression + '-')}>{"-"}</button>
           <button onClick={() => setExpression(expression + '*')}>{"*"}</button>
           <button onClick={() => setExpression(expression + '/')}>{"/"}</button>
      */}
        <button onClick={() => setExpression(filter(expression, '+'))}>{"+"}</button>
        <button onClick={() => setExpression(filter(expression, '-'))}>{"-"}</button>
        <button onClick={() => setExpression(filter(expression, '*'))}>{"*"}</button>
        <button onClick={() => setExpression(filter(expression, '/'))}>{"/"}</button>

        <button onClick={() => setTotal(splitter(expression))}>{"="}</button>
        <br />
       expression : {expression}
        <br />
       total : {total[0]}
        <br />
        <div dangerouslySetInnerHTML={{ __html: splitter(expression) }} />
        <br />
        {filter('999/', '+')}
      </p>
    </div>
  );
}

export default App;
