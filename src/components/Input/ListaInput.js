import React from 'react'
import styled from '@emotion/styled'

import './StyleInput.scss'

import Input from './Input'

const DivFlex = styled.div `
    width:100%;
    display:flex;
    flex-direction:row;
    padding:10px 0;
`
const DivColum = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    padding:10px 0;
`

let icono = <i className="material-icons md-20">visibility</i> 

const ListaInput = () => {

    return ( 
        <>
            <div className="contenedor">
                <div className="capsu">
                    <div className="padre">
                        <div className="container-2">

                            <DivColum>
                                <Input 
                                    tituloSeccion='Este es el input normal, tiene 3 estados: normal, hover y active.'
                                    estilo='input1'
                                    lableStlye='label1'
                                />
                                <Input 
                                    tituloSeccion='Este es el input Error'
                                    estilo='input_error'
                                    lableStlye='label1'
                                />
                                <Input 
                                    tituloSeccion='Este es el input desactivado'
                                    estilo='input_disabled'
                                    lableStlye='label1'
                                    disabled='disabled'
                                />
                            </DivColum>

                            <DivFlex>
                                <Input 
                                    tituloSeccion='Input con texto pequeno abajo'
                                    estilo='input1'
                                    lableStlye='label1'
                                    small='Some interesting text'
                                />
                                <Input 
                                    tituloSeccion='Input errror, con pequeno texto abajo'
                                    estilo='input_error'
                                    lableStlye='label_error'
                                    small='Some interesting text'
                                />
                            </DivFlex>

                            <DivFlex>
                                <Input 
                                    tituloSeccion='Input con icono derecho'
                                    estilo='input1 mr'
                                    lableStlye='label1'
                                    small='Some interesting text'
                                    iconDerecha={icono}
                                    />
                                <Input 
                                    tituloSeccion='Input con icono izquierdo'
                                    estilo='input1'
                                    lableStlye='label1'
                                    small='Some interesting text'
                                    iconIzquierda={icono}
                                />
                            </DivFlex>
                            
                        </div>
                    

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ListaInput;