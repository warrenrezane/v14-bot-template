import { SlashCommand } from "../../interfaces/SlashCommand";

export const Ping: SlashCommand = {
  name: "ping",
  description: "Return a ping.",
  run: async (client, interaction) => {
    const sent = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
    });

    return await interaction.editReply(
      `Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms`
    );
  },
};
