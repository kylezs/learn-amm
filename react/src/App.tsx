import React from 'react';
import './App.css';
import  {Button} from 'antd';

import { greet } from 'wasm';

function App() {
   return (
      // I cut out the fluff
      <div className="App">
         <h1>Learn AMM</h1>
         <Button type="text" onClick={ () => greet() }>Calculate</Button>
      </div>
   );
}
export default App;
