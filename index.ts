import Discord, { Intents, TextChannel } from 'discord.js'
const cron = require('cron');
require('dotenv').config();

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

// We need to run it just one time and when the client is ready
// Because then it will get undefined if the client isn't ready
client.on('ready', () => {

    // TEST-GUILD 945513339256180746
    // TEST-CHANNEL 945513339256180750
    
    // FCC GUILD 849043558774079499
    // FCC CHANNEL 937896511000424448
    
    // const testGuild = '945513339256180750';
    // const testChannel = '945513339256180750';
    // const fccGuild = '849043558774079499';
    // const fccChannel = '937896511000424448';

    const fccChannel = client.channels.cache.get('945513339256180750');
    console.log('The bot is ready');

    // setInterval(() => {
    //     console.log('The bot is ready');
    //     (testChannel as TextChannel).send('hello!');
    //     // testChannel.send('hello');
    // }, 10000);

    // let scheduledMessage = new cron.CronJob('00 00 08 * * *', () => {
    let scheduledMessage = new cron.CronJob('00 00 18 * * *', () => {
    // This runs every day at 10:30:00, you can do anything you want
    // Specifing your guild (server) and your channel
        // const guild = client.guilds.cache.get(testGuild);
        // const channel = guild.channels.cache.get(testChannel);
        // channel.send('You message');

        (fccChannel as TextChannel).send("#seal-team-3 MORNING CHECKIN ALERT! Good morning everyone. Please drop a note here telling everyone what you are working on, how it is going, if you need a hand, or if you need something to do.");

    });
            
    // When you want to start it, use:
    scheduledMessage.start()
});

client.login(process.env.TOKEN)
