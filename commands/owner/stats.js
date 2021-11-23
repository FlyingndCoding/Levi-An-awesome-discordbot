const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "owner",
aliases: ["stats"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 849299149874004019){
    const noperms = new MessageEmbed()
    .setDescription("<a:IX_wrongverify:891564082891739137> This Command Only Use By My Owner **NISHANT AND EAGLE** ")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`Hey My name is **${message.client.user.username}** and My Work is fun mode etc.`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "<:server:891564558819409932> Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "<:Users:891566339494408212> Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:channels:891566596080926741> Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<a:Online_Ping:891566957957120011> Uptime: ", value: uptime , inline: true },
    { name: "<a:ping:891567279261769728> Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: "<:ram:891567813184086066>  RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: "<a:Dot:888402396429037588> Bot Owner:",value: `\`\`\`NISHANT AND EAGLE\`\`\``},
  )
  .setColor("3498DB")
  .setFooter("Thx For Choosing DEVIL")  

return message.channel.send(embed);
    return message.react("<a:tick:882273209129533500>");
}
};

console.log("stats working")