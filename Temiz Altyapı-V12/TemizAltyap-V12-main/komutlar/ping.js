const Discord = require('discord.js'); // 'TheGhost#0602
const ayarlar = require('../ayarlar.json');
 // 'TheGhost#0602
module.exports.run = async (client, message, args) => {//https://discord.gg/zSWWKGMxzG  // 'TheGhost#0602
//https://discord.gg/zSWWKGMxzG
  
 let embed = new Discord.MessageEmbed()
  .setTitle("PİNG")
  .setColor('RANDOM')
  .setTimestamp()
  .setDescription(`Gecikme: **${client.ws.ping}ms**`)
  .setFooter(` ${message.author.tag}`);
  message.channel.send(embed); // 'TheGhost#0602
}
//https://discord.gg/zSWWKGMxzG

exports.conf = { //https://discord.gg/zSWWKGMxzG
  aliases: [],
  permLevel: 0,
}; // 'TheGhost#0602
exports.help = {
  name: 'ping',
   description: 'Ping Atar.',
  usage: 'ping'
};
//https://discord.gg/zSWWKGMxzG