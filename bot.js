const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Online')
})

client.on('message', msg => {
  let role = msg.guild.roles.find('name', 'Rainbow');
  if (!role) return;
  if (msg.content === 'Rainbow') {
   
  setInterval( function r() {
      role.setColor('RANDOM');
    },5000);
  
  }
})

client.login(process.env.BOT_TOKEN);
