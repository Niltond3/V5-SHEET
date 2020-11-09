import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  padding: 4px min(16px, min(16px, 1vw));
  margin-right: 4px;

  background-color: transparent;
  transition: opacity 0.3s, background-color 0.3s, padding-left 0.3s;
  :hover {
    opacity: 0.8;
    background-color: var(--red-quaternary);
    padding-left: 18px;
  }
  &.mention {
    background-color: var(--red-quaternary);
    border-left: 2px solid var(--red-secondary);
    padding-left: 14px;
  }
  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  min-width: max(20px, min(46px, 5vw));
  min-height: max(20px, min(46px, 5vw));
  background-color: var(--secondary);
  border-radius: 50%;
  &.bot {
    background-color: var(--red-secondary);
  }
`;

export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  padding: 0 min(10px, max(2vw, 5px));
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  > strong {
    color: var(--white);
    padding: 0 min(10px, max(2vw, 5px)) 0 0;
    font-size: min(16px, max(2vw, 12px));
    @media (max-width: 800px) {
      max-width: 10vw;
    }
    max-width: 20vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span {
    margin-left: 6px;
    background-color: var(--red-primary);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: min(11px, max(2vw, 10px));
  }
  @media (max-width: 550px) {
    time {
      display: none;
    }
  }
  time {
    margin-left: max(6px, min(1vw, 6px));
    color: var(--quinternary);
    font-size: min(13px, max(2vw, 11px));
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: min(14px, max(2vw, 12px));
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--tertiary);
  transition: font-size 0.5s;
  &:hover {
    font-size: min(17px, max(2vw, 14px));
    cursor: pointer;
  }
`;
