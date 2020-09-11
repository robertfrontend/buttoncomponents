import React from 'react';


const Boton = ( {boton, text, desc, icono, iconoIzquierdo, capsu} ) => {

    if(iconoIzquierdo === '') return null

    let clasepadre = `capsula ${capsu}`

    return ( 
        <>
            <div className={clasepadre}>
                <p> {desc} </p>
                <button className={boton} >
                    <span> {icono} </span>
                    {text}
                    <span> {iconoIzquierdo} </span>
                </button>
            </div>
        </>
     );
}
 
export default Boton;