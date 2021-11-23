const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "Fun",
  description: "Return A User Avatar!",
  usage: "Avatar | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Gif = Member.user.displayAvatarURL({ format: "gif" }), Webp = Member.user.displayAvatarURL({ format: "webp" }), Png = Member.user.displayAvatarURL({ format: "png" }), Jpg = Member.user.displayAvatarURL({ format: "jpg" })

    const Embed = new Discord.MessageEmbed()
    .setColor("random")
    .setDescription(`<:redarrow:890782881092354110> [Png](${Png}) <:redarrow:890782881092354110> [Gif](${Gif}) <:redarrow:890782881092354110> [Webp](${Webp}) <:redarrow:890782881092354110> [Jpg](${Jpg})`)
    .setImage(Member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
