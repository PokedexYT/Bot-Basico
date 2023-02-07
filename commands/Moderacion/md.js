const Discord = require('discord.js');
const { MessageActionRow, MessageSlectMenu, MessageEmbed, MessageButton} = require('discord.js')


module.exports = {
    name: "md" ,
    alias: "Mensajedirecto",

    run (client, message, args, prefix) {

        if (!message.member.permissions.has('Administrator')) return message.channel.send({embeds: [new EmbedBuilder()
            .setTitle('❌ ¡No tienes suficientes permisos para usar este comando!')
            .setDescription('Necesitas los siguientes permisos: \`Administrator\`')
            .setColor(client.color)
        ]});
        const userID = args[0]
        if(!userID) return message.channel.send("pon la ID , o menciona a alguien")
        const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
        const mensaje = args.slice(1).join(" ")
        if(!mensaje) return message.replay("pon en texto")
        if(!user) return message.replay("No se a encontrado nada vuelve a intentarlo")

user.send(mensaje)
message.channel.send("Mensaje correctamente enviado")

    }
}