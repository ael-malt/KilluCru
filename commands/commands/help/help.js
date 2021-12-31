const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'help',
    callback: (message, arguments, text, client) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Mon préfixe est "${prefix}" et voici mes commandes:`)
            .setColor('RED')
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setFooter('Bot crée par thenono1#6455')
            .addFields({
                name: '<:IconPin:840623741377708053> __Aide__',
                value:
                    `**${prefix}help** - Affiches le menu d'aide
                    **${prefix}ticket** - Crées un ticket si tu as besoin d'aide`,
                inline: false,
            },
                {
                    name: "<:IconRole:840623763879886908> __Informations sur l'Empreur tout puissant KilluZan__",
                    value:
                        `**${prefix}socials** - Affiches les reseaux sociaux de l'Empreur tout puissant KilluZan
                        **${prefix}sensi** - Affiches les paramètres in game de l'Empreur tout puissant KilluZan
                        `,
                    inline: false,
                },
                {
                    name: '<:IconRole:840623763879886908> __Information__',
                    value:
                        `**${prefix}botinfo** - Affiches de l'information sur ${client.user.username}\n**${prefix}serverinfo** - Affiches de l'information sur ce serveur\n**${prefix}userinfo <@membre>** - Affiches de l'information sur le membre specifié\n**${prefix}membercount** - Affiches combien de membres ce serveur contient\n**${prefix}ping** - Pong! Affiches les latences du Bot et de l'API `,
                    inline: false,
                },
                {
                    name: '<:IconActivity:840623786545643531> __Jeux__',
                    value:
                        `**${prefix}codcw - codmw - codbo4 - codbo3 <tag> <platforme>**
                        Affiches tes stats sur le Call of Duty de ton choix `,
                },
                {
                    name: '<:IconStoreChannel:840623774684020737> __Divers__',
                    value:
                        `**${prefix}poll** - Crées un sondage sur le dernier message envoyé
                        **${prefix}rolldice** - Roules un dé!
                        **${prefix}meme** - Généres un meme!
                        **${prefix}randomcolor/rc** - Généres une couleur aléatoire!`,
                    inline: false,
                },
                {
                    name: '<:fx:840635607264657428> __Maths__',
                    value:
                        `**${prefix}add/sub\<num1> <num2>**
                    **${prefix}multiply/divide\n<num1> <num2>**`,
                    inline: true,
                },
                {
                    name: '<a:ItemModBan:840626477635731457> __Moderation__',
                    value:
                        `**${prefix}kick <@membre>**
                    **${prefix}ban <@membre>**
                    **${prefix}clear <quantité>**
                    **${prefix}mute <@membre> <mute time>**
                    **${prefix}unmute <@membre>**`,
                    inline: true,
                },
                // {
                //     name:'',
                //     value:
                // `**${prefix}**`,
                //     inline:false,
                // },

            )

        message.channel.send(embed)
    },
}