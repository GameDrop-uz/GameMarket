const { Telegraf } = require('telegraf');

// BotFather'dan olgan TOKENingizni quyidagi matn o'rniga yozasiz
const bot = new Telegraf('8972752261:AAGH_-e0fU8wydNrzx2Ah5ihYgGl75AIZkQ');

// Foydalanuvchi /start berganda ishlaydigan qism
bot.start((ctx) => {
    ctx.reply('Assalomu alaykum! Xush kelibsiz Game Market ga 🎮\n\nPastdagi tugmani bosing va ilovani ishga tushiring:', {
        reply_markup: {
            inline_keyboard: [
                [
                    { 
                        text: "🚀 Game Market'ni Ochish", 
                        web_app: { url: "6a9847f1c935dec5299ee92f" } // Masalan: Vercel yoki Netlify'dagi link
                    }
                ]
            ]
        }
    });
});

// Botni ishga tushirish
bot.launch();
console.log("Bot muvaffaqiyatli ishga tushdi!");
