import React from 'react';
import CharacterButton from './components/CharacterButton';
import { Container, Separator } from './styles';

const CharactersList: React.FC = () => {
  return (
    <Container>
      <CharacterButton isOpen unfinish={5} />
      <Separator />
      <CharacterButton startToSend />
      <CharacterButton unfinish={5} />
      <CharacterButton startToSend />
      <CharacterButton startToSend />
      <CharacterButton unfinish={3} />
      <CharacterButton unfinish={2} />
      <CharacterButton unfinish={5} />
      <CharacterButton sent />
      <CharacterButton sent />
      <CharacterButton unfinish={1} />
    </Container>
  );
};
export default CharactersList;
