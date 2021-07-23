import React from 'react';



// const App = () => {

// }
const hello = () => React.createElement('div',null,'Hello world'); //without JSX 

function App() {
  // return (
  //   <div className="App">
  //     Start here.
  //   </div>
  // );  

  //or return React.createElement('div',null,'Hello world');
  return hello();
}

export default App;