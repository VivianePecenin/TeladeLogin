import styled from 'styled-components'
import CAdastro from '../../assets/CAdastro.jpg';

export const ContainerImageFundoCadastro = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${CAdastro});
    background-size: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ContainerFundoCadastro = styled.div`
    width: 50vw;
    height: 70vh;
    display: flex;
    background-color: white;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
`
export const ContainerCadastro = styled.form`
    width: 30vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
`


export const TituloCAdastro = styled.h1`
    font-size: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

`

export const BotaoCadastro = styled.button`
    height: 20px;
    margin-top: 15px;
    background-color: #569292;
    border-radius: 6px;
    border: 2px;
    color: white;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`

