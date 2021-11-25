module.exports={
    name: 'commands',
    description: "this is a ping command",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Comandos')
        .setDescription('Comandos actualmente funcionales. ')
        .addFields(
            {name: '!commands', value: 'Comandos para el bot :)'},
            {name: '!anuncio', value: 'Campaña PVL'},
            // {name: '!img', value: 'Comando para buscar una imagen random de Google con el argumento ingresado, prueben con pija xd'},
            {name: '!tr', value: 'Comando para traducir texto ingresado a lenguaje especifico(!tr en hola = hello)'},
            // {name: '!g', value: 'Arroja el primer resultado de google con el argumento ingresado, similar a "Estoy de suerte".'},
            {name: '!echaleunamano', value: 'Echas una mano a Darka.'},
            {name: '!echaleunojo', value: 'Echas un ojo a Bifrost.'},
            {name: '!echaleunpañuelo', value: 'Echas un pañuelo a Juli.'},
            {name: '!echaleunbozal', value: 'Echas un bozal a Pepe Grillo.'},
            {name: '!fabiofulbo', value: 'Fabio dando lástima.'},
            {name: '!pedrito', value: 'Probablemente la mejor función de este bot.'},







        )
        .setImage('https://cdn.discordapp.com/attachments/836405476946214935/913248298125647982/vl_1.png')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send({embeds: [newEmbed]});
    

    }
}