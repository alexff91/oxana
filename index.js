const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env['734248166:AAG-Hw0j_1UKv_ApLjd4P5iiq1zCZFcTkBg']);

// Register listeners

slimbot.on('message', message => {
  slimbot.sendMessage(message.chat.id, 'Окей');
});

// Call API

slimbot.startPolling();
