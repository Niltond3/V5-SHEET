import React from 'react';
import { Container, Separator } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <h1>Chat name</h1>
      <Separator />
      <span>Chat status</span>
    </Container>
  );
};

export default ChannelInfo;
