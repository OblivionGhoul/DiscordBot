const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
    commands: ['uwu'],
    callback: async (message, args, arguments, client) => {
        axios.get(`https://kawaii.red/api/gif/uwu/token=${process.env.kawaiiAPI}`)
            .then(function (response) {
                message.channel.send(response.data.response)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
}