import {
  CommandInteraction,
  ChatInputApplicationCommandData,
  Client,
} from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
  usage?: string;
  run: (client: Client, interaction: CommandInteraction) => void;
}
