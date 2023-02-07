const { GatewayIntentBits, Client, Collection } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const config = require(`${process.cwd()}/config.json`);
const fs = require('fs');
require('colors');

client.on('ready', () => {
    console.log('¡Bot encendido!'.green)

})

const {  ActivityType  } = require("discord.js");
// LunaBot Presence,
  const activities = [
        { name: `👑| Creador: Poke_YT`, type: ActivityType.Watching },
        { name: `🎮| bl!help`, type: ActivityType.Playing }
    ];
    const status = [
        'online'
    ];
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
    }, 30000);

client.login(config.token)

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

client.commands = new Collection();

fs.readdirSync('./commands').forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
    for (let file of commands) {
        let command = require(`./commands/${dir}/${file}`);
        console.log(`Comandos - ${file} cargado`.yellow)
        client.commands.set(command.name, command);
    }
});