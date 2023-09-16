const TelegramBot = require('node-telegram-bot-api');
const token = '2106699725:AAE8KIdwxw1UVIA1N6Z64yXKB_nHtq2Y-Dk'; // Підставте свій токен бота
const bot = new TelegramBot(token, { polling: true });

// Обробник команди /stats
bot.onText(/\/stats/, (msg) => {
    const chatId = msg.chat.id;
    const imageUrl = 'https://cache.gametracker.com/server_info/91.226.93.158:16567/b_160_400_1_ffffff_c5c5c5_ffffff_000000_1_1_0.png';

    // Відправка картинки у відповідь на команду
    bot.sendPhoto(chatId, imageUrl, { caption: 'Статистика сервера RELAXDOM NSK' });
});
