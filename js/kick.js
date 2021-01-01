const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("você não tem **permissão** para isso!")
    let member = message.mentions.members.first()

    const baka = new Discord.MessageEmbed() 
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription("📟 ``/kick`` \n\n**Expulsar um jogador.**\n\n➜ **Jeito de usar**: /kick `@user <motivo>`")
    baka.addField(`📗 Exemplos`, "`/kick @KaduPrays`")
    baka.setFooter(`Hask Hosting  ✔`, avatar1)
    if(!member)  return message.reply(baka)

    if(!member.kickable)
      return message.reply("eu não posso expulsar esse jogador, ele tem um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Não foi informado."
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consigo expulsar esse jogador, devido: ${error}`))

      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.MessageEmbed()
          .setTitle("Punição.")
          .addField("Jogador expulso:", `${member.user.tag}`)
          .addField("Author:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("RANDOM").setTimestamp()

          message.channel.send(pEmbed)
          
}

module.exports.help = {
    name: "kick"
}
