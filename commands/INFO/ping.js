const discord = require('discord.js');

module.exports = {
  name: 'ping',
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  description: 'The ping Command',
  category: 'Info',
  aliases: ['pong'],
  run: async (client, message, args) => {
    
    message.channel.send(`Pinging...`).then(m => {
      
      let ping = m.createdTimestamp - message.createdTimestamp;
      
      let embed = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(`PONG`,message.author.displayAvatarURL())
    
    .setDescription(`<a:Ping:896606138890608651>
 \`\`\` \nGateway ping : ${client.ws.ping}ms
Rest ping    : ${ping}ms\`\`\`
    `)
      m.edit('', embed);
    })
  }
}
