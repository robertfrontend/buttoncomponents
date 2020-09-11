import React from 'react'
import styled from '@emotion/styled'


const InputDiv = styled.div `
    width: 300px;
    /* border:1px solid black; */
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding-top:10px;
    margin: 0 5px;
`
const ContenedorTitulo = styled.div `
    width:80%;
    padding:10px 0;
`
const TituloSecion = styled.p `
    font-weight: 500;
    color:#333333;
    .danger {
        color:#D32F2F;
    }
`;

const PadreComponent = styled.div `
    width:100%;
    padding:10px 0;
`


const SpanInput = styled.div `
    /* border:1px solid black; */
    /* background:red; */
    position:relative;
`

const SpanIconDerecha = styled.span `
    position:absolute;
    top: 16px;
    bottom: auto;
    left:10px;
    i{
        width:100%;
        height: 100%;
    }

`
const SpanIconIzquierda = styled.span `
    position:absolute;
    top: 16px;
    bottom: auto;
    right:10px;
    i{
        width:100%;
        height: 100%;
        color:#222f3e;
    }

`

const Input = ({
    type, tituloSeccion,estilo, lableStlye, disabled, small, iconDerecha, iconIzquierda
}) => {

    return ( 
        <>
        <PadreComponent>
            <ContenedorTitulo >
                <TituloSecion>
                    {tituloSeccion}
                </TituloSecion>
            </ContenedorTitulo>
            <InputDiv>
                <label className={lableStlye} >
                    Label
                    <SpanInput>
                        <SpanIconIzquierda> {iconIzquierda} </SpanIconIzquierda>
                        <input 
                            type={type}
                            placeholder='Placeholder'
                            className={estilo}
                            disabled={disabled}
                        />
                        <SpanIconDerecha> {iconDerecha} </SpanIconDerecha>
                    </SpanInput>

                    <small> {small} </small>
                </label>
            </InputDiv>
        </PadreComponent>

        </>
     );
}
 
export default Input;