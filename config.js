// Selamat datang di source code Tinasha Tuldar
// Terima kasih sudah mengunakan SC ini
// Terima kasih juga sudh mampir ke sc ku semoga kalian dpt inovasi baru (Untuk para sepuh).
// Jangan lupa subscribe Channel Ade Editz karna sc ini bakal saya update terus, dengan fitur yang gk pasaran.
// Mohon bantuanya semuanya... karna saya masih pemula.

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/// Setting Dari Sini
global.owner = [
  ['6282196995322', 'Rall', true],
  ['6283180588049', 'Iman', true]
]
global.mods = ['']
global.owner2 = ['6283180588049']
global.prems = []
global.nomorbot = '6288021371207'
global.nomorown = '6282196995322'
global.nomorown1 = '6283180588049'
global.nomorown2 = '6288021371207'
global.nomorwa = '6282196995322'
global.readMore = readMore
global.author = 'Gerall'
global.namebot = 'Rall'
global.wm = 'Gerall'
global.watermark = wm
global.wm2 = 'Rall'
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.bottime = `Time: ${wktuwib}`
global.titlebot = `Raja Iblis`
global.stickpack = 'Rall'
global.stickauth = `By yu\nDate: ${week} ${date}`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1 = 'Ponta Sensei' // Optional
global.nameown2 = 'Ponta Sensei' // Optional
global.thumb = 'https://telegra.ph/file/ca3b7b5955d1d34b9b133.jpg' // gambar di menu
global.registrasi = 'https://telegra.ph/file/2076e17c0b379228839ec.jpg'
global.thumb2 = 'https://telegra.ph/file/ca3b7b5955d1d34b9b133.jpg' // GAMBAR MENU 2
global.leave = 'https://i.postimg.cc/yxvn10Ls/ssstik-io-1689170610318.jpg' /// Untuk BG leave
global.floc = {
  "key": {
    "participant": "0@s.whatsapp.net",
    "remoteJid": "status@broadcast",
    "fromMe": false,
    "id": "Halo"
  },
  "message": {
    "conversation": "Tinasha Tuldar"
    }
  }

//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.myweb = 'https://alamsyah-tkj.github.io' //website
global.sig = 'https://www.instagram.com/lmsyah' //instagram
global.sgh = 'https://github.com/Gerall09' //github
global.sgc = 'https://whatsapp.com/channel/0029VaEyQ9mJkK7G5UV2vP0Qhttps://whatsapp.com/channel/0029VaAAkwOIN9ii1Tc6Mz1X' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://youtube.com/@Gerall13' 

global.pdana = '0882022376830' // Dana
global.povo = '-' // Ovo
global.pgopay = '0882022376830'

/// Api keys 
global.skizo = 'Your_apikey' // login ke website https://skizo.tech
/// TEXT
global.eror = "_Lagi error bang_"
global.stiker_wait = '*⫹⫺ Sticker sedang dibuat...*'
global.yue = '*⫹⫺ Tunggu sebentar sedang memuat...*'
global.wait = '_Processing, Please Wait...._'
global.eror = 'Eror, Mohon Coba Lagi Nanti'
global.lopr = '' //LOGO PREMIUM ON MENU.JS
global.lolm = '' //LOGO LIMIT/FREE ON MENU.JS
global.multiplier = 69

/*============== VERSION ==============*/
global.version = '1.2.0'
global.hwaifu = ['https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg']

global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

// The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      damage: '💥',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})