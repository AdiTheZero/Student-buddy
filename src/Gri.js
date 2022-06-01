import React from "react";
import "./Grid.css"
import { useNavigate } from 'react-router-dom';
import Speech from "./Speech";
function Gri()
{
    let Navigate=useNavigate();
    return(
        <>
             <div id="hh"><div id="ind"><Speech></Speech></div><h1>Welcome To<br></br>Student Buddy</h1></div>
            <div className="main-container">     
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                        <div onClick={()=>Navigate('/news')} className="card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">News</h5>
                                <p class="card-text">All the day's headlines and highlights from the Guardian, direct to you every morning.</p>
                                
     
                            </div>
                            </div>
                        </div>
                        <div className="col">
                        <div  onClick={()=>Navigate('/wiki')} class="card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">Wikipedia </h5>
                                <p class="card-text">Wikipedia is a free, open content online encyclopedia created through the collaborative effort of a community of users.</p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col">
                        <div onClick={()=>Navigate('/job')} class="card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">FIND JOBS</h5>
                                <p class="card-text">Find a Job, Find your Career Today and To look for employment or get employed.</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                        <div onClick={()=>Navigate('/book')}class="card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">BOOK STORE</h5>
                                <p class="card-text">The definition of a bookstore is a retail place where books are sold. The place where college students purchase their books for class .</p>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                        <div onClick={()=>Navigate('/cons')} class="card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">Coding Contest</h5>
                                <p class="card-text">Contestants are required to write computer programs capable of solving each problem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        
                        <div  class="card m-card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                            <a className="Ctext" href="https://posttorajdeep.github.io/ToDo-List/">
                                <h5 class="card-title">To-Do-List</h5>  
                                <p class="card-text">A list of things that one wants to get done or that need to get done: No, I haven't bought the gift yet, but it's on my to-do list.</p>
                            </a>   
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>   
    )
}
export default Gri;