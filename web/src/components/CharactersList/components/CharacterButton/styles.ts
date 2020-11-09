import styled from 'styled-components';
import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center; //vertical
  justify-content: center; //horizontal
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isOpen ? 'var(--black)' : 'var(--primary)'};

  border-radius: 50%;
  position: relative;
  transition: border-radius 0.4s, background-color 0.4s;
  &::after {
    position: absolute;
    width: 10px;
    height: 10px;

    border-radius: 50%;
    bottom: calc(50% - 5px);
    left: -17px;
    background-color: ${(props) => {
      const { startToSend, sent } = props;
      if (startToSend) return 'var(--ready)';
      if (sent) return 'var(--sent)';
      return 'transparent';
    }};

    content: '';
  }
  &::before {
    position: absolute;
    width: auto;
    height: 16px;

    padding: 0 4px;
    bottom: 0px;
    right: -4px;

    border-radius: 12px;
    border: ${(props) =>
      props.unfinish ? '4px solid var(--tertiary)' : 'transparent'};

    text-align: right;
    font-size: 11px;
    font-weight: bold;
    color: var(--white);

    background-color: ${(props) =>
      props.unfinish ? 'var(--red-primary)' : 'transparent'};

    content: '${(props) => (props.unfinish ? `${props.unfinish}` : '')}';
  }
  &.active,
  &:hover {
    border-radius: 25%;
    background-color: ${(props) =>
      props.isOpen ? 'rgba(255,255,255,0.2)' : 'rgba(115,30,52,0.2)'};
  }
`;

export const LogoImage = styled.img`
  width: 40px;
`;
