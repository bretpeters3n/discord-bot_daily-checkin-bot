"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const cron = require('cron');
require('dotenv').config();
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
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
    setInterval(() => {
        console.log('The bot is ready');
        fccChannel.send('hello!');
        // testChannel.send('hello');
    }, 10000);
    // let scheduledMessage = new cron.CronJob('00 00 08 * * *', () => {
    let scheduledMessage = new cron.CronJob('00 00 18 * * *', () => {
        // This runs every day at 10:30:00, you can do anything you want
        // Specifing your guild (server) and your channel
        // const guild = client.guilds.cache.get(testGuild);
        // const channel = guild.channels.cache.get(testChannel);
        // channel.send('You message');
        fccChannel.send("#seal-team-3 MORNING CHECKIN ALERT! Good morning everyone. Please drop a note here telling everyone what you are working on, how it is going, if you need a hand, or if you need something to do.");
    });
    // When you want to start it, use:
    scheduledMessage.start();
});
client.login(process.env.TOKEN);
