import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));

const loadCommands = async(commandsList = []) => {
    const commands = {};
    for (const command of commandsList) {
        const { name, path } = command;
        const { default: commandFile } = await
        import (resolve(join(__dirname, path || `${name}.js`)));
        commands[command.name] = commandFile;
    }
    return commands;
}

export default loadCommands;