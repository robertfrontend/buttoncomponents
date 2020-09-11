import React from 'react'

import './StyleInput.scss'
import { DivFlex, DivColum, Contenedor } from  '../Style/Style'

import Input from './Input'


let icono = <i className="material-icons md-20">visibility</i> 


const ListaInput = () => {

    return ( 
        <>
            <Contenedor className="contenedor">
                <div className="capsu">
                    <div className="padre">
                        <div className="container-2">

                            <DivColum>
                                <Input 
                                    type='text'
                                    tituloSeccion='Este es el input normal, tiene 3 estados: normal, hover y active.'
                                    estilo='input_normal normal'
                                    lableStlye='label_normal'
                                />
                                <Input 
                                    type='text'
                                    tituloSeccion={`Este es el input`}
                                    estilo='input_error error'
                                    lableStlye='label_normal'
                                />
                                <Input 
                                    type='text'
                                    tituloSeccion='Este es el input desactivado'
                                    estilo='input_disabled disabled'
                                    lableStlye='label_normal'
                                    disabled='disabled'
                                />
                            </DivColum>

                            <DivFlex>
                                <Input 
                                    type='text'
                                    tituloSeccion='Input con texto pequeno abajo'
                                    estilo='input_normal normal'
                                    lableStlye='label_normal'
                                    small='Some interesting text'
                                />
                                <Input 
                                    type='text'
                                    tituloSeccion='Input errror, con pequeno texto abajo'
                                    estilo='input_error error'
                                    lableStlye='label_error'
                                    small='Some interesting text'
                                />
                            </DivFlex>

                            <DivFlex>
                                <Input 
                                    type='number'
                                    tituloSeccion='Input con icono derecho'
                                    estilo='input_normal normal mr'
                                    lableStlye='label_normal'
                                    small='Some interesting text'
                                    iconDerecha={icono}
                                    />
                                <Input 
                                    type='number'
                                    tituloSeccion='Input con icono izquierdo'
                                    estilo='input_normal normal'
                                    lableStlye='label_normal'
                                    small='Some interesting text'
                                    iconIzquierda={icono}
                                />
                            </DivFlex>

                            <DivFlex>
                                <Input 
                                    type='number'
                                    tituloSeccion='Input con icono izquierdo'
                                    estilo='inputColorVerde'
                                    lableStlye='label_normal'
                                    small='Some interesting text'
                                    iconIzquierda={icono}
                                />
                            </DivFlex>
                        </div>
                    

                    </div>
                </div>
            </Contenedor>
        </>
     );
}
 
export default ListaInput;