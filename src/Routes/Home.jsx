import React from "react";
import '../App.css';
import Button from '../components/Button.jsx';
import NavBar from '../components/NavBar.jsx';
import SearchBar from '../components/searchBar.jsx';
import SelectSubsidiary from '../components/SelectSubsidiary.jsx';
import Firebase from '../Class/Firebase.js'
import { useState } from 'react';

let FirebaseInstance = new Firebase();

export default function Home(){
    const [valueInput, setValueInput] = useState('');
  
    return ( 
      <>
   <h3> Elija una sucursal para continuar</h3>

  
        <nav> 
          {subsidiary == '' ? <br></br> :
          <> 
          <NavBar>
          <Button 
          type="button" 
          triger={FirebaseInstance.getAllPackagesSubsidiary('SANISIDRO')}
          textBtn="Lista de paquetes">          
          </Button>
          </NavBar>

          <SearchBar 
           setInput= {setValueInput} 
           stateInput = {valueInput} 
           text="Buscar paquete por NOMBRE">
          </SearchBar>

          <Button 
          type="button"
          textBtn="Buscar">          
          </Button>

          <div>{valueInput}</div>

          </>
      }
        </nav>
  
        
      </>
    )
}