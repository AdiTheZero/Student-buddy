import React from "react";
import "./Grid.css"
import { useNavigate } from 'react-router-dom';
function Gri()
{
    let Navigate=useNavigate();
    return(
        
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
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div   class="card m-card" style={{ width: '18rem' , height:'10rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
export default Gri;