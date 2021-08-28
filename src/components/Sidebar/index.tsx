import { useState, useContext } from "react";
import Router from "next/router";
import { destroyCookie } from "nookies";
import { RiArrowLeftSLine, RiShutDownLine } from "react-icons/ri";

import { AuthContext } from "../../context/AuthContext";

import { Container, Toggle } from "./styles";
import { useEffect } from "react";

function Sidebar() {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  const { isAuthenticated } = useContext(AuthContext);

  async function signOut() {
    destroyCookie(undefined, "3cAuth.token");
    await Router.push("/");
    //  Router.reload();
  }

  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Container isToggle={isToggle}>
      <header>
        <h1>3C</h1>
        <h2>Controle Cartão de Crédito</h2>
      </header>

      <section />

      <footer>
        <button onClick={signOut}>
          <RiShutDownLine size={25} />
        </button>
      </footer>
      <Toggle
        id="toggle"
        onClick={() => setIsToggle(!isToggle)}
        isToggle={isToggle}
      >
        <RiArrowLeftSLine size={20} />
      </Toggle>
    </Container>
  );
}

export default Sidebar;
