import styled from 'styled-components';

export const Logo = styled.img``;

export const InformationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 48px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const InformationCollum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 25px 5px 0 5px;
  color: rgba(255, 255, 255, 0.5);
  :invalid {
    box-shadow: none;
  }

  :-moz-submit-invalid {
    box-shadow: none;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }
  :focus + label span,
  :valid + label span {
    transform: translateY(-150%);
    color: var(--white);
    font-size: max(12px, min(16px, 2vw));
    font-weight: bold;
  }
  :focus + label::after,
  :valid + label::after {
    transform: translateX(0%);
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  pointer-events: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: -1px;
    border-bottom: 2px solid var(--white);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`;
export const ContantName = styled.span`
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: center;
  font-size: max(10px, min(14px, 2vw));
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
`;

export const InformationInput = styled.input`
  width: 100%;
  background-color: transparent;
  text-align: center;
  border-bottom: 1px solid var(--white);
  margin: 10px 0;
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
    align-self: center;
  }
`;
