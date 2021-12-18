const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const  prefix  = ";;"
const {MessageButton, MessageActionRow, MessageMenuOption, MessageMenu} = require("discord-buttons");

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {
    
if (!args[0]) {
           
      
let button = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/oauth2/authorize?client_id=835861478141198367&scope=bot&permissions=7045906193') 
  .setLabel('ADD ME!')
  .setEmoji('894671329339535480')
let button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/dHpvrTUh9b') 
  .setLabel('SUPPORT')
  .setEmoji('894673122039562262')

let prefix2 = ";;"
        const embed = new MessageEmbed()
        .setColor("2F3136")
       .setDescription(
          `\n <a:arrow:893834730456383561> **Hey I Am Music Mania Here To Make Your Server Cool By Playing Lofi And Chill Music To Start Playing Music Read All The Instructions Below**
\n\n<a:arrow:893834730456383561>**BOT LIVE ON** **\`+help\`**.\n<a:arrow:893834730456383561>**TO PLAY SONGS** **\`+play <song name>\`**.\n<a:arrow:893834730456383561>**Default Prefix** [ **\`+\`** ]\n<a:arrow:893834730456383561>**Server Prefix** [ **\`+\`** ]\n\n
          \`\`\`\nClick the menu below to view help menu!\`\`\`\n\n\n<a:AF_vote:873602739156959242>**VOTE THE BOT**\n[CLICK HERE ](https://top.gg/bot/835861478141198367vote)`
)
          
        .setFooter("MADE WITH ðŸ’– BY ᕈαrdhααn♡ﮩ٨ﮩ𓆪")
          
        
        
                
        .setAuthor("MUSIC MANIAÂ© ",client.user.displayAvatarURL())       
        

        const embed1 = new MessageEmbed()
        .setColor("2F3136")
        .setAuthor("DJ™",client.user.displayAvatarURL())      .setDescription(
      `\n\n<a:arrow:893834730456383561>**BOT LIVE ON** **\`+help\`**.\n<a:arrow:893834730456383561>**TO PLAY SONGS** **\`+play <song name>\`**.\n<a:arrow:893834730456383561>**Default Prefix** [ **\`+\`** ]\n<a:arrow:893834730456383561>**Server Prefix** [ **\`+\`** ]\n\n`
          
        )
               
    .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()

        
        .addField("<a:Musicz:875772243160993813> **Music Commands**","\`\`\`\n24/7, clear, grab, join, leave, loop, move, nowplaying[np], pause, play[p], previous, queue[q], remove, resume, search, seek, skip[s], stop, volume[v]\n\`\`\`");

        const embed2 = new MessageEmbed()
        .setAuthor("DJ™",client.user.displayAvatarURL())     
          .setDescription(
          
         `\n\n<a:arrow:893834730456383561>**BOT LIVE ON** **\`+help\`**.\n<a:arrow:893834730456383561>**TOO PLAY SONGS** **\`+play <song name>\`**.\n<a:arrow:893834730456383561>**Default Prefix** [ **\`+\`** ]\n<a:arrow:893834730456383561>**Server Prefix** [ **\`+\`** ]\n\n`
                   
        )
      
          .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("2F3136")
        .addField("<a:gifline_xq:872558841370382437> **Filters**","```\nbass, bassboost, deepbass, earrape, nightcore, pitch, pop, reset, soft, speed, television, vaporwave```");

        const embed3 = new MessageEmbed()
        .setAuthor("DJ™ ",client.user.displayAvatarURL())      .setDescription(
          
    `\n\n<a:arrow:893834730456383561>**BOT LIVE ON** **\`+help\`**.\n<a:arrow:893834730456383561>**TO PLAY SONGS** **\`+play <song name>\`**.\n<a:arrow:893834730456383561>**Default Prefix** [ **\`+\`** ]\n<a:arrow:893834730456383561>**Server Prefix** [ **\`+\`** ]\n\n`
          
          )
                
          
          .setFooter(
          `Requested by ${message.author.tag}`,
          message.author
          .displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("2F3136")
        .addField("<a:info:872560019688792105> **Utility**","```\nbotinfo, eval, help, invite, ping, prefix, uptime```");


        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Music')
        .setEmoji('875772243160993813')
        .setValue('option1')
        .setDescription('Music Command Here')

        let option2 = new MessageMenuOption()
        .setLabel('Filters')
        .setEmoji('872558841370382437')
        .setValue('option2')
        .setDescription('Music Filters Here')

        let option3 = new MessageMenuOption()
        .setLabel('Info')
        .setEmoji("872559214004936704")
        .setValue('option3')
        .setDescription('Informative Commands Here')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Browse Commands!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

        //-----------------------------OPTIONS----------------------
let row = new MessageActionRow()
  .addComponents(button, button2);
let row2 = new MessageActionRow()
.addComponents(select);

const Sendmenu = await message.channel.send(  
  {embed: embed,components:[row,row2]}
);

    const filter = ( button ) => button.clicker.user.id === message.author.id; 
      let collector = Sendmenu.createMenuCollector(filter, {})
      
 

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(  {embed: embed1,components:[row,row2]}
)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(  {embed: embed2,components:[row,row2]}
)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(  {embed: embed3,components:[row,row2]}
)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
    })}


  }
};//done
