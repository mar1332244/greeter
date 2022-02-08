import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
    console.log("ready");
});

client.on("messageCreate", (msg) => {
    
    if (msg.content == "hey")
    {
        msg.reply({
            content: "hey",
        });
    }
});

client.login(process.env.TOKEN);