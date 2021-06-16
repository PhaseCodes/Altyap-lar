const Discord = require('discord.js');//'TheGhost#0602
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const ayarlar = require('./ayarlar.json');
const os = require('os');
//https://discord.gg/AhYJewwVQ5
const { JsonDatabase, YamlDatabase} = require("wio.db");
const db = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
require('./util/eventLoader')(client);
//https://discord.gg/zSWWKGMxzG
client.ayarlar = ayarlar;
var prefix = ayarlar.prefix;
//https://discord.gg/AhYJewwVQ5
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};//https://discord.gg/AhYJewwVQ5
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {//https://discord.gg/zSWWKGMxzG
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);//https://discord.gg/AhYJewwVQ5
    });
  });
});//'TheGhost#0602
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {//https://discord.gg/AhYJewwVQ5
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//https://discord.gg/AhYJewwVQ5
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {//'TheGhost#0602
      reject(e);
    }
  })//https://discord.gg/AhYJewwVQ5
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {//https://discord.gg/AhYJewwVQ5
      let cmd = require(`./komutlar/${command}`);//'TheGhost#0602
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);//'TheGhost#0602
      });//https://discord.gg/AhYJewwVQ5
      resolve();
    } catch (e) {
      reject(e);
    }//https://discord.gg/AhYJewwVQ5
  });
};//'TheGhost#0602
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];//'TheGhost#0602
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//https://discord.gg/AhYJewwVQ5 //'TheGhost#0602
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//https://discord.gg/AhYJewwVQ5
client.on('ready', () => {

  
  var actvs = [
    `MADE BY 'TheGhost `,
    `Prefix : ${prefix} `

];

client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'WATCHİNG' });
setInterval(() => {
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'WATCHİNG'});
}, 3500);
      //'TheGhost#0602
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log (`Discord:           : //https://discord.gg/AhYJewwVQ5`);
      console.log ('_________________________________________');
    
    });
//https://discord.gg/AhYJewwVQ5
    client.elevation = message => {
        if (!message.guild) {
          return;
        }
        let permlvl = 0;
        if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 1;
        if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 2;
        if (message.author.id === message.guild.owner.id) permlvl = 3;
        if (message.author.id === client.ayarlar.sahip) permlvl = 4;
        return permlvl;
      };

 //https://discord.gg/AhYJewwVQ5
client.login(ayarlar.token);
