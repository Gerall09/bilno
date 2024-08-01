import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
//let usernya = 'https://telegra.ph/file/b1e431f99ebd4f91e1953.png'
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `乂 *D A T A B A S E* 乂\n\n🗂 *Database Saat Ini ${totalreg} User*\n📊 *Terdaftar Saat Ini ${rtotalreg} User*`
    await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: null * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: kon,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['user']
handler.tags = ['main','info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

export default handler