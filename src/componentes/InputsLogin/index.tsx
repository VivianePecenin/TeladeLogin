import React, { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Input as InputStyles, Label, Error } from './InputStyled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const InputLogin: ForwardRefRenderFunction<HTMLInputElement, InputProps> =  ({ label, name, error, ...rest }: InputProps, ref) => {

  console.log(error);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputStyles
        id={name}
        name={name}
        isError={!!error}
        ref={ref}
        {...rest}
      />
      {!!error && <Error>{error.message}</Error>}
    </>
  )
}

export const Input = forwardRef(InputLogin)