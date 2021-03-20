import React from 'react';
import './App.css';

function App() {
   import('wasm').then(module => {
      let a = module.add_two_ints(2, 2);
      console.log("the answer is: " + a);
   })
   return (
      // I cut out the fluff
      <div className="App">
         <h1>Learn AMM</h1>
         </div>
   );
}
export default App;
