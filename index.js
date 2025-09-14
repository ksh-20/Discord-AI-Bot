// Import required libraries
import { Client, GatewayIntentBits } from "discord.js";  // Discord.js for bot functionality
import OpenAI from "openai";                             // OpenAI SDK for AI responses
import "dotenv/config";                                  // Loads environment variables from .env

// Create a new Discord client instance with intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,          // Required for basic server events
    GatewayIntentBits.GuildMessages,   // Required for sending/receiving messages
    GatewayIntentBits.MessageContent,  // Required for reading the message content we send
  ],
});

// Initialize OpenAI client using API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Event triggered when the bot is logged in and ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for every new message in channels the bot has access to
client.on("messageCreate", async (msg) => {
  // Ignore messages from other bots (prevents infinite loops)
  if (msg.author.bot) return;

  // Only respond if the bot was mentioned in the message
  if (!msg.mentions.has(client.user)) return;

  // Clean the message: remove the bot's mention text (like <@123456789>)
  msg.content = msg.content.replace(/<@\d*>/g, "").trim();

  try {
    // Ask OpenAI to generate a response using the message as input
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",                     // Model to use (fast + smart)
      messages: [{ role: "user", content: msg.content }],  // User’s input
      max_tokens: 16,                          // Limit response length, for free limit it is 16. 
    });

    // Reply back in Discord with the AI's response
    msg.reply(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error with OpenAI:", error);
    msg.reply("Sorry, I ran into an error while trying to think.");
  }
});

// Login the bot with the token stored in .env
client.login(process.env.DISCORD_TOKEN);