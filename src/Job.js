import React from "react";
import { useState } from "react";
import Speech from "./Speech";
import { useEffect } from "react";
import "./Job.css"
function Job ()
{
    const [text,setText]=useState("java");
    const [results, setResults] = useState([]);
    useEffect (()=>{
        search();
    },[]);
    function search()
    {   
    const url = `https://thingproxy.freeboard.io/fetch/https://findwork.dev/api/jobs/?format=json&search=${text}`;
     fetch(url, {
         method: "GET",
         headers : {
            "Authorization": "Token a3236ff56ad5e52305ea57d4fe0eba78a65b50de",
            }
     })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setResults(data.results)
        
    })
    .catch((e) => console.log(`ERROR : ${e}`));
    }
        function changetext(e)
    {
        setText(e.target.value);
    }
    return(
        <>
        
            <div id="jobB">
                <Speech></Speech>
               <span className="heading"> <h2> Search your Job Here</h2></span> 
                 <span className="inputBox"><input type="search" placeholder="Enter Your Skill" onChange={changetext} defaultValue='' />
                <button id="btn" onClick={search}><i class="fa fa-search"></i></button>
                </span> 
                <img id="imgB" src="https://st4.depositphotos.com/22951204/31548/v/380/depositphotos_315488132-stock-illustration-job-search-business-logo-designs.jpg?forcejpeg=true"></img>
            </div>


        <div id="jobM">

          {
           results.map( x =>{
           
                  return <div id="jobR">
                  <a href={x.url} target="_blank" >Company Name: {x.company_name}<br></br><span>Role: {x.role}</span></a>
                  </div>
              })
          }
        </div>
        </>
  )
}
export default Job;