import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  background-color: var(--primary);
  border-bottom: 2px solid var(--tertiary);
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
  z-index: 2;
  h1 {
    margin-left: 14px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
  }
  span {
    font-size: 15px;
    color: var(--quinternary);
  }
`;
export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background-color: var(--white);
  opacity: 0.1;
  margin: 0 13px;
`;
