const money = 499999
const exp = 20000
const diamond = 7
const limit = 23
const legendary = 3

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lasthadiah + 86400000
  if (new Date - global.db.data.users[m.sender].lasthadiah < 86400000) throw `Kamu Sudah Mengambilnya Hadiah Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi`
        global.db.data.users[m.sender].money += isPrems ? money : money
        global.db.data.users[m.sender].exp += isPrems ? exp : exp
        global.db.data.users[m.sender].diamond += isPrems ? diamond : diamond
        global.db.data.users[m.sender].limit += isPrems ? limit : limit
        global.db.data.users[m.sender].legendary += isPrems ? legendary : legendary
        conn.reply(m.chat, `Ini Hadiah Hadiah Kamu:\n\n+${isPrems ? money: money} Money\n+${isPrems ? exp : exp} EXP\n+${isPrems ? diamond : diamond} Diamond\n+${isPrems ? limit : limit} Limit\n+${isPrems ? legendary : legendary} Legendary`, m)
        global.db.data.users[m.sender].lasthadiah = new Date * 1
    }
handler.help = ['Hadiah']
handler.tags = ['rpg']
handler.command = /^(hadiah)$/i
handler.register = true

handler.fail = null

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " Hari " +  hours + " Jam " + minutes + " Menit"
}