const discord = require("discord.js");

var cpuStat = require('cpu-stat');

const si = require('systeminformation');

const os = require('os');

const ms = require('ms');

var osutils = require('os-utils');

var avgClockMHzCore2 = cpuStat.clockMHz(2);

    var totalCores = cpuStat.totalCores();

    var platform = os.platform();

    var uptime = os.uptime();

    var totalmem = osutils.totalmem();

    let totalRam = totalmem/1024; // Converting it to GB

    let usedRam = (process.memoryUsage().heapUsed/1024/1024).toFixed();//converted this to MB

    let freeMemCalculate = (usedRam/1024).toFixed(2); //calculating Free Ram in GB

    let freeRam = totalRam - freeMemCalculate;

module.exports = {

  name: "botinfo",

  aliases: ["about","info","stats"],

    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],

 

  category: "help",

  description: "INFORMATION ABOUT BOT",

  run: async (client, message, args) => {

 let Daksh = client.users.cache.get("762286903058890753").tag;




    cpuStat.usagePercent(function(err,percent,seconds){

      if(err){

        return console.log(err);

      }

      si.cpu(function(data){

    let embed = new discord.MessageEmbed()

      .setAuthor(`INFORMATION ABOUT DJ™`,client.user.displayAvatarURL())

      .addField(" BOT NAME", `${client.user.tag}`)

      .addField(

         "BOT DEVELOPER ",

      ` <a:Valid_Code_Developer:875773052774932581> ${Daksh}

        `

      )

      .addField(

        " TOTAL SERVER",

        `${client.guilds.cache.size}`,

        true

      )

     .addField(

        "TOTAL USER",

            `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,

        true  )

        .addField(" CREATED AT", `${client.user.createdAt.toDateString()}`)

      .addField("BOT LIBRARY", `discord.js v12.5.3`)

      .addField("NODE.JS", `${process.version} version`)

   .addField(" JAVA", `Openjdk 11.0.11`)

    .addField(" RAM USAGE",`${usedRam}MB /${totalRam.toFixed(2)}GB`)

    .addField(" CPU CORE",`${os.cpus()[0].model}`)

.addField(" UPTIME",ms(client.uptime, { long: true }))

      .setColor("#000000")

      .setFooter(`Proud To Be An Indian Devloper`

      ,client.user

      .displayAvatarURL())

    message.channel.send(embed);

      })

    })

  }

}//copy 
