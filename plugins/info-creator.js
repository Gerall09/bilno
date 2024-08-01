import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `Ponta Sensei `, `Pintar Cari Cewek`, `tomoechan21@gmail.com`, `Isekai The Villain`, `wa.me/6283857182374`, `Ponta Developer Tinasha`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Don't Spam`, `Nothing`, `Indonesia`, `https://whatsapp.com`, `Bot MultiDevice, easy for using`]
  ], floc)
  await conn.reply(m.chat, `Hallo kak ${name} ini ownerku:!`, sentMsg)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler