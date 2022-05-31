import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes,Route, BrowserRouter  } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Book from './Book';
import Job from './Job';
import Cons from './Cons';
import Wiki from './Wiki';
import News from './News';
import Gri from './Gri';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter basename={process.env.PUBLIC_URL}>
<Routes>
  <Route path='/'element={<Gri></Gri>}/>
  <Route path='/news' element={<News></News>}/>
  <Route path='/wiki' element={<Wiki></Wiki>}/>
 <Route path='/job' element={<Job></Job>}/>
 <Route path='/book' element={<Book></Book>}/>
  <Route path='/cons' element={<Cons></Cons>}/>
  
  
</Routes>
</BrowserRouter>
);
reportWebVitals();
