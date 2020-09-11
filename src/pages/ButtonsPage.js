import React from 'react'

import ListaBotones from '../components/Boton/ListaBotones'
import Header from '../components/Header';

const ButtonPage = () => {
    return ( 
        <>
            <div className="todo">
              <Header 
                name='Buttons'
              />
              <ListaBotones />
            </div>
        </>
     );
}
 
export default ButtonPage;