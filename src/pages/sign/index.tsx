import { ReactNode } from 'react';

import { Container } from './styles';

interface SignProps {
  children: ReactNode;
}

function Sign({ children }: SignProps) {
  return (
    <Container>
      <h1>sign</h1>
      {children}
    </Container>
  );
};

export default Sign;
