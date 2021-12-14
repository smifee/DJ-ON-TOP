const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("INVITE DJ™",client.user.displayAvatarURL())
.setDescription(`
[DJ™](https://discord.com/oauth2/authorize?client_id=835861478141198367&scope=bot&permissions=7045906193)
[SUPPORT SERVER](https://discord.gg/nupHxcTjQu)
`)
message.channel.send(embed)


}}
