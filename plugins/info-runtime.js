import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

function clockString(ms) {
  if (isNaN(ms)) return '--'

  let days = Math.floor(ms / (1000 * 60 * 60 * 24))
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((ms % (1000 * 60)) / 1000)

  return `${days}d   ${hours}h   ${minutes}m   ${seconds}s`
}

let handler = async (m, { conn, args, command }) => {
  try {
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(() => resolve('--'), 1000)  // Tambahkan timeout sebagai cadangan jika tidak ada respons
      }) * 1000
    } else {
      _muptime = '--'  // Tambahkan nilai default jika tidak ada kemampuan untuk mengukur uptime
    }

    let muptime = clockString(_muptime)
    let tag = `@${m.sender.replace(/@.+/, '')}`
    let mentionedJid = [m.sender]

    m.reply(`\n乂 *U P T I M E*\n\n${muptime}\n\n${ucapan()}\n`)
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan dalam menghitung waktu uptime.')
  }
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}