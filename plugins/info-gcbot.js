let handler = async (m, { conn, text, command }) =>  
m.reply(`Join Grup Kami Untuk Mendapatkan Info Tentang Bot, Kalau Seakan-akan terkena banned.

Link Grup:   https://chat.whatsapp.com/CZy0SzJKnfoLib7ICMjS4e

Link Saluran:   https://whatsapp.com/channel/0029VaAAkwOIN9ii1Tc6Mz1X

...`)

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot|groupbot|grupbot|botgc|botgroup|botgrup|gc\sbot)$/i
export default handler