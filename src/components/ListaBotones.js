import React from 'react'

import { v4 as uuidv4 } from 'uuid'

import Boton from './Boton'

import './StylesButtons.scss'

const ListaBotones = () => {

    const group1 = [
        {clase: 'boton1', text: 'Default', id: uuidv4(), desc: '<Button />'},
        {clase: 'boton1 focus1', text: 'Default', id: uuidv4(), desc: '&:hover, &:focus'},

        {clase: 'boton2', text: 'Default', id: uuidv4(), desc: '<Button variant="outline " />'},
        {clase: 'boton2 focus2', text: 'Default', id: uuidv4(), desc: '&:hover, &:focus'},

        {clase: 'botontext', text: 'Default', id: uuidv4(), desc: '<Button variant="text " />'},
        {clase: 'botontext focustext', text: 'Default', id: uuidv4(), desc: '&:hover, &:focus'},

        {clase: 'disableShadow', text: 'Default', id: uuidv4(), desc: '<Button disableShadow />'},
        
    ]

    let mostrar1
    mostrar1 = group1.map(res => (
        <Boton
            key={res.id}
            boton={res.clase}
            text={res.text}
            desc={res.desc}
        />
    ))


    return ( 
        <>
            <div className="botones">
                <div className="capsu">
                    <div className="padre">
                        <div className="container-2">
                            {mostrar1}
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ListaBotones;