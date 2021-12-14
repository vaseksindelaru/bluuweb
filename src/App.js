import './App.css';
import React, {useState,Fragment} from 'react'

function App() {
  const[arrayNum,setArrayNum]= useState([1,2,3,4,5,])
  return (
    <Fragment>
     <h2>lista</h2>
     {arrayNum.map(item=>
       <p>{item}</p>
    )}
    </Fragment>
  );
}

export default App;
