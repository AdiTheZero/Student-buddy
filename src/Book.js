import React from "react";
import { useState } from "react";
import Speech from "./Speech";
import "./Book.css";
function Book ()
{
    const [text,setText]=useState("");
    const [results, setResults] = useState([]);
    function search()
    {   
    const url = `https://api.itbook.store/1.0/search/=${text}`;
     fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.books);
         setResults(data.books);
    })
    .catch((e) => console.log(`ERROR : ${e}`));
    }
        function changetext(e)
    {
        setText(e.target.value);
    }
    return(
        <>

            <div id="book">
                <Speech></Speech>
               <span className="heading"> <h2> Search Any Book Here</h2></span> 
                 <span className="inputBox"><input type="search" placeholder="Enter Book Name" onChange={changetext} />
                <button id="btn" onClick={search}><i class="fa fa-search"></i></button>
                </span> 
                <img id="imgBook" src="https://www.logoinspirations.co/wp-content/uploads/2019/07/book-logo.jpg"></img>
            </div>

        <div id="bookM">

          {
           results.map( x =>{
           
                  return <div id="bookR">
                  <span> <img src={x.image}></img></span>
                  <a href={x.url} target="_blank" >{x.title} </a>
                  <br></br>
                  Price:
                  {x.price}
                  <br></br>
                  Subtitle: {x.subtitle}
                  </div>
              })
          }
        </div>
        </>
    )
}
export default Book;