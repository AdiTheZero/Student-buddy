import React from "react";
import { useState } from "react";
import Speech from "./Speech";
import "./Wiki.css"
function Wiki ()
{
    const [text,setText]=useState("");
    const [results, setResults] = useState([]);
    function search()
    {   
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8=&format=json&srsearch=${text}`;
     fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.query.search);
         setResults(data.query.search);
    })
    .catch((e) => console.log(`ERROR : ${e}`));
    }
        function changetext(e)
    {
        setText(e.target.value);
    }
    return(
        <>
        <div id="ind"><Speech></Speech></div>
        <div id="Box">
        <img id="img" src="https://raw.githubusercontent.com/JuanPabllo/Wiki-Search/main/assets/img/wikipedia.png"></img>
        <input id="searchBox" type="search" onChange={changetext} />
        <br/>
        <button id="btn" onClick={search}><i class="fa fa-search"></i></button>
        </div>
        <div id="downBox">{
           results.map( x =>{
            const url = encodeURI(`https://en.wikipedia.org/wiki/${x.title}`);
                  return <div>
                  <a href={url} target="_blank" >{x.title} </a>
                  </div>
              })
            }
            </div>
        </>
    )
}
export default Wiki;