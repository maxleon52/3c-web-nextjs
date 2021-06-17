import { ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

import { Overlay, Container, Content } from "./styles";

interface ModalProps {
  children?: ReactNode;
  onCancel: () => void;
  title?: string;
}

function Modal({ children, onCancel, title }: ModalProps) {
  return (
    <Overlay>
      <Container>
        <header>
          <h1>{title}</h1>

          <button type="button" onClick={() => onCancel()}>
            <RiCloseLine />
          </button>
        </header>

        <Content>
          {children || (
            <div className="container-image">
              <img
                src="./assets/images/without-children.svg"
                alt="sem children"
              />
            </div>
          )}
        </Content>
      </Container>
    </Overlay>
  );
}

export default Modal;
