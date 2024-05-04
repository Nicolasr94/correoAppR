import React from "react";
import {Link} from "react-router-dom"


export default function SelectSubsidiary(props){

  let subsidiaryId = "SANISIDRO";
    return(
        <>
        
   
<div>
  <Link to={`/subsidiary/SANISIDRO`}>San isidro</Link>
  <Link to={`/subsidiary/SANISIDRO`}>Vicente Lopez</Link>
</div>
  
    </>
    )
}
