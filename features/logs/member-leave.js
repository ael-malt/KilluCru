const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  const logsbot = "778244038868467755"; //#logsbot
  const guild = "652801443392126996"; //Guild ID

  client.on("guildMemberRemove", (member) => {
    if (member.guild.id === guild) {
      const embed = new MessageEmbed()
        .setAuthor(
          `Un membre a quitté le serveur`,
          member.user.avatarURL({ dynamic: true })
        )
        .setDescription(`<@${member.user.id}> ${member.user.tag}`)
        .setColor("RED")
        .setFooter(`ID: ${member.user.id}`);
      const channel = member.guild.channels.cache.get(logsbot);
      channel.send(embed);
    } else return;
  });
};
