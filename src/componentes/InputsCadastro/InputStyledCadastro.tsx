import styled from "styled-components";

interface InputPropdCadastro{
    isError: boolean
}

export const InputCadastro = styled.input<InputPropdCadastro>`
    margin-bottom: 10px;
    border-radius: 4px;
    margin-top: 5px;
    background-color: #ccc8c8;
`

export const LabelCadastro = styled.label`
    margin-bottom: 4px;
`

export const ErrorCadastro = styled.span`
    color: red;

`