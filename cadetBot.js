const Discord = require('discord.js')
const client = new Discord.Client()

const { token } = require('./config.json')
const { botID } = require('./config.json')
const { prefix } = require('./config.json')

const { gmHierarchy } = require('./config.json')
const { ctHierarchy } = require('./config.json')
const { threeHierarchy } = require('./config.json')
const { twoHierarchy } = require('./config.json')
const { ceHierarchy } = require('./config.json')
const { gcHierarchy } = require('./config.json')
const { cgHierarchy } = require('./config.json')
const { fiveHierarchy } = require('./config.json')
const { sevenHierarchy } = require('./config.json')
const { duHierarchy } = require('./config.json')

const { gmMember} = require('./config.json')
const { ctMember } = require('./config.json')
const { threeMember } = require('./config.json')
const { twoMember } = require('./config.json')
const { ceMember } = require('./config.json')
const { gcMember } = require('./config.json')
const { cgMember } = require('./config.json')
const { fiveMember } = require('./config.json')
const { sevenMember } = require('./config.json')
const { duMember } = require('./config.json')
const { viableChannel } = require('./config.json')

const test = "738032376545804368"//For Test reasons still in will be deleted in final version
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
    console.log(message.channel.name)
    const { id } = message.author
    const channelName = message.channel.name

    if (channelName === viableChannel) {
        if (!message.mentions.roles.first() && id !== botID) {

            const channel = message.channel

            if (message.member.roles.cache.some(role => role.id === gmMember )) {
                channel.send(`<@&${gmHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === ctMember)) {
                channel.send(`<@&${ctHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === threeMember)) {
                channel.send(`<@&${threeHierarchy}>`)
            }   

            else if (message.member.roles.cache.some(role => role.id === twoMember )) {
                channel.send(`<@&${twoHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === ceMember)) {
                channel.send(`<@&${ceHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === gcMember)) {
                channel.send(`<@&${gcHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === cgMember )) {
                channel.send(`<@&${cgHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === fiveMember)) {
                channel.send(`<@&${fiveHierarchy}>`)
            }
            
            else if (message.member.roles.cache.some(role => role.id === sevenMember)) {
                channel.send(`<@&${sevenHierarchy}>`)
            }

            else if (message.member.roles.cache.some(role => role.id === duMember)) {
                channel.send(`<@&${duHierarchy}>`)
            }
            //For Test reasons still in will be deleted in final version
            else if (message.member.roles.cache.some(role => role.id === "738032327736688692")) {
                channel.send(`<@&${test}>`)
        }   }
    }
})

client.login(token)