import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let txt = `*乂  B O T  -  F E A T U R E*\n\n`
      txt += `	• *ᴛᴏᴛᴀʟ ғᴇᴀᴛᴜʀᴇ* : ${fitur.length}\n`
      txt += `    • *ᴄʀᴇᴀᴛᴏʀ* : ᴘᴏɴᴛᴀ sᴇɴsᴇɪ\n`
      txt += `© Tinasha Tuldar`
   await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 1500000 * 1000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: txt,
      contextInfo: {
      mentionedJid: [who],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.tags = ['main']
handler.command = /^(totalfitur|totalfeature|totalcmd)$/i
export default handler