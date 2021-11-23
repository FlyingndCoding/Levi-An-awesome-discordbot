const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");


module.exports = {
  name: "help2",
   aliases: ["h"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setImage("https://cdn.discordapp.com/attachments/890116247822434355/890172833622282290/standard_44.gif");

        const embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setImage('https://cdn.discordapp.com/attachments/890116247822434355/890172833622282290/standard_44.gif')
        .setTitle("IMAGE AND ANIMALS COMMANDS")
        .setDescription(`
 **__IMAGE__**
> ☆ grave
> ☆ heaven
> ☆ triggered
> ☆ wasted
       
 **__ANIMALS__**
> ☆ alpaca
> ☆ bird
> ☆ camel
> ☆ cat
> ☆ dog
> ☆ duck
> ☆ feed
> ☆ fox
> ☆ holo
> ☆ panda`)
.setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
        
        const embed2 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("Hlep 2");

        const embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("Hlep 3");


        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Animal and image')
        .setEmoji('890518792344592384')
        .setValue('option1')
        .setDescription('ANIMAL AND IMAGE CMD')

        let option2 = new MessageMenuOption()
        .setLabel('Help Menu 2')
        .setEmoji('2️⃣')
        .setValue('option2')
        .setDescription('This is just a help menu number 2')

        let option3 = new MessageMenuOption()
        .setLabel('Help Menu 3')
        .setEmoji('3️⃣')
        .setValue('option3')
        .setDescription('This is just a help menu number 3')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 30000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("This help menu is expired! Please retype the command to view again.")
    })



       //---------------------------------------E N D----------------------------------------
       
       //-------------\ Join our official discord server for any help: https://discord.gg/EZDfrer
    }
  };