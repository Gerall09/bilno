const timeout = 1800000

let handler = async (m, { conn, usedPrefix, args, text }) => {
    const tag = '@' + m.sender.split`@`[0]
    let type = (args[0] || '').toLowerCase()
    
    switch (type) {
       case 'sampah':
		let time = global.db.data.users[m.sender].lastmulung + 1800000
       		if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) throw `Kamu Sudah Lelah\nTunggu Selama ${msToTime(time - new Date())} Lagi`
		let botol = `${Math.floor(Math.random() * 1000)}`.trim()
	    let kaleng = `${Math.floor(Math.random() * 1000)}`.trim()
		let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
		let gelas = `${Math.floor(Math.random() * 1000)}`.trim()
		let plastik = `${Math.floor(Math.random() * 1000)}`.trim()
  conn.reply(m.chat, `Selamat Kak ${tag}, Mendapatkan : 
🍼 Botol: +${botol}
🍾 Kaleng: +${kaleng}
📦 Kardus: +${kardus}
🍶 Gelas: +${gelas}
🥡 Plastik: +${plastik}
Cek Hasil Mulung  *.karung*`, floc)
	
		global.db.data.users[m.sender].botol += botol * 1
		global.db.data.users[m.sender].kaleng += kaleng * 1
		global.db.data.users[m.sender].kardus += kardus * 1
		global.db.data.users[m.sender].gelas += gelas * 1
		global.db.data.users[m.sender].plastik += plastik * 1
	
		global.db.data.users[m.sender].lastmulung = new Date * 1
setTimeout(() => {
	conn.reply(m.chat, `Yuk Waktunya Mulung Lagi…`, m)
	}, timeout)
		break
	default:
		return m.reply(`*‼️ Format anda salah*\nketik  .mulung sampah`)
	}
}
handler.help = ['mulung sampah']
handler.tags = ['rpg']
handler.command = /^(mulung)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.register = true
handler.exp = 0
handler.money = 0

export default handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}