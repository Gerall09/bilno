let handler = async (m, { conn, usedPrefix }) => {
let health = global.db.data.users[m.sender].health
    let armor = global.db.data.users[m.sender].armor 
    let warn = global.db.data.users[m.sender].warn
    let diamond = global.db.data.users[m.sender].diamond
    let trash = global.db.data.users[m.sender].trash
    let ayambakar = global.db.data.users[m.sender].ayambakar
    let lelebakar = global.db.data.users[m.sender].lelebakar
    let aqua = global.db.data.users[m.sender].aqua
    let ayamgoreng = global.db.data.users[m.sender].ayamgoreng
    let rendang = global.db.data.users[m.sender].rendang
    let steak = global.db.data.users[m.sender].steak
    let babipanggang = global.db.data.users[m.sender].babipanggang
    let gulaiayam = global.db.data.users[m.sender].gulaiayam
    let oporayam = global.db.data.users[m.sender].oporayam
    let vodka = global.db.data.users[m.sender].vodka
    let sushi = global.db.data.users[m.sender].sushi
    let bandage = global.db.data.users[m.sender].bandage
    let ganja = global.db.data.users[m.sender].ganja
    let soda = global.db.data.users[m.sender].soda
    let roti = global.db.data.users[m.sender].roti
    let ikanbakar = global.db.data.users[m.sender].ikanbakar
    let nilabakar = global.db.data.users[m.sender].nilabakar
    let bawalbakar = global.db.data.users[m.sender].bawalbakar
    let udangbakar = global.db.data.users[m.sender].udangbakar
    let pausbakar = global.db.data.users[m.sender].pausbakar
    let kepitingbakar = global.db.data.users[m.sender].kepitingbakar
    let wood = global.db.data.users[m.sender].wood
    let coal = global.db.data.users[m.sender].coal
    let rock = global.db.data.users[m.sender].rock
    let emerald = global.db.data.users[m.sender].emerald
    let gold = global.db.data.users[m.sender].gold
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let gardenboxs = global.db.data.users[m.sender].gardenboxs
    let superior = global.db.data.users[m.sender].superior
    let cupon = global.db.data.users[m.sender].cupon
    let stamina = global.db.data.users[m.sender].stamina
    let level = global.db.data.users[m.sender].level
    let eris = global.db.data.users[m.sender].eris
    let exp = global.db.data.users[m.sender].exp
    let nabung = global.db.data.users[m.sender].nabung
    let bank = global.db.data.users[m.sender].bank
    let limit = global.db.data.users[m.sender].limit
    let iron = global.db.data.users[m.sender].iron
    let sword = global.db.data.users[m.sender].sword
    let string = global.db.data.users[m.sender].string
    let umpan = global.db.data.users[m.sender].umpan
    let apel = global.db.data.users[m.sender].apel
    let jeruk = global.db.data.users[m.sender].jeruk
    let anggur = global.db.data.users[m.sender].anggur
    let mangga = global.db.data.users[m.sender].mangga
    let pisang = global.db.data.users[m.sender].pisang
    let banteng = global.db.data.users[m.sender].banteng
    let harimau = global.db.data.users[m.sender].harimau
    let gajah = global.db.data.users[m.sender].gajah
    let kambing = global.db.data.users[m.sender].kambing
    let panda = global.db.data.users[m.sender].panda
    let buaya = global.db.data.users[m.sender].buaya
    let kerbau = global.db.data.users[m.sender].kerbau
    let sapi = global.db.data.users[m.sender].sapi
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let babi = global.db.data.users[m.sender].babi
    let ayam = global.db.data.users[m.sender].ayam
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk
    let bibitpisang = global.db.data.users[m.sender].bibitpisang
    let bibitanggur = global.db.data.users[m.sender].bibitanggur
    let bibitmangga = global.db.data.users[m.sender].bibitmangga
    let hiu = global.db.data.users[m.sender].hiu
    let paus = global.db.data.users[m.sender].paus
    let orca = global.db.data.users[m.sender].orca
    let dory = global.db.data.users[m.sender].dory
    let lumba = global.db.data.users[m.sender].lumba
    let buntal = global.db.data.users[m.sender].buntal
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let udang = global.db.data.users[m.sender].udang
    let lobster = global.db.data.users[m.sender].lobster
    let kepiting = global.db.data.users[m.sender].kepiting
    let who = m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = m.sender
    let sortederis = Object.entries(global.db.data.users).sort((a, b) => b[1].eris - a[1].eris)
    let sortedgardenboxs = Object.entries(global.db.data.users).sort((a, b) => b[1].gardenboxs - a[1].gardenboxs) 
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedtrash = Object.entries(global.db.data.users).sort((a, b) => b[1].trash - a[1].trash)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let userseris = sortederis.map(v => v[0])
    let str = `
Stock Makanan & Minuman *${await conn.getName(name)}*

\`Makanan & Minuman\`
* Aqua: ${aqua}
* AyamBakar: ${ayambakar}
* AyamGoreng: ${ayamgoreng}
* Lelebakar: ${lelebakar}
* Steak: ${steak}
* Sushi: ${sushi}
* IkanBakar: ${ikanbakar}`.trim()
conn.sendMessage(m.chat, {
text: str, 
contextInfo: {
externalAdReply: {
title: "s ᴛ ᴏ ᴄ ᴋ  ᴍ ᴀ ᴋ ᴀ ɴ ᴀ ɴ",
body: 'Request Fitur Hubungin Owner',
thumbnailUrl: 'https://telegra.ph/file/2d45483d8db34c81e0c9a.jpg', 
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}
},str: str},{quoted: m })
}
handler.help = ['stockmakanan']
handler.tags = ['rpg']
handler.command = /^(stock|stockmakanan|stockmakan|stokmakanan|stok|stokmakan)$/i
handler.group = false
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)