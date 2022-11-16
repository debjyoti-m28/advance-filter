import { useEffect, useState, useRef } from 'react';
import './App.css';
import Table from './Table';
import axios from "axios";
import useKey from './key/useKey';


const App = () => {
  const [query, setquery] =useState("");
  const [data, setData] =useState([]);
  const [focus, setFocus] = useState(false);
  const handleEnter = () =>{
    console.log("no")
  }

  useKey("KeyS", handleEnter)
 

  useEffect(()=>{
    const fetchUsers = async() =>{
        const res = await axios.get(`http://localhost:8800?q=${query}`);
        setData(res.data);
    };
  
    fetchUsers();
  },[query]);


  return (
   
    <div className="App">
    
      <input className='search'
       type="text" 
       placeholder='Search...'
       onChange={e=>setquery(e.target.value)}
       ></input>
    
      <Table datas={data}/>

    </div>
   
  );
}

export default App;
