const TelegramBot = require('node-telegram-bot-api');
const token = '5803362552:AAEqtKjbGNfIailrUXtxrHZXEmj6Yv9mv9I';
const bot = new TelegramBot(token, { polling: true });

// Create payment button
bot.on('message', (msg) => {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Pay',
            pay: true,
          },
        ],
      ],
    },
  };
  bot.sendMessage(msg.chat.id, 'Would you like to pay?', opts);
});

// Handle payment confirmation
bot.on('pre_checkout_query', (query) => {
  bot.answerPreCheckoutQuery(query.id, true);
});
