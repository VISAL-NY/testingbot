const { Telegraf } = require('telegraf');
const TOKEN="5803362552:AAEqtKjbGNfIailrUXtxrHZXEmj6Yv9mv9I";
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));


bot.launch();