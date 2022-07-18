import { useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Table';

function App() {
  const [query, setquery] =useState("");

  const search = (data) => {
    return data.filter(item => item.first_name.toLowerCase().includes(query) ||
    item.last_name.toLowerCase().includes(query) ||
    item.email.toLowerCase().includes(query) ||
    item.gender.toLowerCase().startsWith(query));
  }
  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
  return (
    <div className="App">
      <input className='search'
       type="text" 
       placeholder='Search...'
       onChange={e=>setquery(e.target.value)}
       ></input>
      
      <Table datas={search(Users)}/>

    </div>
  );
}

export default App;
