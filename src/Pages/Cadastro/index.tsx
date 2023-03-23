import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputCadastro } from "../../componentes/InputsCadastro";
import { BotaoCadastro, ContainerCadastro,
     ContainerFundoCadastro, ContainerImageFundoCadastro, TituloCAdastro} from "./styledCadastro";
import * as yup from 'yup';

type RegistroFrom = {
    nomeCompleto: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const schemaCadastro = yup.object().shape({
    nomeCompleto: yup.string().required("Nome é Obrigatorio"),
    username: yup.string().required("Usúario é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref('password')],
     "A confirmação da senha não está correta").required("Cormação de senha é obrigtória"),
})

export const Registro = () => {
    const {register, formState, handleSubmit} = useForm<RegistroFrom>({
        resolver: yupResolver(schemaCadastro)
    })

    const errors = formState.errors;

    const handleRegistro = (data: RegistroFrom) => {
        console.log(data)
    }

    return(
        <ContainerImageFundoCadastro>

            <ContainerFundoCadastro>
                <TituloCAdastro>CADASTRE-SE</TituloCAdastro>
                    <ContainerCadastro onSubmit={handleSubmit(handleRegistro)}>
                        <InputCadastro 
                            label="Nome Completo"
                            placeholder="Digite seu nome"
                            error={errors.nomeCompleto }
                            {...register('nomeCompleto')}/>

                        <InputCadastro
                            label="Usuário"
                            placeholder="Digite seu nome de usuário"
                            error={errors.username}
                            {...register('username')}/>
                        
                        <InputCadastro
                            label="Senha"
                            type={'password'}
                            placeholder="Digite sua senha"
                            error={errors.password}
                            {...register('password')}/>
                        
                        <InputCadastro
                            label="Confirmar Senha"
                            type={'password'}
                            placeholder="Confirme sua senha"
                            error={errors.confirmPassword}
                            {...register('confirmPassword')}/>

                        <BotaoCadastro type={'submit'}>Cadastrar</BotaoCadastro>
                </ContainerCadastro>

          </ContainerFundoCadastro>

        </ContainerImageFundoCadastro>
    )
}
