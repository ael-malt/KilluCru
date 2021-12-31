module.exports = (client) => {
  const channelId = "776466496955613184"; // welcome channel
  const guild = "652801443392126996"; //Guild ID

  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      const message = `Bienvenue <@${member.id}> dans le serveur!`;

      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    } else return;
  });
};
