import React from 'react';
import Logo from '../../../../assets/logo-main.svg';
import { Button, LogoImage } from './styles';

export interface Props {
  isOpen?: boolean;
  startToSend?: boolean;
  sent?: boolean;
  unfinish?: number;
}

const CharacterButton: React.FC<Props> = (props: Props) => {
  const { isOpen, startToSend, sent, unfinish } = props;
  return (
    <Button
      isOpen={isOpen}
      startToSend={startToSend}
      sent={sent}
      unfinish={unfinish}
    >
      {isOpen && <LogoImage src={Logo} alt="CharacterLogo" />}
    </Button>
  );
};

export default CharacterButton;
