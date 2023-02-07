const Discord = require('discord.js');

module.exports = {
  name: "prueba",
  alias: [],

  async run (client, message, args, prefix) {

    const cmp = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.SelectMenuBuilder()
          .setCustomId("Menu")
          .addOptions([
              {
              label: "Pagina Principal",
              description: "Selecciona el menu de Principal para ver la informacion",
              value: "Principal",
              emoji: "🏡",
            },
            {
              label: "Configuración",
              description: "Selecciona el menu de configuracion para ver los comando",
              value: "Comandos Config",
              emoji: "🛠",
            },
            {
              label: "Moderación",
              description: "Selecciona el menu de Moderación para ver los comando",
              value: "Comandos mod",
              emoji: "👮‍♂️",
            },
            {
              label: "Diversión",
              description: "Selecciona el menu de Diversión para ver los comando",
              value: "Comandos Div.",
              emoji: "🎮",
            },
            {
              label: "Utilidades",
              description: "Selecciona el menu de Utilidades para ver los comando",
              value: "Comandos Utilidades.",
              emoji: "🍃",
            },
            {
                label: "NetBuilDex",
                description: "Selecciona el menu de NetBuilDex para ver deque trata el server",
                value: "NetBuilDex",
                emoji: "👷‍♂️",
            }
          ])
      )
      
      const embed = new Discord.EmbedBuilder()
      .setTitle("❓| Menu de Ayuda del server  ")
      .setColor(client.color)
      .setDescription(`Hola para ver una lista de comandos separada por la categoría de estos, puedes seleccionar una categoria en el menu de abajo.\nPara obtener ayuda con cada comando específico.\n\n\`\`prefix: ${prefix}\`\`\n\n**NetBuilDex** |🛠\n  **-** Mi Configurador: Poke_YT#6481\n  **-** Yo fui Creado para moderar el server\n   NeBuilDex y ayudar alos usuarios para ver de que trata el servidor \n  **-** Owners: Netpas#6518 | Poke_YT#6481\n  **-** Si necias ayuda con algo o tienes dudas usa el comando ${prefix}help para ver de que trata el servidor`)
      .setFooter({ text: `Solicitado por: ${message.author.tag}` })
      .setThumbnail("https://cdn.discordapp.com/attachments/942560954560970832/1047289050454822932/feliz_-_copia.png")

    const embed2 = new Discord.EmbedBuilder()
      .setTitle("Configuración")
      .setDescription(`🛑 Comandos de Configuracion en Creacion...`)
      .setColor(client.color)
      .setTimestamp()
      .setFooter({ text: `Solicitado por: ${message.author.tag}` })
      .setThumbnail("https://cdn.discordapp.com/attachments/942560954560970832/1047289050454822932/feliz_-_copia.png")

    const embed3 = new Discord.EmbedBuilder()
      .setTitle("Moderación")
      .setColor(client.color)
      .setDescription(`🛑 Comandos de Moderacion en Creacion...`)
      .setTimestamp()
      .setFooter({ text: `Solicitado por: ${message.author.tag}` }) 
      .setThumbnail("https://cdn.discordapp.com/attachments/942560954560970832/1047289050454822932/feliz_-_copia.png")

    const embed4 = new Discord.EmbedBuilder()
      .setTitle("Diversión")
      .setColor(client.color)
      .setDescription(`🛑 Comandos de Divencion en Creacion...`)
      .setTimestamp() 
      .setFooter({ text: `Solicitado por: ${message.author.tag}` }) 
      .setThumbnail("https://cdn.discordapp.com/attachments/942560954560970832/1047289050454822932/feliz_-_copia.png")

    const embed5 = new Discord.EmbedBuilder()
      .setTitle("premium")
      .setColor(client.color)
      .setDescription("<:emoji_32:1048341663703126138> Proximamente Sistema Premium")
      .setTimestamp() 
      .setFooter({ text: `> Solicitado por: ${message.author.tag}` }) 
      .setThumbnail("https://media.discordapp.net/attachments/953448585679241267/1033197224336838756/IMG_1666390984349.png?width=486&height=486")

    const embed6 = new Discord.EmbedBuilder()
      .setTitle("Utilidades")
      .setColor(client.color)
      .setDescription(`<a:emoji_21:1048337463594188801>\`${prefix}embed\`\n<a:emoji_21:1048337463594188801>\`${prefix}ping\`\n<a:emoji_21:1048337463594188801>\`${prefix}help\`\n<a:emoji_21:1048337463594188801>\`${prefix}ip\``)
      .setTimestamp()
      .setFooter({ text: `Solicitado por: ${message.author.tag}` })
      .setThumbnail("https://cdn.discordapp.com/attachments/942560954560970832/1047289050454822932/feliz_-_copia.png")

      const embed7 = new Discord.EmbedBuilder()
      .setTitle("NetBuilDex")
      .setColor(client.color)
      .setDescription(`🛑 Aun se sigue creando`)
      .setTimestamp() 
      .setFooter({ text: `> Solicitado por: ${message.author.tag}` }) 
      .setThumbnail("https://cdn.discordapp.com/attachments/942560954560970832/1047289050454822932/feliz_-_copia.png")


    let mensaje = await message.channel.send({ embeds: [embed], components: [cmp] })


    const ifilter = i => i.user.id === message.author.id;

    const collector = mensaje.createMessageComponentCollector({ filter: ifilter })
    
    collector.on("collect", async i => {
      if (i.values[0] === "Principal") {
        await i.deferUpdate()
        i.editReply({ content: "Seleccion de la pagina principal", embeds: [embed], components: [cmp] })
      }
    })

    collector.on("collect", async i => {
      if (i.values[0] === "Comandos Config") {
        await i.deferUpdate()
        i.editReply({ content: "Seleccion de la pagina Configuracion", embeds: [embed2], components: [cmp] })
      }
    })

    collector.on("collect", async i => {
      if (i.values[0] === "Comandos mod") {
        await i.deferUpdate()
        i.editReply({ content: "Seleccion de la pagina Moderacion", embeds: [embed3], components: [cmp] })
      }
    })

    collector.on("collect", async i => {
      if (i.values[0] === "Comandos Div.") {
        await i.deferUpdate()
        i.editReply({ content: "Seleccion de la pagina Divercion", embeds: [embed4], components: [cmp] })
      }   
    })
    
    collector.on("collect", async i => {
      if (i.values[0] === "Comandos Utilidades.") {
        await i.deferUpdate()
        i.editReply({ content: "Seleccion de la pagina Utilidades", embeds: [embed6], components: [cmp] })
      }
    })
    
    collector.on("collect", async i => {
        if (i.values[0] === "NetBuilDex") {
          await i.deferUpdate()
          i.editReply({ content: "Seleccion de la pagina NetBuilDex", embeds: [embed7], components: [cmp] })
        }
      }) 
  }
}