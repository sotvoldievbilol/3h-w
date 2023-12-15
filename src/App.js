
import { useState } from 'react';

function App() {
  const[input1,setInput1] = useState(0)
  const[input2,setInput2] = useState(0)
  const[input3,setInput3] = useState(0)

  function plyus (){
    setInput3(+input1 + +input2)
  }
  function minus (){
    setInput3(+input1 - +input2)
  }
  function umnojena (){
    setInput3(+input1 * +input2)
  }
  function deleniy (){
    setInput3(+input1 / +input2)
  }
  function corniya (){
    setInput3(Math.pow(input1,1/input2))
  }
  function stepenam (){
    setInput3(Math.pow(input1,input2))
  }
  

  
  return (
    <div className="App">
      <input value={input1} onChange={(event)=>setInput1(event.target.value)} type="text" />
      <input value={input2} onChange={(event)=>setInput2(event.target.value)} type="text" />
      <h1>{input3}</h1>
      <button onClick={plyus}>+</button>
       <button onClick={minus}>-</button>
      <button onClick={umnojena}>*</button>
      <button onClick={deleniy}>/</button>
      <button onClick={corniya}>root</button>
      <button onClick={stepenam}>degree</button>
    </div>
  );
}

export default App;
