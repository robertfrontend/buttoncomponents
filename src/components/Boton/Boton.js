import React from 'react';


const Boton = ( {boton, text, desc, icono, iconoIzquierdo} ) => {

    if(iconoIzquierdo === '') return null


    return ( 
        <>
            <div className='capsula'>
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