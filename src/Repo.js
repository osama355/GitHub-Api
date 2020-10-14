import React, { useState } from 'react';
import './Style/Repo.css';
import './Style/User.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const Repo=()=>{

    const[repo,setRepo]=useState("");
    const[repoData, setRepoData]=useState([]);
    
    const search=async()=>{
        const res= await fetch(`https://api.github.com/search/repositories?q=${repo}{&page,per_page,sort,order}`);
        const {items}= await res.json();
        setRepoData(items);
        setRepo("")
    }
    return(
        <div className="main">
            <div className="body_head">
                <h2 className="heading">
                    GitHub Repositories
                </h2>
                <GitHubIcon className="icon" />
            </div>
            <div className="form">
                <input className="search_box" placeholder="Find a repository..." value={repo} onChange={(e)=>{setRepo(e.target.value)}}/>
                <button onClick={search} >Search</button> 
            </div>
            <div className="result">
                <ul className="list1">
                    {repoData.map((value)=>(
                        <li key={value.id}>
                            <p>
                                {value.name}
                            </p>
                            <p>{value.description}</p>
                            <a href={value.url}>Link</a>
                        </li>
                    ))}
                </ul>
            </div>
           
        </div>
    );
}
export default Repo;