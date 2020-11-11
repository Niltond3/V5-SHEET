import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: var(--tertiary);
  padding: 11px 0 0 11px;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;
