import React, { useRef, useState, useContext } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { RiUser3Line, RiLockLine } from "react-icons/ri";

import { AuthContext } from "../context/AuthContext";


import Modal from "../components/Modal";
import { Input } from "../components/Input";
import ButtonText from "../components/ButtonText";

import {
  Container,
  Content,
  Header,
  BlockRight,
  BlockLeft,
  BlockContent,
  BlockContentLeft,
  BlockContentRight,
  Footer,
  Separator,
  ContentModal,
} from "../styles/pages/home";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // setValue, // serve para colocar um valor no INPUT, usado no UPDATE
    // getValues, // Buscar valores nos INPUT
    watch, // Monitorar qualquer alteração dentro do INPUT, como se fosse "onChange"
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    if (isOpen === false) {
      document.body.style.overflow = "hidden";
    }
    setIsOpen(!isOpen);
  }
  function onCancel() {
    if (isOpen === true) {
      document.body.style.overflow = "unset";
    }
    setIsOpen(!isOpen);
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (
    { email, password },
    e,
  ) => {
    e.preventDefault();

    // Simula delay
    // await new Promise((resolver) => setTimeout(resolver, 750));

    await signIn({ email, password });
  };

  return (
    <Container>
      <Header>
        <div>
          <h1>3C - Controle de Cartão de Crédito</h1>

          <button type="button" onClick={handleOpenModal}>
            Fazer login
          </button>
        </div>
      </Header>

      <Content>
        <BlockRight>
          <BlockContent>
            <BlockContentLeft>
              <img
                src="/assets/images/revenue-bro.svg"
                alt="homem sentado na cadeira com laptop"
              />
            </BlockContentLeft>

            <BlockContentRight>
              <strong>
                Organize as compras do seu cartão de crédito de forma rápida !
              </strong>
              <button onClick={handleOpenModal}>Eu quero!</button>
            </BlockContentRight>
            <img
              id="img-buble1"
              src="/assets/images/buble-right.svg"
              alt="forma"
            />
          </BlockContent>
        </BlockRight>

        <BlockLeft>
          <BlockContent>
            <BlockContentLeft>
              <strong>
                Chega de perder tempo organizando as compras do seu cartão todo
                mês.
              </strong>
            </BlockContentLeft>

            <BlockContentRight>
              <img
                src="/assets/images/card.svg"
                alt="homem sentado na cadeira com laptop"
              />
            </BlockContentRight>
            <img
              id="img-buble2"
              src="/assets/images/buble-left.svg"
              alt="forma"
            />
          </BlockContent>
        </BlockLeft>

        <BlockRight>
          <BlockContent>
            <BlockContentLeft>
              <img
                src="/assets/images/price-bro.svg"
                alt="homem sentado na cadeira com laptop"
              />
            </BlockContentLeft>

            <BlockContentRight>
              <strong>
                Cadastre a compra, o devedor e pronto! Rápido e fácil
              </strong>
              <button onClick={handleOpenModal}>Eu quero!</button>
            </BlockContentRight>
            <img
              id="img-buble3"
              src="/assets/images/buble-right.svg"
              alt="forma"
            />
          </BlockContent>
        </BlockRight>
      </Content>

      <Footer>
        <section>
          <Link href="https://github.com/maxleon52">
            <a target="_blank">
              <GrGithub />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/maxwell-alves-de-sousa-835036163/">
            <a target="_blank">
              <GrLinkedinOption />
            </a>
          </Link>
        </section>
      </Footer>

      {isOpen === true && (
        <Modal onCancel={onCancel}>
          <ContentModal>
            <div>
              <h1>3C</h1>
              <p>Controle Cartão de Crédito</p>
            </div>

            <form onSubmit={handleSubmit(handleSignIn)}>
              <Input
                ref={inputRef}
                name="email"
                type="email"
                placeholder="E-mail"
                isFilledValue={!!watch("email")}
                error={errors.email?.message}
                icon={RiUser3Line}
                {...register("email", { required: true })}
              />
              <Input
                ref={inputRef}
                name="password"
                type="password"
                placeholder="Senha"
                isFilledValue={!!watch("password")}
                error={errors.password?.message}
                icon={RiLockLine}
                {...register("password", { required: true })}
              />
              <ButtonText type="submit" loading={isSubmitting}>
                Entrar
              </ButtonText>
            </form>

            <Separator>
              <span>ou</span>
            </Separator>

            <Link href="/dashboard">
              <a>Criar conta</a>
            </Link>
          </ContentModal>
        </Modal>
      )}
    </Container>
  );
}
