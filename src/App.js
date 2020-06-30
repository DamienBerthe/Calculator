import React, {useState} from 'react';
import './App.css';

function App(){
  const [expression, setExpression] = useState([]);
  const [total, setTotal] = useState(0);
  const x= [];
  for(let i=0; i<10; i++){
    x.push(i)
  }
  const y = x.map(kek=><button onClick={()=> setExpression(expression=>[...expression, kek])}>{kek}</button>)

  function calcul(x){
    let y=0;
    for(let i=0; i<x.length; i++){
      if(Number.isInteger(x[i])===true){
        y+=x[i]
      }
    }
    return y;
  }
    

  return(
    <div>
      <p>
       {y}
       <button onClick={()=> setExpression("")}>{"AC"}</button>
       <button onClick={()=> setExpression(expression=>[...expression, '+'])}>{"+"}</button>
       <button onClick={()=> setExpression(expression=>[...expression, '-'])}>{"-"}</button>
       <button onClick={()=> setExpression(expression=>[...expression, '*'])}>{"*"}</button>
       <button onClick={()=> setExpression(expression=>[...expression, '/'])}>{"/"}</button>
       <button onClick={()=> setTotal(calcul(expression))}>{"="}</button>
       <br />
       expression : {expression}
       <br />
       total : {total}
      </p>
    </div>
  );
}

export default App;
