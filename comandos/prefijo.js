const config = require('../config.json');

exports.run = (client, message, args) => {
  message.channel.send(`**__Prefijo de el bot__**: **\`${config.prefijo}\`** **:)**`);
}
