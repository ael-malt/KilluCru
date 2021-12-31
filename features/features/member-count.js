module.exports = (client) => {
  const channelId = "799581475472932966"; //Membres:
  const guild = "652801443392126996"; //Guild ID

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId);
    channel.setName(`Membres: ${guild.memberCount.toLocaleString()}`);
  };

  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      updateMembers(member.guild);
    } else {
      return;
    }
  });
  client.on("guildMemberRemove", (member) => {
    if (member.guild.id === guild) {
      updateMembers(member.guild);
    } else {
      return;
    }
  });
};
