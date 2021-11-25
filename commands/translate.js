const traductor = require("@iamtraction/google-translate");

module.exports={
    name: 'translate',
    description: "",
    execute(message,args, Discord){
        // const query = args.join(" ");
        // if (!query) return message.reply("pplsss");

        // const translated = translate(query, {to: 'es'});
        // message.channel.send(translated.text)
    
        const idioma = args[0];
        if (!idioma) {
            return message.channel.send("debes seleccionar idioma");
        }
        const texto = args.slice(1).join(" ");
        if (!texto) {
            return message.channel.send("debes de decir que texto traducir")

            
        }

        traductor(texto,{
             to:idioma
            }).then(res =>{const embed = new Discord.MessageEmbed()
            .setTitle("traductor")
            .addField('Texto', texto)
            .addField('Texto traducido', res.text)
            .setColor("BLUE")
            message.channel.send({embeds: [embed]})
         } )


    }
}