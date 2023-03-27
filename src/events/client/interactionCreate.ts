import { Client, Interaction } from "discord.js";
import { Commands } from "../../containers/Commands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = Commands.find((c) => c.name === interaction.commandName);

      if (!command) return;

      try {
        command.run(client, interaction);
      } catch (error) {
        console.error(error);
      }
    }
  });
};
