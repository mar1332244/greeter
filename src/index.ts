import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INTEGRATIONS
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", (msg) => {
    
    if (msg.content == "hey")
    {
        msg.reply({
            content: "hey",
        });
    }
});


client.on('guildMemberAdd', (member) => {
    console.log(member);
});

client.login(process.env.TOKEN);