// src/styles/HomeStyles.ts
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;

export const H2 = styled.h2`
  margin-bottom: 1rem;
`;

// responsivo, até 5 cards por linha, cada um no mínimo 220px
export const DivCard = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  
  /* por padrão, 2 colunas em mobile */
  grid-template-columns: repeat(1, 1fr);

  /* tablets e acima: 3 colunas */
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* desktop médio: 4 colunas */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* widescreen: até 5 colunas */
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  max-width: 1600px;
`;
