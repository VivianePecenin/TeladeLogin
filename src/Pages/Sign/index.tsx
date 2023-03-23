import React from 'react'

import { useForm } from 'react-hook-form'

import { Botao, Cadastrese, Container, ContainerCheckBox, ContainerDireita, ContainerEsquerda,
     ContainerLogin, Esqueceuasenha, Label, Lembreme, Title } from './styled'

import {Input} from '../../componentes/InputsLogin'

import * as yup from 'yup'; 

import {yupResolver} from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
  username: yup.string().required("usuario é obrigatório"),
  password: yup.string().required('senha é obrigatoria'),

});

type SinginForm = {
  username: string;
  password: string;
}

export const Signin = () => {
    const {register, handleSubmit, formState} = useForm<SinginForm>({ 
      resolver: yupResolver(schema)
    });

    const errors = formState.errors;

    const handleSingin = (data: SinginForm) => {
       
      console.log(data)

  }

  const navigate = useNavigate();

    return(
        <Container>
         <ContainerEsquerda>

         </ContainerEsquerda>
    
          <ContainerDireita>  

            <ContainerLogin onSubmit={handleSubmit(handleSingin)}>
               
                <Title>LOGIN</Title>

                <Input 
                label = 'Username'
                placeholder='Username'
                error={errors.username}
                {...register('username')}
                />
                
                <Input 
                type={'password'}
                label = 'Password'
                placeholder='Password'
                error={errors.password}
                {...register("password")}
                />
                
                
                <ContainerCheckBox>

                 <Lembreme/>Lembre-me
                 <Esqueceuasenha>Esqueceu a senha?</Esqueceuasenha>

                </ContainerCheckBox>

                <Botao type='submit'>Entrar</Botao>

                <Label>Não possui uma conta?</Label>

                <Cadastrese onClick={() => navigate('/registro')}>cadastre-se</Cadastrese>
  
            </ContainerLogin>

          </ContainerDireita>

        </Container>
      )
}