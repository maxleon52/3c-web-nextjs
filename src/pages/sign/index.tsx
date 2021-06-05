import Link from "next/link";

import { Container, Content, Separator } from "./styles";

function Sign() {
  return (
    <Container>
      <Content>
        <header>
          <h1>3C</h1>
          <p>Controle Cartão de Crédito</p>
        </header>

        <form>
          <input type="email" />
          <input type="password" />
          <button type="button">Entrar</button>
        </form>

        <Separator>
          <span>ou</span>
        </Separator>

        <Link href="/signup">
          <a>Criar conta</a>
        </Link>
      </Content>
    </Container>
  );
}

export default Sign;
