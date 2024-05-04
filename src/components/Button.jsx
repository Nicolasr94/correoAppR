/* En las props se carga :
 -Type => el tipo de button que se quiere
 -Triger => la funcion que va a disparar el button
 -TextBtn => el texto a mostrar
*/
function Button (props){
    return(
        <>
        <button type={props.type} onClick={() => props.trigger}>{props.textBtn}</button>
        </>
    )
}

export default Button;