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
// const Discord = require('discord.js');
require('dotenv').config();
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
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
        testChannel.send('hello!');
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
client.login(process.env.TOKEN);
