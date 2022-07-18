import { useState } from 'react';
import './App.css';
import { Users } from './users';

function App() {
  const [query, setquery] =useState("");

  console.log(Users.filter(user => user.first_name.toLowerCase().includes(query)));
  return (
    <div className="App">
      <input className='search'
       type="text" 
       placeholder='Search...'
       onChange={e=>setquery(e.target.value)}
       ></input>
      <ul className='list'>
        {Users.map(user =>
          <li key={user.id} className='listItem'>{user.first_name}</li>
          )}
      </ul>
    </div>
  );
}

export default App;
