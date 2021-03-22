import { ChangeEvent, useState } from 'react';
// import './App.css';
import  {Button} from 'antd';

import { swap, Pools } from 'wasm';

function App() {

   const [inAmount, setInAmount] = useState(0);

   const onInputInAmount = (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      const intVal = Number.parseInt(val);
      setInAmount(intVal);
   }

   const pools = Pools.new(BigInt(500), BigInt(10));

   return (
      <div>
         <h1>Hello</h1>
         <input type="number" value={inAmount} onChange={(e) => onInputInAmount(e)}></input>
         <p>{inAmount}</p>
          <p>{swap(BigInt(inAmount), Pools.new(BigInt(500), BigInt(10)))}</p>
          </div>
         )
      }
export default App;
