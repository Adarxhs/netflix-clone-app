import React from 'react'
import'./App.css'
import './/components/NavBar';
import {HorrorMovie,  action, comedy, documentry, local, orginals, romance, } from './url'
import NavBar from './/components/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/Post/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals}  tittle='Netflix orginals '/>
      <RowPost  url={action}  tittle='Action Movies ' isSmall/>
      <RowPost  url={HorrorMovie}  tittle='HorrorMovie ' isSmall/>
      <RowPost  url={comedy}  tittle='Comedy Movies ' isSmall/>
      <RowPost  url={romance}  tittle='Romance Movie' isSmall/>
      <RowPost  url={documentry}  tittle='Documentry Movies ' isSmall/>
      <RowPost  url={local}  tittle='Native Movies ' isSmall/>
      
      
      
      
    </div>
  );
}

export default App;
