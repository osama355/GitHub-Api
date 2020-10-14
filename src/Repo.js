import React, { useState } from 'react';

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
        <div>
            <input placeholder="Search repository..." value={repo} onChange={(e)=>{setRepo(e.target.value)}}/>
            <button onClick={search} >Search</button> 

            <ul>
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
    );
}
export default Repo;