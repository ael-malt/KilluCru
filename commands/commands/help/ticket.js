const channelId = '799593396859043850'
const check = '✅'
let registered = false

const registerEvent = (client) => {
  if (registered) {
    return
  }

  registered = 

  client.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) {
      return
    }

    const { message } = reaction
    if (message.channel.id === channelId) {
      message.delete()
    }
  })
}

module.exports = {
  commands: ['ticket', 'support'],
  minArgs: 1,
  expectedArgs: '<message>',
  callback: (userMessage, arguments, text, client) => {
    const { guild, member } = userMessage

    registerEvent(client)

    const channel = guild.channels.cache.get(channelId)
    channel
      .send(
        `Un nouveau ticket a été crée par <@${member.id}>
    
        "${text}"
        Appuyer sur ${check} quand le problème est résolu.`
      )
      .then((ticketMessage) => {
        ticketMessage.react(check)

        userMessage.reply(
          'Votre ticket a été envoyé! Une réponse vous seras envoyé dans les plus brefs délais.'
        )
      })
  },
}
