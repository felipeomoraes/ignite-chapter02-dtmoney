import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}


/*
import styled from 'styled-components';

  Criação de um componente com estilização.
  Componentes sempre com a primeira letra maiúscula.
  Após o h1 são duas crases ``.

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
      <Title>
        Hello World
      </Title>
    </div>
  );
}
*/