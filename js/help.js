const Discord = require('discord.js');
const c = require('../config.json')
const d = require('../criadores.json')

exports.run = (client, message, args) => {
  let user = message.author
  
  let embed2 = new Discord.MessageEmbed()
  .setColor([28, 255, 103])
  .setTitle('Olá, vim te ajudar com os comandos admin')
  .setDescription(`**Comandos Administrador:**
    **${c.prefix}lock** | Esse comando bloqueia o envio de mensagens em um chat
    **${c.prefix}unlock** | Esse comando desbloquia o envio de mensagens em um chat
    **${c.prefix}aviso** | Cria um aviso no canal que você escolher
    **${c.prefix}clear** | Limpa as mensagens no chat
    **${c.prefix}etopico** | Cria um topico no canal
    **${c.prefix}mute** | Você mute um player
    **${c.prefix}unmute** | Você desmuta um player
    **${c.prefix}sorteio** | Cria um sorteio no canal que você escolher
    **${c.prefix}kick** | Da kick em um player
    **${c.prefix}templock** | Da templock em um canal`)

  let embed1 = new Discord.MessageEmbed()

  .setColor([28, 255, 103])
  .setTitle('Olá, vim te ajudar')
  .setDescription(`So por curiosidade fui criado pelo: **${d.OwnerGeral}**, seu contato **${d.Contato}**
  *Você está sendo ajudado em **${message.guild.name}** pelo seu bot preferido!*
  *Meu prefixo: ${c.prefix}*
  **Comandos Geral:**

  **${c.prefix}server** | Você coloca o ip e mostra informações do server que você escolher
  **${c.prefix}uptime** | Mostra a quanto tempo o bot esta online
  **${c.prefix}infochannel** | Mostra as informações do canal
  **${c.prefix}avatar** | Você ve o avatar de uma pessoa
  **${c.prefix}botinfo** | Mostra as informações do bot
  **${c.prefix}calculo** | Você faz um calculo matematico
  **${c.prefix}clima** | Você ve o clima de qualquer local do mundo
  **${c.prefix}convite** | Você cria um convite para esse server
  **${c.prefix}lembrar** | O Bot te marca apos o tempo que você decedir
  **${c.prefix}pergunta** | Você pergunta algo ao bot
  **${c.prefix}ping** | Você ve seu ping
  **${c.prefix}myinvite** | Manda o link para convidar o bot ao seu discord
  **${c.prefix}serverinfo** | Você ve dados do server`);

  let embedi = new Discord.MessageEmbed()

  .setColor([28, 255, 103])
  .setDescription(`
  **Comandos para Diversão:**

  **${c.prefix}reverter** | Reverte uma frase que você escrever
  **${c.prefix}carinha** | Cria uma carinha aleatoria
  **${c.prefix}foxgirl** | Cria uma imagem de uma FoxGirl
  **${c.prefix}neko** | O bot pega uma imagem de um Neko para você
  **${c.prefix}pediravatar** | O bot cria um avatar para você e você pode utiliza-lo ou não
  **${c.prefix}ngif** | O bot cria um gif de um Neko para você
  **${c.prefix}sherekgif** | Invoca um gif do Sherek na sua tela
  **${c.prefix}kiss** | Você beija uma pessoa
  **${c.prefix}fds** | Você manda o fds para alguma pessoa
  **${c.prefix}cavalo** | Invoca o meme do cavalo na sua tela
  **${c.prefix}abraço** | Você abraça uma pessoa
  **${c.prefix}cafune** | Você faz cafune em uma pessoa
  **${c.prefix}cutuca** | Você cutuca uma pessoa
  **${c.prefix}cocega** | Vocês faz cocegas em uma pessoa
  **${c.prefix}coinflip** | Você joga uma moeda para ver se ira cair cara ou coroa
  **${c.prefix}comida** | Você alimenta uma pessoa
  **${c.prefix}dado** | Você taca um dado
  **${c.prefix}laranjo** | Você coloca uma frase com a foto do laranjo atras
  **${c.prefix}firstword** | Coloca a palavra que você quiser no meme Primeira palavra
  **${c.prefix}opala** | Invoca o meme do opala na sua tela
  **${c.prefix}roleta** | Você gira uma roleta para ver se você tem sorte para ficar vivo
  **${c.prefix}say** | Você faz o bot falar algo
  **${c.prefix}ppt** | Você pode jogar pedra papel tesoura com o bot
  **${c.prefix}sherek** | Você invoca o sherek na sua tela
  **${c.prefix}tapa** | Você da um tapa em alguem
  `)
  
  user.send(embed1)
  user.send(embedi)
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    user.send(embed2)
  }
}