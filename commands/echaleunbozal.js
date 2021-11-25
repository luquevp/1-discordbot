module.exports={
    name: 'echaleunbozal',
    description: "Echaste un bozal a Santi y se calló durante 30 segundos.",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Echaste un bozal a Santi y se calló durante 30 segundos.')
        .setDescription('El discord está agradecido.')
        .setImage('https://cdn.discordapp.com/attachments/836405476946214935/911847909807517726/21AB7B4D-4468-4469-9F65-EA26A35C7D78.jpg')

        message.channel.send({embeds: [newEmbed]});
    

    }
}