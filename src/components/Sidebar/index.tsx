import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import { destroyCookie } from "nookies";
import { RiArrowLeftSLine, RiShutDownLine } from "react-icons/ri";

import { iconsMenu } from "../../constants/menu";

import * as S from "./styles";

function Sidebar() {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  async function signOut() {
    destroyCookie(undefined, "3cAuth.token");
    await Router.push("/");
  }

  return (
    <S.Container isToggle={isToggle}>
      <header>
        <h1>3C</h1>
        <h2>Controle Cartão de Crédito</h2>
      </header>

      <S.Navigation isToggle={isToggle}>
        {iconsMenu.map(({ icon: Icon, name, pathname }) => (
          <Link href={pathname}>
            <a>
              <Icon size={36} />
              <p>{name}</p>
            </a>
          </Link>
        ))}
      </S.Navigation>

      <footer>
        <button onClick={signOut}>
          <RiShutDownLine size={36} />
          <p>Sair</p>
        </button>
      </footer>
      <S.Toggle
        id="toggle"
        onClick={() => setIsToggle(!isToggle)}
        isToggle={isToggle}
      >
        <RiArrowLeftSLine size={20} />
      </S.Toggle>
    </S.Container>
  );
}

export default Sidebar;
