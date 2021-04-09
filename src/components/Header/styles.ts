import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;  // 0 = top; 1rem = left and right; 10rem = bottom;
    display: flex; // Display flexivel. Padrão horizontal.
    align-items: center;
    justify-content: space-between; // Espaçamento entre os itens.

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;    // Toda vez que o "filter" for alterado, sia transição será de 0.2s.

        &:hover {
            filter: brightness(0.9);
        }
    }
`;



/*
import styled from 'styled-components';

  Criação de um componente com estilização.
  Componentes sempre com a primeira letra maiúscula.
  Após o h1 são duas crases ``.

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`
*/