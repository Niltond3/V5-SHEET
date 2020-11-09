import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  color: var(--white);
  background-color: var(--quaternary);

  &::placeholder {
    color: var(--quinternary);
  }
`;

interface ButtonProp {
  position: 'left' | 'Right';
}

export const Button = styled.button`
  border-radius: ${(props: ButtonProp) =>
    props.position === 'left' ? '10px 0 0 10px' : '0 10px 10px 0'};
  background-color: var(--quaternary);
  padding: ${(props: ButtonProp) =>
    props.position === 'left' ? '5px 5px 5px 10px' : '5px 10px 5px 5px'};
`;

export const Icon = styled.img`
  max-width: 24px;
  max-height: 24px;
  opacity: 50%;
  transition: opacity 0.3s;
  &:hover {
    opacity: 100%;
  }
`;
