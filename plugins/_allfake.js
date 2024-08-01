import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
    let level = db.data.users[m.sender].level
	let pp = 'https://telegra.ph/file/98a83fcdfdbea8be6d6b7.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// ucapan ini mah
		global.ucapan = ucapan()

		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
            contextInfo: {
      isForwarded: true, 
      forwardingScore: 10,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363199602506586@newsletter',
        serverMessageId: -1, 
        newsletterName: '🔮 My Channel WhatsApp'
      }
    }
		}
		
		global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           documentMessage: {
                           title: 'Yue Bot Premium', 
                           jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
               
	}
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}