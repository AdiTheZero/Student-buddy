import React from "react";
import { useState } from "react";
import moment from 'moment';
import "./Cons.css"
import { useEffect } from "react";
import Speech from "./Speech";
function Cons ()
{
    
    const [results, setResults] = useState([]);
    useEffect(()=>
    {   
    const url = `https://kontests.net/api/v1/all`;
     fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setResults(data)
         
    })
    .catch((e) => console.log(`ERROR : ${e}`));
    },[]);
   
    return(
        <>   
  <div id="ind"><Speech></Speech></div>
        <div id="consBox">
            <h1>Runnig Conding Contests</h1>
        {
           results.map( x =>{
            
                  return <div id="card">
                  <a href={x.url} target="_blank" >{x.name} </a><br></br>
                 <span>Start Time {moment(x.start_time).format('YYYY/MM/DD,h:mm:ss a')}<br></br>End Time {moment(x.end_time).format('YYYY/MM/DD,h:mm:ss a')}</span>
                  </div>
                  
              })
          }
        </div>
        </>
    )
}
export default Cons;
