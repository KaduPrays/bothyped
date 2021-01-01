const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./js/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`); 
  var tabela = [
    {name: 'Meu prefixo: !help', type: 'LISTENING'},
    {name: 'HypedHosting | Seus direitos reservados', type: 'PLAYING'}
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    client.user.setActivity(altstatus)
  }
  setStatus();
  setInterval(() => setStatus(), 50000)
});

const cdseconds = 5;

client.on("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    const message = reaction.message;

    if(
        ["🎟️", "🔒"].includes(reaction.emoji.name)
    ) {
        switch(reaction.emoji.name) {

            case "🎟️":

            var TicketList = [
                "ticket-001",
                "ticket-002",
                "ticket-003",
                "ticket-004",
                "ticket-005",
                "ticket-006",
                "ticket-007",
                "ticket-008",
                "ticket-009",
                "ticket-010",
                "ticket-011",
                "ticket-012",
                "ticket-015",
                "ticket-016",
                "ticket-017",
                "ticket-018",
                "ticket-019",
                "ticket-020"
            ]

            let result = Math.floor((Math.random() * TicketList.length))

            let categoryID = "793521194330357832";

            var bool = false;

            if(bool == true) return;
           
            message.guild.channels.create(TicketList[result]).then(chan => {
               
              chan.setParent(categoryID);

                  chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    })
  
                    chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    })
              
                    chan.updateOverwrite(message.guild.roles.cache.find(s => s.name === "Dono"), {
                              VIEW_CHANNEL: true,
                              SEND_MESSAGES: true
                          })
  
                    chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    })

                  let embedTicketOpen = new Discord.MessageEmbed()
                  .setTitle("Ticket Suporte,")
                  .setColor("#cd3")
                  .setDescription("Digite sua pergunta / mensagem abaixo")

                  chan.send(embedTicketOpen).then( async msg => {
                      await msg.react("🔒")
                  })
              })
          

            break;

            case "🔒":

            message.channel.send("**A sala fecha em 10 segundos ...**")

            setTimeout(() => {
                message.channel.delete()
            }, cdseconds * 1500)

            let embedTicketClose = new Discord.MessageEmbed()
            .setTitle(`O Ticket ${message.channel.name} foi fechado`)
            .setColor("#cd3")
            .setFooter("Aviso de fechamento de ticket")

            break;
        }
    }
})

client.login(process.env.TOKEN);