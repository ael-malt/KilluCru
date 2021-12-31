const { Message, MessageEmbed } = require("discord.js");
module.exports = {
    commands: 'socials',
    callback: async (message) => {
        const embed = new MessageEmbed()
            .setAuthor(`Voici les reseaux sociaux de l'Empreur tout puissant KilluZan`)
            .setDescription(
                `**<:Twitch:840603449103351870> Twitch: [KilluZan_]( https://www.twitch.tv/killuzan_)**\n**<:youtube:840603449615319046> Youtube: [Killu](http://bit.ly/3bFxbW4)**\n**<:Twitter:840603449473105931> Twitter: [KilluZan](https://twitter.com/KilluZan)**`
            )
        message.channel.send(embed)
    },
}