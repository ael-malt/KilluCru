const { prefix } = require('@root/config.json');
const channelId = '801144728530845757' //#youtube-killu //NOTIFS

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, content } = message

        const arguments = content.split(/[ ]+/)
        arguments.shift()

        const array = arguments
        const args = array.join(' ')

        if(content.startsWith(`${prefix}y-o-u-t-u-b-e`)) {
            if(!channelId)
            return;
        
            const targetGuild = client.guilds.cache.get('652801443392126996'); //FC Killu
            if (!guild) return console.log("Couldn't get the guild.");
    
            const targetChannel = targetGuild.channels.cache.get('665215882934616065'); //#annonces
    
            targetChannel.send(args);
            return
        }else return
      })
}