const Discord = require('discord.js');

const client = new Discord.Client();

bot.on('ready',  ()  =>   {
    console.log('Анцифер тута');
    bot.user.setStatus('Online');
    bot.user.setPresence({ game:   { name: 'зека', type: 0 }});
});

bot.on('message', message =>  {
    if (message.content === '!хелпа') {
        message.reply('Ну ёпта смотри: !привет - Поздароваться, !пшёлнах - Послать нахуй, !дерз - Дерзить. Всё просто нахуй. :ONC: ');
    }

});

bot.on('message', message =>  {
    if (message.content === '!привет') {
        message.reply('Пидора ответ! Хаа!');
    }

});

bot.on('message', message =>  {
    if (message.content === '!пшёлнах') {
        message.reply('Сам пошёл нахуй, чурка!!! ');
    }

});

bot.on('message', message =>  {
    if (message.content === '!дерз') {
        message.reply('Слыш, бля ты охуел??? ');
    }

});

client.login('Mzk5OTkwMDAxMDcwMzc0OTEz.DTVK6g.aINcIM1z9vyAmH2d9XA8kX9VSPM');
