import React from "react";
import { useState } from "react";
import "./News.css";
import Speech from "./Speech";
import { useEffect } from "react";
function News()
{
    const [results, setResults] = useState([]);
    useEffect (()=>
    {
    const url = `https://content.guardianapis.com/technology?api-key=test`;
        fetch(url)
       .then((res) => res.json())
       .then((data) => {
           console.log(data.response.results);
            setResults(data.response.results);
        })
        .catch((e) => console.log(`ERROR : ${e}`));
    },[]);
    return(
    <div className="newsDiv">
        
        
         <Speech></Speech>
         <div id ='sp'><h1> Top News Headlines</h1></div>
        <div id="box">
            {
            results.map( x =>
            {
            return <div>
            <a href={x.webUrl} > {x.webTitle}</a>
                </div>
            })
         }
        
        </div>
    </div>)
}
export default News;
      