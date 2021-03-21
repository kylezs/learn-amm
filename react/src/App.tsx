import React from 'react';
// import './App.css';
import  {Button} from 'antd';

import { add_two_ints } from 'wasm';

function App() {
   return (
      <div>
         <h1>Hello</h1>
          <p>{add_two_ints(3, 4)}</p>
      </div>
   );
}
export default App;