import { ReactNode } from 'react';

import { Container } from './styles';

interface LoadingProps {
  children?: ReactNode;
}

function Loading({ children }: LoadingProps) {
  return (
    <Container>
      <h1>Loading</h1>
      {children}
    </Container>
  );
};

export default Loading;
