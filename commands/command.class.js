export default class Command {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    execute = async message => {
        message.reply('Default behaviour for command!');
    }
}