const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'ip',
    alias: ['mcip', 'serverIP', 'server'],

run (client, message, args, prefix) {
        const embed = new EmbedBuilder()
            .setTitle('🎮| Server de Minecraft')
            .setDescription(`IP: `)
            .setColor(client.color)
        message.channel.send({embeds: [embed]})
    }
}