import dotenv from 'dotenv';
dotenv.config();
import { Client, Intents } from 'discord.js'
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('Ready!');
})

export default client;