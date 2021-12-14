module.exports = {
    name: "addpremium",
    run : async (client,message,args)=> {

if(message.author.id !== "762286903058890753") return;

let guild = client.guilds.cache.get(args[0])



if(!guild) return message.channel.send(`provide me guild id`)



client.db.set(`premium_${args[0]}`,true)

message.channel.send(` added premium to ${guild.name}`)









    }
}
