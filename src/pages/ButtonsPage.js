import React from 'react'

import ListaBotones from '../components/Boton/ListaBotones'
import Header from '../components/Header';

const ButtonPage = () => {
    return ( 
        <>
              <Header 
                name='Buttons'
              />
              <ListaBotones />
        </>
     );
}
 
export default ButtonPage;