import { Client } from "discord.js";
import { SlashCommands } from "../../containers/SlashCommands";
import Time from "../../functions/Time";

export default (client: Client): void => {
  client.once("ready", async () => {
    if (!client.user || !client.application) return;

    client.application.commands.set(SlashCommands);

    console.log(`[${Time()}] ${client.user!.tag} is online!\n`);
  });
};
