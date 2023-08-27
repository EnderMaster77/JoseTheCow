// Sample HelloWorld command example
const { SlashCommandBuilder } = require('@discordjs/builders');
const figlet = require('figlet');


module.exports = {
  data: new SlashCommandBuilder().setName('asciiart')
    .setDescription('Converts text to ascii art.')
    .addStringOption(option => option.setName('text')
      .setDescription('Text to convert.')
      .setRequired(true)),

  async execute(interaction) {
    try {
      var test = null;
      const text = interaction.options.getString('text');

      //This works
      figlet(text, function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(data);
        if (text.length > 20){
          interaction.reply("Prompt above 20 character limit.")
        }
        else{
        interaction.reply('```' + data + '```')
        }
      })
    } catch (e) {
      console.log(`There was an error with the 'AsciiArt' command: ${e}`);
    }
  }
};