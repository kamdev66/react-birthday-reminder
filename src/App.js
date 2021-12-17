import React, {useState} from "react"
import './App.css';
import info from "./info";
import Card from './Card'

function App() {
  const [data,setData]=useState(info)
  const [status,setStatus]=useState(true)
  function refresh(){
        if(!status){
           setData(info)
           setStatus(true)
        }else{
           setStatus(false)
        }
  }
  const clearAll=()=>{
      setData([])
      setStatus(false)
  }
  return (
    <div className="App">
      <h1 style={{color:"red"}}><center>{data.length} Birthdays today</center></h1>
    
      {status && <Card details={data} sendState={data} sendChangeState={setData}/>}
      <div className="ter"><div>
      <button  className="button" onClick={()=>clearAll()}>Clear All</button>
      <button  className="button" onClick={()=>refresh()}>Refresh</button>
      </div>
      </div>
    </div>
  );
}

export default App;
