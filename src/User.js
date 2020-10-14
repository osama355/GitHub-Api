import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Style/User.css';

const User=()=>{

    const [user, setUser]=useState('');
    const [userData, setUserData]=useState([]);

    const click= async()=>{
        const res= await fetch(`https://api.github.com/search/users?q=${user}`);
        const {items}= await res.json();
        setUserData(items);
        setUser(''); 
    }

    return(
        <div className="main">
            <div className="body_head">
                <h2 className="heading">
                    GitHub Users
                </h2>
                <GitHubIcon className="icon" />
            </div>
            <div className="form">
                <input className="search_box" placeholder="Search user..." value={user} onChange={(e=>{setUser(e.target.value)})}/>
                <button onClick={click} >Search</button>
            </div>
            <div className="result">
                <ul className="list" >
                    {userData.map((value)=>(
                        <li key={value.id}>
                            <img src={value.avatar_url} alt={value.login} /> 
                            <p>{value.login}</p>

                        </li>
                    ))}
                </ul>
            </div>
            
        </div>

    );

}

export default User;

