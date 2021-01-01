const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(
          "Você não tem permissão!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Sem permissões.");
      }
    
      const user = message.mentions.members.first();

      if (!user) {
        return message.channel.send(
          "Mencione quem você deseja mutar"
        );
      }
   
      if(user.id === message.author.id) {
        return message.channel.send("Eu não vou silenciar você -_-");
      }

      let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Razão não especificada")
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
    
    
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Silenciado",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }

    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Usuário já está mutado.")
      }

    user.roles.add(muterole)
    
    user.send(`Você está mutado em **${message.guild.name}** Pela razão \`${reason}\``)
}