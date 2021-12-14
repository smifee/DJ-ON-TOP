const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"television",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<a:LIT_pubg_loading:871120310894755900> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<a:LIT_pubg_loading:871120310894755900> Please connect to a voice channel")
    return message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }

if (!args[0]) {
			player.setEQ(...Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.65 })));
			const msg = await message.channel.send(`<a:LIT_pubg_loading:871120310894755900>Turning on **Television mode**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned on **Television mode**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
		}

		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
	player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
        const msg = await message.channel.send(`<a:LIT_pubg_loading:871120310894755900>Turning off **television mode**.`);
			const embed = new MessageEmbed()
				.setDescription('Turnemessage.television mode**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
		}

	}
};//