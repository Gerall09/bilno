import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command, user }) => {
    const notStickerMessage = `Reply sticker with command *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    let name = await conn.getName(m.sender)
    await conn.sendFile(m.chat, out, 'out.png', 'Request By ' + name, m)
}

handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
handler.limit = true;

export default handler