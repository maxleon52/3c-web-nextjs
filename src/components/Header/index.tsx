import { useRouter } from "next/router";

import * as S from "./styles";

function Header() {
  const route = useRouter();
  const namePath = route.asPath.substr(1);

  return (
    <S.Container>
      <h1>{namePath}</h1>
    </S.Container>
  );
}

export default Header;
