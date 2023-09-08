import "dotenv/config";
import { Client, Partials, GatewayIntentBits, ActivityType } from "discord.js";
import ready from "./events/client/ready";
import interactionCreate from "./events/client/interactionCreate";
import Time from "./functions/Time";

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.Message,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.User,
  ],
  // presence: {
  //   status: "online",
  //   activities: [
  //     {
  //       name: "<Name>",
  //       type: ActivityType.Watching,
  //       url: "https://frambulan.com",
  //     },
  //   ],
  // },
});

// Client Events
ready(client);
interactionCreate(client);

const AuthenticationToken = process.env.TOKEN as string;
if (!AuthenticationToken) {
  console.warn(
    `[${Time()}] [CRASH] Authentication Token for Discord bot is required! Use Environment Secrets.\n`
  );
  process.exit();
}

client.login(AuthenticationToken).catch((err) => {
  console.error(
    `[${Time()}] [CRASH] Something went wrong while connecting to your bot...\n`
  );
  console.error(`[${Time()}] [CRASH] Error from Discord API: ${err}\n`);
  return process.exit();
});

process.on("unhandledRejection", async (err, promise) => {
  console.error(`[${Time()}] [ANTI-CRASH] Unhandled Rejection: ${err}\n`);
  console.error(promise + "\n");
});
