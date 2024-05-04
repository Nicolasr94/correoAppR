import React, { useEffect } from "react"
import FirebaseFunction from '../Class/Firebase.js'


export function Subsidiary() {
    let FirebaseInstance = new FirebaseFunction();
    const dataBd = useEffect(()=>{
        let data = FirebaseInstance.getAllPackagesSubsidiary("SANISIDRO")
        console.log(data)
    },[])

    return (
        <>
        <div>´Aca se renderiza lo que viene en´</div>
                </>
    )
}