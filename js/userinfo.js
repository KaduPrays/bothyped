const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require("moment"); // puxando o NPM moment (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o local do moment, no nosso caso, pt-BR

// abrindo uma 'tabela' para os possiveis status do membro
const status = { 
    online: "✅ Disponivel", 
    idle: "☕ Ausente",       
    dnd: "❌ Ocupado", 
    offline: "🌙 Offline" 
};
exports.run = (client, message, args) => { 

    var permissions = []; // deixamos vazio, pois no final do codigo, com toda nossa informacao, vai adicionar sozinho
    const member = message.mentions.members.first()
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
    if(member.hasPermission("KICK_MEMBERS")){
        permissions.push("Expulsar membros");
    }
    
    if(member.hasPermission("BAN_MEMBERS")){
        permissions.push("Banir membros");
    }
    
    if(member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrador");
    }

    if(member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gerenciar mensagens");
    }
    
    if(member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gerenciar canais");
    }
  
    if(member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gerenciar apelidos");
    }

    if(member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gerenciar cargos");
    }

    if(member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gerenciar webhooks");
    }

    if(member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gerenciar emojis");
    }

    if(permissions.length == 0){ // caso esse membro n possua permissao alguma, vamos deixar a mensagem abaixo
        permissions.push("Nenhuma permissão detectada");
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
        .setColor('#0000')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Entrou aqui em',`\`${moment(member.joinedAt).format("LLL")}\``)
        .addField("Conta criada em",`\`${moment(member.user.createdAt).format("LLL")}\``, true)
        .addField("Permissões", `${permissions.join(', ')}`)
        .addField(`Cargos [${member.roles.cache.filter(r => r.id !== message.guild.id).map(a => `\`${a.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(', ') || "Esse membro não possui cargos."}`, true)

    message.channel.send({embed}).then(msg => { // um evento de reacao para fazermos adicionar outra embed (assim fica legal :3)
        msg.react("👉")
 
        // um filtro puxando as informacoes do membro
        let filtro = (reaction, usuario) => reaction.emoji.name === "👉" && usuario.id === message.author.id;
        // um coletor, puxando do filtro para finalizar
        let coletor = msg.createReactionCollector(filtro);

        coletor.on("collect", c => { // fazendo o evento
            c.remove(message.author.id); // retirando o clique do membro

            let emb = new Discord.MessageEmbed()

            .addField("Jogando", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nenhum jogo detectado"}`)
            .addField("Status",`${status[member.user.presence.status]}`)
            .addField("Tag", `#${member.user.discriminator}`)
            .setThumbnail(member.user.displayAvatarURL())
            .setColor('#0000')

            msg.edit(emb).then(m => { // mais um evento, que caso o membro clique, retornara a primeira embed
                m.react("👈")
                // utilizando o mesmo metodo e filtrando para coletar!
                let filter = (reaction, user) => reaction.emoji.name === "👈" && user.id === message.author.id;
                let coleter = m.createReactionCollector(filter);

                coleter.on("collect", e => {
                    e.remove(message.author.id);
                    m.edit(embed) // editando a embed pro final
             })
           })
        })
    })
}