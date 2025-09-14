# 🤖 Discord AI Bot with OpenAI

A simple **Discord chatbot** powered by **OpenAI GPT models**.  
The bot listens for messages in your Discord server and replies intelligently when you mention it.

---

## 📌 Features
- Replies when you mention the bot in a server (`@BotName hello`)
- Uses **OpenAI GPT-4o** for natural responses
- Clean and simple Node.js implementation
- Secure configuration using `.env` file

---

## 🛠️ Prerequisites
Before running this project, make sure you have:
- **Node.js** v18 or later installed
- A **Discord Bot Token** (from [Discord Developer Portal](https://discord.com/developers/applications))
- An **OpenAI API Key** (from [OpenAI Platform](https://platform.openai.com/api-keys))

---

## 📂 Project Setup

### 1. Clone this repository
```bash
git clone https://github.com/your-username/discord-ai-bot.git
cd discord-ai-bot
```
2. Install dependencies
``` bash
npm install discord.js openai dotenv
```

4. Create a .env file in the root directory
```bash
DISCORD_TOKEN=your_discord_bot_token_here
OPENAI_API_KEY=your_openai_api_key_here
```

## 🚀 Running the Bot
1.Start the bot using:
``` bash
node index.js
```

If everything works, you should see:
Logged in as YourBotName!


Now, in your Discord server:
@YourBotName Hello!

The bot will respond with an AI-generated reply.

## 🔧Useful Commands

Install dependencies:
```bash
npm install
```

Run the bot:
```bash
node index.js
```

Use nodemon (optional, auto-restarts bot when code changes):
```bash
npm install -g nodemon
nodemon index.js
```
