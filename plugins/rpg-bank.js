let handler = async (m, { conn, text, usedPrefix }) => {
  let user = global.db.data.users[m.sender]

  conn.sendMessage(m.chat, {
    text: `*You Bank Coin Player*
=============================

*Informasi Akun*
-----------------------

 *Pemilik :* @${m.sender.replace(/@.+/, '')}
 *Nama :* ${user.registered ? user.name : conn.getName(m.sender)}
 *Money :* Rp. ${user.money.toLocaleString('en-US')}
 *Bank :* Rp. ${user.bank.toLocaleString('en-US')}
 *Balance :* Rp. ${user.balance}
 *Status :* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
 *Registered :* ${user.registered ? 'Yes' : 'No'}\n

*Mengapa Harus Simpan Uang di Bank?*
Karena dengan menyimpan uang di bank akan mengamankan uang Anda dari player lain yang ingin mengambil uang Anda. Selain itu, Anda juga dapat menghindari kehilangan uang karena kesalahan atau kejahatan. Dengan menyimpan uang di bank, Anda dapat lebih tenang dan fokus pada permainan Anda. Jadi, simpan uang Anda di bank sekarang dan nikmati keamanan dan kenyamanan bermain!

*Ingat!* Simpan uang di bank membantu Anda mengamankan uang Anda, jangan lupa untuk simpan uang di bank!`,

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: "Your Bank",
        body: 'Request Fitur Hubungin Owner',
        thumbnailUrl: "https://telegra.ph/file/fc978622f1f7b2898d57a.jpg",
        sourceUrl: " ",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: floc })
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank|💳)$/i
handler.register = false

export default handler