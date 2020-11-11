import React from 'react';
import CharacterButton from './components/CharacterButton';
import { Container, Separator } from './styles';

const CharactersList: React.FC = () => {
  const character = {
    name: 'Juca',
    ambition: 'Um teste de tamanho',
    clan: 'Malkavian',
  };
  return (
    <Container>
      <CharacterButton isOpen unfinish={5} info={character} />
      <Separator />
      <CharacterButton startToSend info={character} />
      <CharacterButton unfinish={5} info={character} />
      <CharacterButton startToSend info={character} />
      <CharacterButton startToSend info={character} />
      <CharacterButton unfinish={3} info={character} />
      <CharacterButton unfinish={2} info={character} />
      <CharacterButton unfinish={5} info={character} />
      <CharacterButton sent info={character} />
      <CharacterButton sent info={character} />
      <CharacterButton unfinish={1} info={character} />
    </Container>
  );
};
export default CharactersList;
