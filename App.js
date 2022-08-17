import React, {useState } from 'react';
import {Multiselect} from 'multiselect-react-dropdown';

import './App.css';

function App() {
  
  const data =[
     {System:'Android',id:1},
     {System:'Windows',id:1},
     {System:'Windows 2000 server',id:1},
     {System:'Windows NT server',id:1}
    ]
    const [options] =  useState(data); 
  return (
    
      <div style={{width:"90%",justifyContent:"center",display:"flex"}}>
      <div className='App'>
      <h3 style={{color:"red" }}> Multiselect DropDown </h3>
      <Multiselect options={options} displayValue="System" /> 
      </div>   
      </div>  
    
  );
}

export default App;
