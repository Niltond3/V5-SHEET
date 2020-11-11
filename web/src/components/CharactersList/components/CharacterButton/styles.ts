import styled from 'styled-components';
import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center; //vertical
  justify-content: center; //horizontal
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  margin: 0 8px 8px 0;

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
    transition: height 0.2s, width 0.2s, padding 0.2s, right 0.2s, border 0.2s;
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

    background-color: var(--red-primary);

    display: ${(props) => (!props.unfinish ? 'none' : 'inline')};

    content: '${(props) => (props.unfinish ? `${props.unfinish}` : '')}';
    transition: height 0.2s, width 0.2s, padding 0.2s, right 0.2s, border 0.2s;
  }
  &.active,
  &:hover {
    border-radius: 25%;
    background-color: ${(props) =>
      props.isOpen ? 'rgba(255,255,255,0.2)' : 'rgba(115,30,52,0.2)'};
  }
  &:hover::after {
    width: 1px;
    height: 48px;
    padding: 0;

    border: 0;
    border-radius: 0;
    bottom: 0;
    left: auto;
    right: -10px;

    content: '';
  }
  &:hover::before {
    width: 1px;
    height: 48px;
    padding: 0;

    border: none;
    border-radius: 0;
    bottom: 0;
    left: auto;
    right: -10px;

    content: '';
  }
  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  position: absolute;
  transition: opacity 0.9s;
  visibility: hidden;
  opacity: 0;

  left: 60px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 4px;

  max-height: 48px;
  width: calc(18vw - 80px);
  transition: opacity 0.5s;

  @media (max-width: 1200px) {
    opacity: 0.7;
  }
  @media (max-width: 1000px) {
    opacity: 0.5;
  }
  @media (max-width: 720px) {
    opacity: 0.3;
  }
  @media (max-width: 500px) {
    opacity: 0;
  }
`;

export const IconClan = styled.img`
  align-self: center;
  max-height: 40px;
  min-height: min(40px, 5vh);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48px;
  padding: 5px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    width: 12px;
    height: 12px;
  }
  p {
    padding: 0 4px;
    font-size: 12px;
    color: var(--quinternary);
    width: 100%;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LogoImage = styled.img`
  width: 40px;
`;
