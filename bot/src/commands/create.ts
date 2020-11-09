import { Message } from 'discord.js';
import axios from 'axios';

const Create = async ({ author, channel }: Message): Promise<void> => {
  const { username, id } = author;
  try {
    const response = await axios.post('http://localhost:3333/', {
      id,
      name: username,
    });
    const { statusText, data } = response;
    const { name } = data;
    channel.send(`Status: ${statusText}\n Usuário:\n
    id: ${data.id}\n
    name: ${name}\n`);
  } catch (error) {
    console.log(error);
    channel.send(`Que pena, não deu certo ${error.message}`);
  }
};

export default Create;
