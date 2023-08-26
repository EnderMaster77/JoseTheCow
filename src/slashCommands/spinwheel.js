// Sample HelloWorld command example
const { SlashCommandBuilder } = require('@discordjs/builders');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spinwheel')
        .setDescription('Spins a wheel and randomly chooses up to 10 options you provide.')
        .addStringOption(option =>
            option.setName('f1')
                .setDescription('Option')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('f2')
                .setDescription('Option')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('f3')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f4')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f5')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f6')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f7')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f8')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f9')
                .setDescription('Option')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('f10')
                .setDescription('Option')
                .setRequired(false)),



    async execute(interaction) {
        try {
            var fieldarray = [];
            // First 2 Are mandatory.

            const field1 = interaction.options.getString('f1');
            fieldarray.push(field1);
            const field2 = interaction.options.getString('f2');
            fieldarray.push(field2);

            //If spam to check if fields are null.
            //TODO: Make this better.
            const field3 = interaction.options.getString('f3');
            if (field3 != null){
                fieldarray.push(field3);
            };
            const field4 = interaction.options.getString('f4');
            if (field4 != null){
                fieldarray.push(field4);
            };
            const field5 = interaction.options.getString('f5');
            if (field5 != null){
                fieldarray.push(field5);
            }
            const field6 = interaction.options.getString('f6');
            if (field6 != null){
                fieldarray.push(field6);
            }
            const field7 = interaction.options.getString('f7');
            if (field7 != null){
                fieldarray.push(field7);
            };
            const field8 = interaction.options.getString('f8');
            if (field8 != null){
                fieldarray.push(field8);
            };
            const field9 = interaction.options.getString('f9');
            if (field9 != null){
                fieldarray.push(field9);
            }
            const field10 = interaction.options.getString('f10');
            if (field10 != null){
                fieldarray.push(field10);
            }
            
            


            await interaction.reply(`${fieldarray[getRandomInt(fieldarray.length)]} Won out of the following: ${fieldarray}`);
        } catch (e) {
            console.log(`There was an error with the 'SpinWheel' command: ${e}`);
            await interaction.reply(`There was an error with the 'SpinWheel' command: ${e}`)
        }
    },
};
