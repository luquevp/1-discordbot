module.exports={
    name: 'echaleunpañuelo',
    description: "Echaste un pañuelo a Juli.",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Le diste un pañuelo a Juli y dejó de llorar')
        .setDescription('Juli está agradecido.')
        .setImage('https://cdn.discordapp.com/attachments/836405476946214935/911845799636389898/DD069312-ECAA-44EC-8085-701647E60966.jpg')

        message.channel.send({embeds: [newEmbed]});
    

    }
}