const { GatewayIntentBits, Client, Collection } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const config = require(`${process.cwd()}/config.json`);/////CARPETA CONFIG DONDE VA ANDAR TU PREFIX,TOKEN,COLOR,MONGODB
const fs = require('fs');
require('colors');
/////////READY ENVIA UN MENSAJE POR LA CONSOLA PARA VER SI TU BOT ESTA ONLINE/////
client.on('ready', () => {
    console.log('¡Bot encendido!'.green)

})
//////EL BOT SE VA ALOGEAR CON EL TOKEN DEL BOT QUE VA ANDAR EN CONFIG.JSON/////
client.login(config.token)
///////PREFIX EN CONDIG.JSON ES EN DONDE ESTA TU PREFIX//////
client.on('messageCreate', async (message) => {
    if(message.author.bot || !message.guild || message.channel.type === 'dm') return;

    var prefix = config.prefix

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    client.color = config.color;

    let cmd = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)));
    if(cmd) {
        cmd.run(client, message, args, prefix);
    }
})
////////CARPETA COMANDOS DONDE PODRAS CREAR TUS COMANDOS/////
client.commands = new Collection();

fs.readdirSync('./commands').forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
    for (let file of commands) {
        let command = require(`./commands/${dir}/${file}`);
        console.log(`Comandos - ${file} cargado`.yellow)//////ENVIA UN MENSAJE ALA CONSOLA CUANTOS COMANDOS CARGARON
        client.commands.set(command.name, command);
    }
});
