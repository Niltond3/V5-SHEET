import Discord from 'discord.js';
import Create from './commands/create';
import { token, prefix } from './discordconfig.json';

const client = new Discord.Client();

client.once('ready', () => {
  console.log(`💫Bot logado com o boot, ${client.user?.tag}`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();

  if (command === 'create') {
    Create(message);
  }
});

client.login(token);
