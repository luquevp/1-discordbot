module.exports={
    name: 'fabiofulbo',
    description: "Fabio hizo un golazo.",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Fabio dando lastima')
        .setDescription('')
        .setImage('https://cdn.discordapp.com/attachments/873063817024770099/892525619232014408/IMG-0762.gif')

        message.channel.send({embeds: [newEmbed]});
    

    }
}