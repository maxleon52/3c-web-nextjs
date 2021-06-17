import { ButtonHTMLAttributes, ReactNode } from "react";
import { RiLoader3Line } from "react-icons/ri";

import { Container, Loader } from "./styles";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

function ButtonText({ children, type, loading, ...rest }: ButtonTextProps) {
  return (
    <Container type={type} {...rest}>
      {loading ? (
        <Loader>
          {/* <AiOutlineSync size={25} /> */}
          <RiLoader3Line size={25} />
        </Loader>
      ) : (
        children
      )}
    </Container>
  );
}

export default ButtonText;
