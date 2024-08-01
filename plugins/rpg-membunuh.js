// Import fungsi pickRandom dan clockString
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}

// Fungsi handler untuk perintah "membunuh"
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let dapat = Math.floor(Math.random() * 100000)
    let healtu = Math.floor(Math.random() * 100)
    let nomors = m.sender

    // Mencegah owner dari menjadi target
    if (m.sender === '6283857182374@s.whatsapp.net') {
        return conn.reply(m.chat, 'Anda tidak bisa membunuh pemilik', m)
    }

    // Cek apakah target ditag atau tidak
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return conn.reply(m.chat, 'Tag salah satu lah', m)

    if (typeof db.data.users[who] == 'undefined') return conn.reply(m.chat, 'Pengguna tidak ada didalam data base', m)
    let __timers = new Date() - global.db.data.users[m.sender].lastsda
    let _timers = 3600000 - __timers
    let timers = clockString(_timers)
    let users = global.db.data.users
    if (new Date() - global.db.data.users[m.sender].lastsda > 3600000) {
        if (users[who].health < 10) return conn.reply(m.chat, 'ᴛᴀʀɢᴇᴛ ꜱᴜᴅᴀʜ ᴛɪᴅᴀᴋ ᴍᴇᴍɪʟɪᴋɪ ʜᴇᴀʟᴛʜ💉', m)
        if (users[who].eris < 100) return conn.reply(m.chat, '💠ᴛᴀʀɢᴇᴛ ᴛɪᴅᴀᴋ ᴍᴇᴍɪʟɪᴋɪ ᴀᴘᴀᴘᴜɴ :(💠', m)
        users[who].health -= healtu
        users[who].eris -= dapat
        users[m.sender].eris += dapat
        global.db.data.users[m.sender].lastsda = new Date()
        return conn.reply(m.chat, `ᴛᴀʀɢᴇᴛ ʙᴇʀʜᴀꜱɪʟ ᴅɪ ʙᴜɴᴜʜ ᴅᴀɴ ᴋᴀᴍᴜ ᴍᴇɴɢᴀᴍʙɪʟ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ\n💰${dapat} ᴍᴏɴᴇʏ\nᴅᴀʀᴀʜ ᴛᴀʀɢᴇᴛ ʙᴇʀᴋᴜʀᴀɴɢ -${healtu} ʜᴇᴀʟᴛʜ❤`, m)
    } else {
        return conn.reply(m.chat, `Anda Sudah Membunuh Dan Berhasil Sembunyi, tunggu ${timers} untuk membunuh lagi`, m)
    }
}

// Menambahkan deskripsi dan tag untuk handler
handler.help = ['membunuh']
handler.tags = ['rpg']
handler.command = /^membunuh|bunuh$/
handler.register = true
handler.group = true
handler.rpg = true

export default handler