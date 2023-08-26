// Sample HelloWorld command example
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('github')
    .setDescription(
      'Sends the link to the github.'
    ),

  async execute(interaction) {
    try {
      const { user } = interaction;
      // Send a direct message to the user
      //await user.send({ content: `World!` });

      // Respond in the channel the user sent the message in
      await interaction.reply(`https://github.com/EnderMaster77/JoseTheCow`);
    } catch (e) {
      console.log(`There was an error with the 'Github' command: ${e}`);
    }
  },
};
