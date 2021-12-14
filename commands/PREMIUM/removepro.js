module.exports = {

    name : "removepro",
    run : async (client,message,args)=>{

if(message.author.id !== "762286903058890753") return;

client.db.set(`premium_${args[0]}`,false)



return message.channel.send(`removed premium from that server`)

    }
}//done
