import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import axios from "axios";

function App() {
  const [query, setquery] =useState("");
  const [data, setData] =useState([]);

  useEffect(()=>{
    const fetchUsers = async() =>{
        const res = await axios.get(`http://localhost:8800?q=${query}`);
        setData(res.data);
    };
    fetchUsers();
  },[query]);
  

  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
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
