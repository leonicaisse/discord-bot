import { resolve } from 'path';

import client from './config/discord.js';
import loadCommands from './commands/utils.js';

const BOT_PREFIX = process.env.BOT_PREFIX;

const commandsList = [
    { name: 'ping', path: resolve('./commands/ping/ping.js') },
];

const commands = await loadCommands(commandsList);

client.on('messageCreate', async message => {
    const { content, author, channel } = message;
    if (author.bot || !content.startsWith(BOT_PREFIX)) return;

    const commandBody = content.slice(BOT_PREFIX.length).trim();
    const args = commandBody.split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands[commandName];
    if (command) {
        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error trying to execute that command!');
        }
    } else {
        message.reply(`Command "${commandName}" not found!`);
    }
});