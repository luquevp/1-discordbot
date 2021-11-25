module.exports={
    name: 'commands',
    description: "this is a ping command",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('This is a embed ')
        .addFields(
            {name: '!commands', value: 'be nice'},
            {name: '!echaleunamano', value: 'be nice'},
            {name: '!echaleunojo', value: 'be nicssse'},


        )
        .setImage('https://s3-us-west-2.amazonaws.com/melingoimages/Images/14337.jpg')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send({embeds: [newEmbed]});
    

    }
}