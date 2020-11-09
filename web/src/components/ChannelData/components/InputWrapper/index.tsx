import React from 'react';
import IconMenu from '../../../../assets/icon-menu-white.svg';
import IconSend from '../../../../assets/icon-send-white.svg';
import { Container, Button, Input, Icon } from './styles';

interface ButtonProps {
  image: string;
  position: 'left' | 'Right';
}

const StyledButton: React.FC<ButtonProps> = ({
  image,
  position,
}: ButtonProps) => {
  return (
    <Button position={position}>
      <Icon src={image} />
    </Button>
  );
};

const InputWrapper: React.FC = () => {
  return (
    <Container>
      <StyledButton image={IconMenu} position="left" />
      <Input placeholder="Digite aqui" />
      <StyledButton image={IconSend} position="Right" />
    </Container>
  );
};

export default InputWrapper;
