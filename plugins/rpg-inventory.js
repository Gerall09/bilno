let handler = async (m, { conn, usedPrefix }) => {
let health = global.db.data.users[m.sender].health.toLocaleString()
    let armor = global.db.data.users[m.sender].armor.toLocaleString()
    let viewers = global.db.data.users[m.sender].viewers.toLocaleString()
    let like = global.db.data.users[m.sender].like.toLocaleString()
    let subscribers = global.db.data.users[m.sender].subscribers.toLocaleString()
    let tiketcn = global.db.data.users[m.sender].tiketcn.toLocaleString()
    let pistol = global.db.data.users[m.sender].pistol
    let peluru = global.db.data.users[m.sender].peluru.toLocaleString()
    let armordurability = global.db.data.users[m.sender].armordurability.toLocaleString()
    let sworddurability = global.db.data.users[m.sender].sworddurability.toLocaleString()
    let katanadurability = global.db.data.users[m.sender].katanadurability.toLocaleString()
    let katana = global.db.data.users[m.sender].katana
    let pet = global.db.data.users[m.sender].pet.toLocaleString()
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let warn = global.db.data.users[m.sender].warn.toLocaleString()
    let diamond = global.db.data.users[m.sender].diamond.toLocaleString()
    let trash = global.db.data.users[m.sender].trash.toLocaleString()
    let ayambakar = global.db.data.users[m.sender].ayambakar.toLocaleString()
    let lelebakar = global.db.data.users[m.sender].lelebakar.toLocaleString()
    let aqua = global.db.data.users[m.sender].aqua.toLocaleString()
    let ayamgoreng = global.db.data.users[m.sender].ayamgoreng.toLocaleString()
    let rendang = global.db.data.users[m.sender].rendang.toLocaleString()
    let steak = global.db.data.users[m.sender].steak.toLocaleString()
    let babipanggang = global.db.data.users[m.sender].babipanggang.toLocaleString()
    let gulaiayam = global.db.data.users[m.sender].gulaiayam.toLocaleString()
    let oporayam = global.db.data.users[m.sender].oporayam.toLocaleString()
    let vodka = global.db.data.users[m.sender].vodka.toLocaleString()
    let sushi = global.db.data.users[m.sender].sushi.toLocaleString()
    let bandage = global.db.data.users[m.sender].bandage.toLocaleString()
    let ganja = global.db.data.users[m.sender].ganja.toLocaleString()
    let soda = global.db.data.users[m.sender].soda.toLocaleString()
    let roti = global.db.data.users[m.sender].roti.toLocaleString()
    let ikanbakar = global.db.data.users[m.sender].ikanbakar.toLocaleString()
    let nilabakar = global.db.data.users[m.sender].nilabakar.toLocaleString()
    let bawalbakar = global.db.data.users[m.sender].bawalbakar.toLocaleString()
    let udangbakar = global.db.data.users[m.sender].udangbakar.toLocaleString()
    let pausbakar = global.db.data.users[m.sender].pausbakar.toLocaleString()
    let kepitingbakar = global.db.data.users[m.sender].kepitingbakar.toLocaleString()
    let wood = global.db.data.users[m.sender].wood.toLocaleString()
    let coal = global.db.data.users[m.sender].coal.toLocaleString()
    let rock = global.db.data.users[m.sender].rock.toLocaleString()
    let emerald = global.db.data.users[m.sender].emerald.toLocaleString()
    let gold = global.db.data.users[m.sender].gold.toLocaleString()
    let potion = global.db.data.users[m.sender].potion.toLocaleString()
    let common = global.db.data.users[m.sender].common.toLocaleString()
    let uncommon = global.db.data.users[m.sender].uncommon.toLocaleString()
    let mythic = global.db.data.users[m.sender].mythic.toLocaleString()
    let makananpet = global.db.data.users[m.sender].makananpet.toLocaleString()
    let makanannaga = global.db.data.users[m.sender].makanannaga.toLocaleString()
    let makananphonix = global.db.data.users[m.sender].makananphonix.toLocaleString()
    let makanangriffin = global.db.data.users[m.sender].makanangriffin.toLocaleString()
    let makanankyubi = global.db.data.users[m.sender].makanankyubi.toLocaleString()
    let makanancentaur = global.db.data.users[m.sender].makanancentaur.toLocaleString()
    let legendary = global.db.data.users[m.sender].legendary.toLocaleString()
    let gardenboxs = global.db.data.users[m.sender].gardenboxs.toLocaleString()
    let superior = global.db.data.users[m.sender].superior.toLocaleString()
    let cupon = global.db.data.users[m.sender].cupon.toLocaleString()
    let stamina = global.db.data.users[m.sender].stamina.toLocaleString()
    let level = global.db.data.users[m.sender].level.toLocaleString()
    let money = global.db.data.users[m.sender].money.toLocaleString()
    let exp = global.db.data.users[m.sender].exp.toLocaleString()
    let nabung = global.db.data.users[m.sender].nabung
    let bank = global.db.data.users[m.sender].bank.toLocaleString()
    let limit = global.db.data.users[m.sender].limit.toLocaleString()
    let iron = global.db.data.users[m.sender].iron.toLocaleString()
    let sword = global.db.data.users[m.sender].sword.toLocaleString()
    let string = global.db.data.users[m.sender].string.toLocaleString()
    let umpan = global.db.data.users[m.sender].umpan.toLocaleString()
    let apel = global.db.data.users[m.sender].apel.toLocaleString()
    let jeruk = global.db.data.users[m.sender].jeruk.toLocaleString()
    let anggur = global.db.data.users[m.sender].anggur.toLocaleString()
    let mangga = global.db.data.users[m.sender].mangga.toLocaleString()
    let pisang = global.db.data.users[m.sender].pisang.toLocaleString()
    let banteng = global.db.data.users[m.sender].banteng.toLocaleString()
    let harimau = global.db.data.users[m.sender].harimau.toLocaleString()
    let gajah = global.db.data.users[m.sender].gajah.toLocaleString()
    let kambing = global.db.data.users[m.sender].kambing.toLocaleString()
    let panda = global.db.data.users[m.sender].panda.toLocaleString()
    let buaya = global.db.data.users[m.sender].buaya.toLocaleString()
    let kerbau = global.db.data.users[m.sender].kerbau.toLocaleString()
    let sapi = global.db.data.users[m.sender].sapi.toLocaleString()
    let monyet = global.db.data.users[m.sender].monyet.toLocaleString()
    let babihutan = global.db.data.users[m.sender].babihutan.toLocaleString()
    let babi = global.db.data.users[m.sender].babi.toLocaleString()
    let ayam = global.db.data.users[m.sender].ayam.toLocaleString()
    let bibitapel = global.db.data.users[m.sender].bibitapel.toLocaleString()
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk.toLocaleString()
    let bibitpisang = global.db.data.users[m.sender].bibitpisang.toLocaleString()
    let bibitanggur = global.db.data.users[m.sender].bibitanggur.toLocaleString()
    let bibitmangga = global.db.data.users[m.sender].bibitmangga.toLocaleString()
    let hiu = global.db.data.users[m.sender].hiu.toLocaleString()
    let paus = global.db.data.users[m.sender].paus.toLocaleString()
    let orca = global.db.data.users[m.sender].orca.toLocaleString()
    let dory = global.db.data.users[m.sender].dory.toLocaleString()
    let lumba = global.db.data.users[m.sender].lumba.toLocaleString()
    let buntal = global.db.data.users[m.sender].buntal.toLocaleString()
    let gurita = global.db.data.users[m.sender].gurita.toLocaleString()
    let cumi = global.db.data.users[m.sender].cumi.toLocaleString()
    let udang = global.db.data.users[m.sender].udang.toLocaleString()
    let lobster = global.db.data.users[m.sender].lobster.toLocaleString()
    let kepiting = global.db.data.users[m.sender].kepiting.toLocaleString()
    let tiketcoin = global.db.data.users[m.sender].tiketcoin.toLocaleString()
    let tiketm = global.db.data.users[m.sender].healtmonster.toLocaleString()
    let hero = global.db.data.users[m.sender].hero
    let exphero = global.db.data.users[m.sender].exphero.toLocaleString()
    let botol = global.db.data.users[m.sender].botol.toLocaleString()
    let kaleng = global.db.data.users[m.sender].kaleng.toLocaleString()
    let kardus = global.db.data.users[m.sender].kardus.toLocaleString()
    let gelas = global.db.data.users[m.sender].gelas.toLocaleString()
    let plastik = global.db.data.users[m.sender].plastik.toLocaleString()
    let ramuan = global.db.data.users[m.sender].ramuan.toLocaleString()
    let pancingan = global.db.data.users[m.sender].pancingan
    let role = global.db.data.users[m.sender].role
    let skill = global.db.data.users[m.sender].skill
    let damage = global.db.data.users[m.sender].damage.toLocaleString()
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pickaxedurability = global.db.data.users[m.sender].pickaxedurability.toLocaleString()
    let pancingandurability = global.db.data.users[m.sender].pancingandurability.toLocaleString()
    let who = m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = m.sender
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedgardenboxs = Object.entries(global.db.data.users).sort((a, b) => b[1].gardenboxs - a[1].gardenboxs) 
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedtrash = Object.entries(global.db.data.users).sort((a, b) => b[1].trash - a[1].trash)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let str = 
    conn.sendMessage(m.chat, {
text: `
\`Inventory ${await conn.getName(name)}\`

* ❤ Health:   *${health}/500*
* 🌀 Stamina:   *${stamina}/250*
* 🧥 Armor:   *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*
* ⚔️ Sword:   *${sword == 0 ? 'Tidak Punya' : '' || sword == 1 ? 'Wooden Sword' : '' || sword == 2 ? 'Iron Sword' : '' || sword == 3 ? 'Gold Sword' : '' || sword == 4 ? 'Diamond Sword' : '' || sword == 5 ? 'Netherite Sword' : ''}*
* 🗡️ Katana:   *${katana == 0 ? 'Tidak Punya' : '' || katana == 1 ? 'Fubuki' : '' || katana == 2 ? 'Koyuki' : '' || katana == 3 ? 'Mizore' : '' || katana == 4 ? 'Shigure' : '' || katana == 5 ? 'Yukikaze' : ''}*
* 🛡️ ArmorDurability:   *${armordurability}/250*
* 🛡️ SwordDurability:   *${sworddurability}/250*
* 🛡️ KatanaDurability:   *${katanadurability}/250*
* 🔫 Pistol:   *${pistol ? 'Use ✅' : 'Tidak Punya'}*
* 🪡 Peluru:   *${peluru}*
* ⛏️ Pickaxe:   *${pickaxe ? 'Use ✅' : 'Tidak Punya'}*
* 🔖 Limit:   *${limit}*
* 📊 Level:   *${level}*
* 🎫 Tiketcn:   *${tiketcn}*
* 🪙 Tiketcoin:   *${tiketcoin}*
* 🪙 Tiketm:   *${tiketm}*
 
\`Your Rangking\`
* 🎖️ Role:   *${role}*
* 📊 Level:   *${level}*
* 🎗 Skill:   *${skill}*
* 🧪 Exp:   *${exp}*
* 💥 Damage:   *${damage}*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 
\`Keuangan\`
* 💰 Money:   *${money}*
* 💳 Bank:.  *${bank}*
 
\`Sosial Media\`
* 🔮 Subscribers:   *${subscribers}*
* 👍🏻 Like:   *${like}*
* 💬 Viewer:   *${viewers}*

\`Inventory Kotak Harta\`
* 📦 Common:   *${common}*
* 📦 Uncommon:   *${uncommon}*
* 👑 Mythic:   *${mythic}*
* 💎 Legendary:   *${legendary}*
* 💍 Gardenboxs:   *${gardenboxs}*
* 🏷 Superior:   *${superior}*
* 🐶 Pet:   *${pet}*
* 🏷 Cupon:   *${cupon}*

* 🎣 Pancingan:   *${pancingan ? 'Use ✅' : 'Tidak Punya'}*
* 🛡 PancinganDurability:   *${pancingandurability}/250*
* 🪱 Umpan:   *${umpan}*

\`Inventory Nambang\`
* 💎 Diamond:   ${diamond}
* 🪙 Gold:   *${gold}*
* 💚 Emerald:   *${emerald}*
* 🧪 Potion:   *${potion}*
* 🧪 Ramuan:   *${ramuan}*
* 🗑️ Trash:   *${trash}*
* 🪵 Wood:   *${wood}*
* ⚙️ Iron:   *${iron}*
* 🪨 Rock:   *${rock}*
* 🧶 String:   *${string}*
* ⚫️ Coal:   *${coal}*
* 🥗 Makanan Pet:   *${makananpet}*
* 🥗 Makanan Phonix:   *${makananphonix}*
* 🥗 Makanan Naga:   *${makanannaga}*
* 🥗 Makanan Griffin:   *${makanangriffin}*
* 🥗 Makanan Kyubi:   *${makanankyubi}*
* 🥗 Makanan Centaur:   *${makanancentaur}*

Total inv:   *${diamond + potion + trash + wood + sword + iron + string + makananpet + makananphonix + makanannaga + makanangriffin + makanankyubi + makanancentaur}* item

\`Hasil Mulung}\`
* 🍼 Botol:   ${botol}
* 🍾 Kaleng:   ${kaleng}
* 📦 Kardus:   ${kardus}
* 🍶 Gelas:   ${gelas}
* 🥡 Plastik:   ${plastik}

\`Makanan & Minuman\`
* 🥤 Aqua:   ${aqua}
* 🍗 AyamBakar:   ${ayambakar}
* 🍗 AyamGoreng:   ${ayamgoreng}
* 🍢 Lelebakar:   ${lelebakar}
* 🥩 Steak:   ${steak}
* 🍣 Sushi:   ${sushi}
* 🐟 IkanBakar:   ${ikanbakar}

\`Inventory Buah\`
* 🍎 Apel:   ${apel}
* 🍊 Jeruk:   ${jeruk}
* 🍌 Pisang:   ${pisang}
* 🍇 Anggur:   ${anggur}
* 🥭 Mangga:   ${mangga}

\`Inventory Bibitbuah\`
* 🌾 Bibitapel:   ${bibitapel}
* 🌾 Bibitjeruk:   ${bibitjeruk}
* 🌾 Bibitpisang:   ${bibitpisang}
* 🌾 Bibitanggur:   ${bibitanggur}
* 🌾 Bibitmangga:   ${bibitmangga}

\`Inventory Hewan\`
* 🐂 Banteng:   ${banteng} 
* 🐅 Harimau:   ${harimau} 
* 🐘 Gajah:   ${gajah} 
* 🐐 Kambing:   ${kambing} 
* 🐼 Panda:   ${panda} 
* 🐊 Buaya:   ${buaya} 
* 🐃 Kerbau:   ${kerbau}
* 🐄 Sapi:   ${sapi} 
* 🐒 Monyet:   ${monyet} 
* 🐖 Babi Hutan:   ${babihutan} 
* 🐖 Babi:   ${babi} 
* 🐓 Ayam:   ${ayam} 

\`Inventory Ikan\`
* 🦈 Hiu:   ${hiu}
* 🐋 Paus:   ${paus}
* 🐳 Orca:   ${orca}
* 🐬 Dory:   ${dory}
* 🐬 Lumba:   ${lumba}
* 🐡 Buntal:   ${buntal}
* 🐙 Gurita:   ${gurita}
* 🐙 Cumi:   ${cumi}
* 🦐 Udang:   ${udang}
* 🦞 Lobster:   ${lobster}
* 🦀 Kepiting:   ${kepiting}

\`Hero\`
* 🤺 My Hero:   *${hero == 0 ? 'Tidak Punya' : '' || hero == 1 ? 'Level 1' : '' || hero == 2 ? 'Level 2' : '' || hero == 3 ? 'Level 3' : '' || hero == 4 ? 'Level 4' : '' || hero == 5 ? 'Level 5' : '' || hero == 6 ? 'Level 6' : '' || hero == 7 ? 'Level 7' : '' || hero == 8 ? 'Level 8' : '' || hero == 9 ? 'Level 9' : '' || hero == 10 ? 'Level 10' : '' || hero == 11 ? 'Level 11' : '' || hero == 12 ? 'Level 12' : '' || hero == 13 ? 'Level 13' : '' || hero == 14 ? 'Level 14' : '' || hero == 15 ? 'Level 15' : '' || hero == 16 ? 'Level 16' : '' || hero == 17 ? 'Level 17' : '' || hero == 18 ? 'Level 18' : '' || hero == 19 ? 'Level 19' : '' || hero == 20 ? 'Level 20' : '' || hero == 21 ? 'Level 21' : '' || hero == 22 ? 'Level 22' : '' || hero == 23 ? 'Level 23' : '' || hero == 24 ? 'Level 24' : '' || hero == 25 ? 'Level 25' : '' || hero == 26 ? 'Level 26' : '' || hero == 27 ? 'Level 27' : '' || hero == 28 ? 'Level 28' : '' || hero == 29 ? 'Level 29' : '' || hero == 30 ? 'Level 30' : '' || hero == 31 ? 'Level 31' : '' || hero == 32 ? 'Level 32' : '' || hero == 33 ? 'Level 33' : '' || hero == 34 ? 'Level 34' : '' || hero == 35 ? 'Level 35' : '' || hero == 36 ? 'Level 36' : '' || hero == 37 ? 'Level 37'  : '' || hero == 38 ? 'Level 38' : '' || hero == 39 ? 'Level 39' : '' || hero == 40 ? 'Level MAX' : ''}*`, 
contextInfo: {
externalAdReply: {
title: `Name: ${await conn.getName(name)}`,
body: `Level:  ${level}`,
thumbnailUrl: pp, 
sourceUrl: "https://whatsapp.com/channel/0029VaAAkwOIN9ii1Tc6Mz1X/124",
mediaType: 1,
renderLargerThumbnail: true
}
}})
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory|🪪)$/i
handler.limit = 2;
handler.group = true
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)