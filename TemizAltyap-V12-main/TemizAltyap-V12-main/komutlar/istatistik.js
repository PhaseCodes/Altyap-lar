const Discord = require('discord.js'); // 'TheGhost#0602
const ayarlar = require('../ayarlar.json'); // 'TheGhost#0602
const os = require('os');
//https://discord.gg/zSWWKGMxzG
module.exports.run = async (client, message, args) => {//https://discord.gg/zSWWKGMxzG
    if (message.author.bot) return;
    let prefix = ayarlar.prefix;
    if(!message.content.startsWith(prefix)) return;
   // 'TheGhost#0602
    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;
//https://discord.gg/zSWWKGMxzG
    let stats = new Discord.MessageEmbed()//https://discord.gg/zSWWKGMxzG
    .setAuthor(`${message.author.tag}`)
    .setTitle(`${client.user.username}`)
    .setColor('RANDOM')
    .addField("Sunucu Sayısı", `${servercount}`, true)
    .addField("Kullanıcı Sayısı", `${usercount}`, true)
    .addField("Kanal Sayısı", `${channelscount}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Node Versiyon', `${NodeVersion}`, true)
    .addField('Çekirdek', `${cores}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats); // 'TheGhost#0602
};
//https://discord.gg/zSWWKGMxzG
exports.conf = {
  aliases: ['i'],
  permLevel: 0,
};
exports.help = {
  name: 'istatistik',
   description: 'Bot İstatistiklerini Gösterir',
  usage: 'istatistik'
};
//https://discord.gg/zSWWKGMxzG