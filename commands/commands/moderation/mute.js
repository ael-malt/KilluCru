const { Message } = require("discord.js");
const ms = require('ms')

module.exports = {
    commands: 'mute',
    expectedArgs: '<[@member]> <mute time[s,m,h,d,w,y]>',
    permissionError: '',
    minArgs: 1,
    maxArgs: 3,
    callback: (message, arguments, text, client) => {
        const target = message.mentions.users.first();
        if (target) {
 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!arguments[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`${memberTarget} Ferme ton clapet s'il te plait`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${memberTarget} Ferme ton clapet pendant \`${ms(ms(arguments[1]))}\` s'il te plait`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(arguments[1]));
        } else {
            message.channel.send('Veuillez spécifier un membre valide!');
        }
    },
    permissions: ['ADMINISTRATOR'],
}