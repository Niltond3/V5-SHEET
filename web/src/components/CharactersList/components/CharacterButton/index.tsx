import React from 'react';
import InfoWrapper, { CharacterInfo } from './InfoWrapper';
import Logo from '../../../../assets/logo-main.svg';

import { Button, LogoImage } from './styles';

export interface ButtonProps {
  isOpen?: boolean;
  startToSend?: boolean;
  sent?: boolean;
  unfinish?: number;
  info: CharacterInfo;
}

const CharacterButton: React.FC<ButtonProps> = ({
  isOpen,
  startToSend,
  sent,
  unfinish,
  info,
}: ButtonProps) => {
  const { name, ambition, clan } = info;
  return (
    <Button
      isOpen={isOpen}
      startToSend={startToSend}
      sent={sent}
      unfinish={unfinish}
      info={info}
    >
      <InfoWrapper ambition={ambition} name={name} clan={clan} />
      {isOpen && <LogoImage src={Logo} alt="CharacterLogo" />}
    </Button>
  );
};

export default CharacterButton;
