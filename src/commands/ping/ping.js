import Command from './../command.class.js';

class Ping extends Command {
    constructor() {
        super('ping', 'Ping the bot to know latency');
    }

    execute = async message => {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Latency is ${timeTaken}ms`);
    }
}

export default new Ping();