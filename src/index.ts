import DiscordJS, { Intents, MessageEmbed } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

/*
// .setImage()
const greeting = new MessageEmbed({
    image: { 
        url: "./images/greeting.jpg"
    }
});
*/

// const allIntents = new Intents(32767);  // all intents
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILD_MEMBERS,
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('guildMemberAdd', (member) => {
    member.send({
        files: ["./images/greeting.jpg"]
    });
});

client.login(process.env.TOKEN);