import React, { Children } from "react";
import Button from "./Button";

export default function NavBar({children}){
    return(
        <nav>
            <Button type="button" textBtn="Agregar paquete"></Button>
            {children}
        </nav>
    )
}