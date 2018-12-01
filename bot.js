const Discord = require("discord.js");
const client = new Discord.Client();
```client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('511175757272186891').roles.find("Rainbow", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});
  
  
  
  client.login(process.env.BOT_TOKEN);
