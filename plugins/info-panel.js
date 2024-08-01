import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  let name = conn.getName(m.sender)
  const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
let sub = `*Hi @${sender.split("@")[0]} 👋*

Kami Menjual panel mulai dari 1GB sampai Unli mulai dari 1k sampai 10k, Dan kami juga menyewakan bot juga Kalau kalian ingin membeli premium juga bisa loh harga juga ramah mulai dari 15k sampai 50k\n\nApakah kamu tertarik dan Ingin membeli? Chat owner..\n\n• Nomer Owner: ${global.nomorown}
• Power BY *Ponta hosting*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
 await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 7000 * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: sub,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
  }

handler.help = ['panel']
handler.tags = ['info']
handler.command = /^(listpanel|panel)$/i;
export default handler