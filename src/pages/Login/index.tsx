import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Title, Wrapper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail Inválido")
      .required("Esse campo é obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Esse campo é obrigatório"),
  })
  .required();

export default function Login() {
  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  function handleSubmit(e: any) {
    console.log(e)
      if(isValid){
        alert('formulário enviado')
      } else{
        e.preventDefault()
      }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="Email"
            errorMessage={errors?.email?.message}
            control={control}
          />
          <Input
            name="password"
            placeholder="Senha"
            errorMessage={errors?.password?.message}
            type="password"
            control={control}
          />
          <Button title="Entrar" type="submit" />
        </form>
      </Wrapper>
    </Container>
  );
}
