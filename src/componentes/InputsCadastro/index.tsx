import React, { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { LabelCadastro , InputCadastro as InputStyledCadastro, ErrorCadastro} from "./InputStyledCadastro";

interface InputPropsCadastro extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const InputCadastroBase: ForwardRefRenderFunction<HTMLInputElement, InputPropsCadastro> =  ({ label, name, error, ...rest }: InputPropsCadastro, ref) => {

  console.log(error);

  return (
    <>
      <LabelCadastro htmlFor={name}>{label}</LabelCadastro>
      <InputStyledCadastro
        id={name}
        name={name}
        isError={!!error}
        ref={ref}
        {...rest}
      />
      {!!error && <ErrorCadastro>{error.message}</ErrorCadastro>}
    </>
  )
}

export const InputCadastro = forwardRef(InputCadastroBase)