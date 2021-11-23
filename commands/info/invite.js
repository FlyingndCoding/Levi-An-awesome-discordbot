const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["info"],
  description: "Shows all commands of the bot",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("THX FOR INVITING")
      .setDescription("I am a all in one discord bot ")
      .setImage('https://cdn.discordapp.com/attachments/890116247822434355/890535152168607744/standard_45.gif')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Click on these buttons to know more about me!")
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' Invite Me')
      .setEmoji('889814501506056202') 
      .setURL("https://discord.com/oauth2/authorize?client_id=864067337628155905&permissions=3275895&scope=bot")

      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' Support Server') 
      .setEmoji(`889820978358681610`)
      .setURL("https://discord.gg/ZZ3SueTWmZ")

      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('youtube') 
      .setEmoji(`889822366945914890`)
      .setURL("https://www.youtube.com/channel/UCqFnmaK6zK4KuIztPDxrO8A/videos")
      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3,],
      });

  },
};
