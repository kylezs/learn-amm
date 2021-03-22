import { ChangeEvent, useState } from 'react';
// import './App.css';
import  {Button} from 'antd';

import { swap, Pools } from 'wasm';

function App() {

   const [inAmount, setInAmount] = useState(0);
   const [depthX, setDepthX] = useState(0);
   const [depthY, setDepthY] = useState(0);

   const onChangeInAmount = (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      const intVal = Number.parseInt(val);
      if (!isNaN(intVal)) {
         setInAmount(intVal);
      }
   }

   
   const onChangeDepthXAmount = (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      const intVal = Number.parseInt(val);
      if (!isNaN(intVal)) {
         setDepthX(intVal);
      }
   }

   const onChangeDepthYAmount = (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      const intVal = Number.parseInt(val);
      if (!isNaN(intVal)) {
         setDepthY(intVal);
      }
   }

   const pools = Pools.new(BigInt(500), BigInt(10));

   return (
      <div>
         <h1>Learn AMM</h1>
         PoolDepthX: <input type="number" value={depthX} onChange={(e) => onChangeDepthXAmount(e)}></input>
         PoolDepthY: <input type="number" value={depthY} onChange={(e) => onChangeDepthYAmount(e)}></input>
         InputAmount: <input type="number" value={inAmount} onChange={(e) => onChangeInAmount(e)}></input>
          <p>{swap(BigInt(inAmount), Pools.new(BigInt(depthX), BigInt(depthY)))}</p>
      </div>
         )
      }
export default App;
