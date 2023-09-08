import { Client, Interaction } from "discord.js";
import { SlashCommands } from "../../containers/SlashCommands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isChatInputCommand()) {
      const slashCommand = SlashCommands.find(
        (command) => command.name === interaction.commandName
      );

      if (!slashCommand) return;

      try {
        slashCommand.run(client, interaction);
      } catch (error) {
        console.error(error);
      }
    }
  });
};
