import React from 'react'

import { v4 as uuidv4 } from 'uuid'

import Boton from './Boton'

import './StylesButtons.scss'

const ListaBotones = () => {

    let iconoCar = <i className="material-icons md-18">add_shopping_cart</i>

    let descFocus = '&:hover, &:focus'


    return ( 
        <>
            <div className="contenedor">
                <div className="capsu">
                    <div className="padre">

                        <div className="container-2">
                            <Boton 
                                boton='boton1'
                                text='Default'
                                desc='<Button />'
                            />
                            <Boton 
                                boton='boton1 focus1' 
                                text='Default'
                                desc={descFocus}
                            />
                        </div>

                        <div className="container-2">
                            <Boton 
                                boton='boton2' 
                                text='Default'
                                desc='<Button variant="outline " />'
                            />
                            <Boton 
                                boton='boton2 focus2' 
                                text='Default'
                                desc={descFocus}
                            />
                        </div>

                        <div className="container-2">
                            <Boton 
                                boton='botontext' 
                                text='Default'
                                desc='<Button variant="outline " />'
                            />
                            <Boton 
                                boton='botontext focustext' 
                                text='Default'
                                desc={descFocus}
                            />
                        </div>

                        <div className="container-2">
                            <Boton 
                                boton='disableShadow'
                                text='Default'
                                desc='<Button disabledShadow />'
                            />
                        </div>

                        <div className="container-2">
                            <Boton 
                                boton='botonDisabled'
                                text='Default'
                                desc='<Button disabeld />'
                            />
                            <Boton 
                                boton='botonDisabled focusDisabled'
                                text='Default'
                                desc='<Button variant="text" disabled />'
                            />
                        </div>

                        <div className="container-2">
                            <Boton 
                                boton='botonIco'
                                text='Default'
                                desc='<Button startIcon="local_grocery_stotre" />'
                                icono={iconoCar}
                            />
                            <Boton 
                                boton='botonIco izquierdo'
                                text='Default'
                                desc='<Button endIcon="local_grocery_stotre" />'
                                iconoIzquierdo={iconoCar}
                            />
                        </div>

                        <div className="container-2">
                            <Boton 
                                boton='botonsm'
                                text='Default'
                                desc='<Button size="sm" />'
                            />
                            <Boton 
                                boton='botonmd'
                                text='Default'
                                desc='<Button size="md" />'
                            />
                            <Boton 
                                boton='botonlg'
                                text='Default'
                                desc='<Button size="lg" />'
                            />
                        </div>

                        <div className="container-2 2">
                            <Boton 
                                capsu='capsu2'
                                boton='default'
                                text='Default'
                                desc='<Button color="default"/>'
                            />
                            <Boton 
                                capsu='capsu2'
                                boton='primary'
                                text='Default'
                                desc='<Button color="primary" />'
                            />
                            <Boton 
                                capsu='capsu2'
                                boton='default secundary'
                                text='Default'
                                desc='<Button color="secundary"/>'
                            />
                            <Boton 
                                capsu='capsu2'
                                boton='default danger'
                                text='Default'
                                desc='<Button color="danger"/>'
                            />
                        </div>

                        {/* ACTIVE COLOR */}

                        <div className="container-2 2">
                            <Boton 
                                capsu='capsu2'
                                boton='default-active'
                                text='Default'
                                desc='<Button color="default"/>'
                            />
                            <Boton 
                                capsu='capsu2'
                                boton='primary-active'
                                text='Default'
                                desc='<Button color="primary" />'
                            />
                            <Boton 
                                capsu='capsu2'
                                boton='secundary-active'
                                text='Default'
                                desc='<Button color="secundary"/>'
                            />
                            <Boton 
                                capsu='capsu2'
                                boton='danger-active'
                                text='Default'
                                desc='<Button color="danger"/>'
                            />
                        </div>

                        {/* <div className="container-2">
                            {mostrar1}
                        </div>
                        <div className="container-2 3">
                            {mostrar2}
                        </div>
                        <div className='container-2 4'>
                            {mostrar3}
                        </div>  */}
                    </div>
                </div>
                <footer>
                    <p> Robertrm0  @DevChallenges.io</p>
                </footer>
            </div>
        </>
     );
}
 
export default ListaBotones;