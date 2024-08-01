import { createHash } from 'crypto'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let namanya = conn.getName(m.sender)
let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let md = `Ketik Yang Bener Dong Kak!!\nContoh : .daftar ponta.18`

  let user = global.db.data.users[m.sender]
  const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "https://telegra.ph/file/ee60957d56941b8fdd221.jpg")
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <nomer sn>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, {text: md}, {quoted: m})
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong'
  if (!age) throw 'Umur tidak boleh kosong'
  age = parseInt(age)
  if (age > 100) throw 'WOI TUA (。-`ω´-)'
  if (age < 1) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
╭─「 Status 」
│❐ Nama: ${name}
│❐ Umur: ${age} tahun
│❐ Sn: ${sn}
╰────────────┈ ⳹`  
await conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key,
        }
    })
    
await conn.sendMessage(m.chat, {
text: `╭─「 Status 」
│◉ sᴛᴀᴛᴜs: ☑️ sᴜᴄᴄᴇssғᴜʟ
│◉ ɴᴀᴍᴀ: ${name}
│◉ ᴜᴍᴜʀ: ${age} ʏᴇᴀʀs
╰────────────┈ ⳹
 ◉ sɴ: ${sn}
 
 ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ʙᴀᴄᴀ ʀᴜʟᴇs ʏᴀ ᴋᴀᴋ...
ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ 📁\n*.allmenu [Menampilkan Semua Fitur]*

⻝ 𝗗𝗮𝘁𝗲: ${week} ${date}
⻝ 𝗧𝗶𝗺𝗲: ${wktuwib}
`, 
contextInfo: {
externalAdReply: {
title: " ✅ Succes Daftar Kedalam Database",
body: 'Sekarang Kamu Bisa Menggunakan Fiturku',
thumbnailUrl: pp,
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}
}})
}
handler.help = ['daftar']
handler.tags = ['main', 'users']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler