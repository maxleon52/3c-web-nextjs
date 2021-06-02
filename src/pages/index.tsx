import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
import {
  Container,
  Header,
  Block1,
  Block2,
  BlockContent,
  BlockContentLeft,
  BlockContentRight,
  BlockContent2,
  BlockContentLeft2,
  BlockContentRight2,
  Block3,
  BlockContent3,
  BlockContentLeft3,
  BlockContentRight3,
  Footer,
} from "../styles/pages/home";

export default function Home() {
  return (
    <Container>
      <Header>
        <div>
          <h1>3C - Controle de Cartão de Crédito</h1>

          <Link href="/sign">
            <button>
              <a>Fazer login</a>
            </button>
          </Link>
        </div>
      </Header>

      <Block1>
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
            <Link href="/sign">
              <button>
                <a>Eu quero!</a>
              </button>
            </Link>
          </BlockContentRight>
        </BlockContent>
      </Block1>

      <Block2>
        <BlockContent2>
          <BlockContentLeft2>
            <strong>
              Chega de perder tempo organizando as compras do seu cartão todo
              mês.
            </strong>
          </BlockContentLeft2>

          <BlockContentRight2>
            <img
              src="/assets/images/card.svg"
              alt="homem sentado na cadeira com laptop"
            />
          </BlockContentRight2>
        </BlockContent2>
      </Block2>

      <Block3>
        <BlockContent3>
          <BlockContentLeft3>
            <img
              src="/assets/images/price-bro.svg"
              alt="homem sentado na cadeira com laptop"
            />
          </BlockContentLeft3>

          <BlockContentRight3>
            <strong>
              Chega de perder tempo organizando as compras do seu cartão todo
              mês.
            </strong>
            <Link href="/sign">
              <button>
                <a>Eu quero!</a>
              </button>
            </Link>
          </BlockContentRight3>
        </BlockContent3>
      </Block3>

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
    </Container>
  );
}
