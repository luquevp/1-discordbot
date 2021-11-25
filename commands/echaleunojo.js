module.exports={
    name: 'echaleunojo',
    description: "Echaste un ojo a Fabio y está agradecido.",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Echaste un ojo a Fabio.')
        .setDescription('Fabio está agradecido')
        .setImage('https://cdn.discordapp.com/attachments/836405476946214935/911850438784073728/3BCEB5E1-2FAC-4237-AE7C-7EFEB14E7F96.jpg')

        message.channel.send({embeds: [newEmbed]});
    

    }
}