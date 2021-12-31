const { Message, MessageEmbed } = require("discord.js");
module.exports = {
    commands: ['sensi', 'sensivity', 'sensibilite'],
    callback: async (message) => {
        const embed = new MessageEmbed()
            .setAuthor(`Voici les paramètres in game de l'Empreur tout puissant KilluZan`)
            .setThumbnail('https://i.ibb.co/mFf5tN0/Tu-me-bloques-si-je-change.png')
            .setDescription("Spoiler alert: c'est plus la meme depuis 1420 A.C")
        message.channel.send(embed)
    },
}