import React, { useState } from 'react'


export default function GetuserData() {

const [users,setUsers] = useState([]);

const loaduser = async()=>{
    const res = await fetch("https://reqres.in/api/users?");
    const json = await res.json();
    setUsers(json.data);
};


  return (
    <div className='content'>
        <div>
        <h2>Let's Grow More TASK-2 Fetching users data from a api</h2>
            <h1>The Data</h1>
        </div>
        <div>
        <button className='data' onClick={loaduser}>Get Data</button>
        {
            users.map(({id,email,first_name,last_name,avatar})=>(
               
            <li key={id}>
               <div className='d'>
              <p> Email :  {email}</p>
              <p>  first_name: <b>{first_name}</b></p>
               <p>last_name: <b>{last_name}</b></p>
               <p><img src ={avatar}/> </p>
              
                </div> 
            </li>
            ))
        
        }
        </div>
        
        
    </div>
  )
}
