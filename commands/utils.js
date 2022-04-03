const loadCommands = async(commandsList = []) => {
    const commands = {};
    for (const command of commandsList) {
        const { path } = command;
        const { default: commandFile } = await
        import (path);
        commands[command.name] = commandFile;
    }
    return commands;
}

export default loadCommands;