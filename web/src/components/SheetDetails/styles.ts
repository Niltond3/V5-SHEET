import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SD;
  margin: 5px transparent;
  display: flex;
  flex-direction: column;

  padding: 20px min(40px, max(10vw, 10px));
  background-color: var(--secondary);

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
