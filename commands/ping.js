module.exports={
    name: 'fabioputo',
    description: "this is a ping command",
    execute(message,args){
        if(message.member.roles.cache.has('911819739876175873')){
        message.channel.send('')
        }else {
            message.channel.send('Parece que tenemos mucho en común :), serás agregado a mi partido :D');
            message.member.roles.add('911819739876175873').catch(console.error);
        }
    }
}