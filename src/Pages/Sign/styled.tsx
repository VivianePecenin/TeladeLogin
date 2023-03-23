import styled from 'styled-components'
import Login from '../../assets/Login.jpg'

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color:#a14975;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
  `

export const ContainerEsquerda = styled.div`
width: 48vw;
height: 90vh;
background-image: url(${Login});
flex-direction: column;
justify-content: center ;
align-items: center;
display: flex;
border-radius: 6px;

`

export const ContainerDireita = styled.div`
width: 48vw;
height: 90vh;
display: flex;
background-color:#ffffff;
flex-direction: column;
justify-content: center ;
align-items: center;
border-radius: 6px;
`

export const ContainerCheckBox = styled.div`
    align-items: center;
    display: flex;
    gap: 3px;
    justify-content: space-between;
`

export const Esqueceuasenha = styled.a`
font-family: Archiabold;
color: #599ac0;
font-size: 1rem;
cursor: pointer;
display: flex;
justify-content: right;
margin-left: 185px;
&:hover{
    opacity: 0.7;
  }
`

export const Cadastrese = styled.a`
text-decoration: underline;
font-family: Archiabold;
color: #599ac0;
font-size: 1rem;
cursor: pointer;
display: flex;
justify-content: right;
margin-top: -35px;
margin-right:185px;

&:hover{
    opacity: 0.7;
  }
`

export const ContainerLogin = styled.form`
width: 30vw;
height: 50vh;
background-color:#ffffff;
justify-content: space-between;
display: flex;
flex-direction: column;
align-items: left;

`
export const Title = styled.h1 `
font-size: 3rem;
text-align: center;
justify-content: center;
display: flex;
flex-direction: column;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Lembreme = styled.input.attrs({type:"checkbox"})``
 
export const Botao = styled.button`
  width: 30vw;
  height: 4vh;
  color: white;
  border: 2px;
  font-size: 1em;
  background-color: #3382b1;
  border-radius: 6px;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
`