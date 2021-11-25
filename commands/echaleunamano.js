module.exports={
    name: 'echaleunamano',
    description: "Echaste una mano a Darka y está agradecido.",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Muchas gracias hermano.')
        .setDescription('Le diste una mano a Darka y está agradecido.')
        .setImage('https://cdn.discordapp.com/attachments/836405476946214935/911849312231768074/81CA424C-0729-4732-89F8-11C1BAF2629F.jpg')
        .setFooter('Ahora podrá hacerse una paja normal :´) ');

        message.channel.send({embeds: [newEmbed]});
    

    }
}