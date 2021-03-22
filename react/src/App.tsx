import { ChangeEvent, useState } from 'react';
// import './App.css';
import  {Button} from 'antd';

import { add_two_ints } from 'wasm';

function App() {

   const [inAmount, setInAmount] = useState(0);

   const onInputInAmount = (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      const floatVal = Number.parseFloat(val);
      setInAmount(floatVal);
   }

   return (
      <div>
         <h1>Hello</h1>
         <input type="number" value={inAmount} onChange={(e) => onInputInAmount(e)}></input>
         <p>{inAmount}</p>
          <p>{add_two_ints(inAmount, 4)}</p>
          </div>
         )
      }
export default App;