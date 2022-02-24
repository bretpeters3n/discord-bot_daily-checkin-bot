import Discord, { Intents, TextChannel } from 'discord.js'
// const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    // TEST-SERVER 945513339256180750
    // FCC 937896511000424448
    // let testChannel = client.channels.fetch('945513339256180750')
    const testChannel = client.channels.cache.get('945513339256180750');
    console.log('The bot is ready');
    setInterval(() => {
        console.log('The bot is ready');
        (testChannel as TextChannel).send('hello!');
        // testChannel.send('hello');
    }, 10000);
    // let testChannel = client.channels.fetch('945513339256180750')
    //     .then(
    //         setInterval(() => {
    //             console.log('The bot is ready');
    //         }, 10000);
    //     );

    // console.log('The bot is ready');
 
});

client.login(process.env.TOKEN)
