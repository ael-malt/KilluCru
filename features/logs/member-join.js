const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  const logsbot = "778244038868467755"; //#logsbot
  const guild = "652801443392126996"; //Guild ID

  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      const embed = new MessageEmbed()
        .setAuthor(
          `Un membre a rejoint le serveur`,
          member.user.avatarURL({ dynamic: true })
        )
        .setDescription(`<@${member.user.id}> ${member.user.tag}`)
        .setColor("GREEN")
        .setFooter(`ID: ${member.user.id}`)
        .addFields({
          name: "A rejoint Discord",
          value: new Date(member.user.createdTimestamp).toLocaleDateString(),
        });
      const channel = member.guild.channels.cache.get(logsbot);
      channel.send(embed);
    } else return;
  });
};
