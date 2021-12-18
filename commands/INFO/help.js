const discord  =  require("discord.js")

module.exports = {

  name: "help",

   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],

 

  run: async (client,message,args) => { 

    

    const embed = new discord.MessageEmbed()

    .setColor("BLUE")

 .setAuthor("help comammd",client.user.displayAvatarURL())

.setDescription(`

**Everyone comammds**

\`clear,join,leave,loop,move,nowplaying,pause,play,previous,queue,remove,resume,search,skip,seek,stop,volume\`

**Exclusive commamds**

\`24/7, radio\`

**Filters commands**

\`bass,bassboost,deepbass,earrape,nightcore,pitch,pop,reset,soft,speed,television,vaporwave\`

**Utility commands**

\`about,prefix,ping,uptime,invite\`

**DJ™ support**

[JOIN SUPPORT SERVER](https://discord.gg/nupHxcTjQu)`)

 

.setFooter("TEAM DJ™")

message.channel.send(embed)

  }

}
