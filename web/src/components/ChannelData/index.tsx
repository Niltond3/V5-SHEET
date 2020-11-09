import React, { useRef, useEffect } from 'react';
import { InputWrapper, ChannelMessage, Mention } from './components';
import { Container, Messages } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  const mention = (
    <>
      <Mention>@Nilton Ferreira Diniz Neto</Mention>
      ,só um protótipo
    </>
  );
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Nilton Ferreira Diniz Neto"
            date="sáb 31 de out 12:01"
            content="Só um protótipo"
          />
        ))}
        <ChannelMessage
          author="Nilton"
          date="sáb 31 de out 11:09"
          content={mention}
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper />
    </Container>
  );
};

export default ChannelData;
