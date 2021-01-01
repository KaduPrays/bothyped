const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Você não tem permissão!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Sem permissões");
      }
      const user = message.mentions.members.first();

        if (!user) {
        return message.channel.send(
            "Mencione um usuário para desmutar"
        );
        }

        let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
    
    
    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Este usuário não está mutado")
        }

        user.roles.remove(muterole)    
        
        user.send(`Você foi desmutado do **${message.guild.name}**`)
        }