let handler = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (!chat.isBanned) return m.reply(`Bot belum di-mute, tidak perlu di-unmute! `) 
    global.db.data.chats[m.chat].isBanned = false
    m.reply('Berhasil menghapus mute di group ini!')
}
handler.help = ['unmute']
handler.tags = ['group']
handler.command = /^(unmute)$/i

handler.botAdmin = true
handler.admin = true
handler.group = true

export default handler