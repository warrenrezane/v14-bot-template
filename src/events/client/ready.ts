import { Client } from "discord.js";
import { Commands } from "../../containers/Commands";
import Time from "../../functions/Time";

export default (client: Client): void => {
  client.once("ready", async () => {
    if (!client.user || !client.application) return;

    client.application.commands.set(Commands);

    console.log(`[${Time()}] ${client.user!.tag} is online!\n`);
  });
};
