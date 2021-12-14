const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("BLUE")
  .setDescription("<a:Musicz:875772243160993813> " +""+ text);

    await channel.send(embed)
}//
