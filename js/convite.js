var Discord = require('discord.js')

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`:incoming_envelope: **Convite Criado:** \n ${invite}`)


} catch (err) {
    message.reply(':xShiina: **Eu não tenho permissão para criar um convite deste servidor.**')
   }
}