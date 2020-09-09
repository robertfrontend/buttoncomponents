import React from 'react';


const Boton = ( {boton, text, desc} ) => {
    return ( 
        <>
            <div className="capsula">
                <p> {desc} </p>
                <button className={boton} >
                    {text}
                </button>
            </div>
        </>
     );
}
 
export default Boton;