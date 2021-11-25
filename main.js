const Discord = require('discord.js');
const { NoSubscriberBehavior, joinVoiceChannel , createAudioPlayer ,createAudioResource , entersState , StreamType , AudioPlayerStatus , VoiceConnectionStatus} = require('@discordjs/voice');

const player = createAudioPlayer();
const superagent = require("superagent");


player.on('stateChange', (oldState, newState) => {
	if (oldState.status === AudioPlayerStatus.Idle && newState.status === AudioPlayerStatus.Playing) {
		console.log('Playing audio output on audio player');
	} else if (newState.status === AudioPlayerStatus.Idle) {
		console.log('Playback has stopped. Attempting to restart.');
	}
});

async function playSong() {
	const resource = createAudioResource('./resources/pedro.mp3', {
		inputType: StreamType.Arbitrary,
	});

	player.play(resource);

	return entersState(player, AudioPlayerStatus.Playing, 5e3);
}

async function connectToChannel(channel) {
	const connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		adapterCreator: channel.guild.voiceAdapterCreator,
	});
	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30_000);
		return connection;
	} catch (error) {
		connection.destroy();
		throw error;
	}
}





const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES"] })

// 

const prefix = '!'

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}




client.once('ready', () => {
    console.log('PVL is online!');
});


client.on('messageCreate', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'commands') {
        client.commands.get('commands').execute(message, args, Discord);

    } else if (command === 'echaleunojo') {
        client.commands.get('echaleunojo').execute(message, args, Discord);

    } else if (command === 'echaleunamano') {

        client.commands.get('echaleunamano').execute(message, args, Discord);

    }
    else if (command === 'fabiofulbo') {

        client.commands.get('fabiofulbo').execute(message, args, Discord);

    }
    else if (command === 'echaleunpañuelo') {

        client.commands.get('echaleunpañuelo').execute(message, args, Discord);

    }
    else if (command === 'echaleunbozal') {

        client.commands.get('echaleunbozal').execute(message, args, Discord);

    }
    else if (command === 'pedrito') {

        

                if (!message.guild) return;


                    const channel = message.member?.voice.channel;
            
                    if (channel) {
                        try {
                            const connection = await connectToChannel(channel);
                            connection.subscribe(player);
                            playSong();
                            message.reply('Playing now!');
                        } catch (error) {
                            console.error(error);
                        }
                    } else {
                        message.reply('Join a voice channel then try again!');
                    }
                
                
                
    }
    else if (command === 'g') {
        let query = args.join(" ");
        if (!query) return message.channel.send("No se ingresó ninguna búsqueda :(") ;

        let result = await superagent.get("https://customsearch.googleapis.com/customsearch/v1")
        .query({q: query, cx: "18752a12f876f0c49", key:"AIzaSyD0cWMZ96fyRrxMdKu0QO6_0UBxb-WvPdY"} );

        if (!result.body.items) return message.channel.send("No se encontraron resultados.");
        if (result.status >= 400) return message.channel.send("Error.").then(console.log(result.message));

        let res = result.body.items[0];
        const embed = new Discord.MessageEmbed()
        .setColor(0x7289DA)
        .setTitle(res.title)
        .setDescription(res.snippet)
        .setURL(res.link)   
        // if ( res.pagemap.cse_image[0] != undefined) {

            if (!(res.pagemap.cse_image[0].src).endsWith('gif') ) {
                embed.setImage(res.pagemap.cse_image[0].src || res.pagemap.cse_thumbnail[0].src)  
    
            }
        // }
       
        return message.channel.send({embeds: [embed]});
        

        
    }
    else if (command === 'translate') {
        client.commands.get('translate').execute(message, args, Discord);

    }
    else if (command === 'image') {
        client.commands.get('image').execute(message, args, Discord);

    }
   
   

});





client.login(process.env.token);