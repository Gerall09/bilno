let handler = async (m, {
	command,
	usedPrefix,
	args
}) => {
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
	let user = global.db.data.users[m.sender]
	let author = global.author
	let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const list = `\`List Makanan\`

- Sushi
- Ikanbakar
- Lelebakar
- Ayambakar
- Ayamgoreng
- Steak

contoh .eat ayamgoreng `.trim()
    //try {
    if (/makan|eat/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ayamgoreng':
        if (user.stamina < 250) {
        	if (user.ayamgoreng >= count * 1) {
                            user.ayamgoreng -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Ayam goreng kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'ayambakar':
        if (user.stamina < 250) {
        	if (user.ayambakar >= count * 1) {
                            user.ayambakar -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Ayam bakar kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'steak':
        if (user.stamina < 250) {
        	if (user.steak >= count * 1) {
                            user.steak -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Steak kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'sushi':
        if (user.stamina < 250) {
        	if (user.sushi >= count * 1) {
                            user.sushi -= count * 1
                            user.stamina += 15 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Sushi kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'ikanbakar':
        if (user.stamina < 250) {
        	if (user.ikanbakar >= count * 1) {
                            user.ikanbakar -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` ikan bakar kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'lelebakar':
        if (user.stamina < 250) {
        	if (user.lelebakar >= count * 1) {
                            user.lelebakar -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` lele bakar kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
          default:
       await conn.reply(m.chat, list, m)
            }
    } else if (/p/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 'p':
         break
         default:
		return conn.reply(m.chat, list,m)
         }
                            
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*',m)
                
            }
        }
    }
}

handler.help = ['eat']
handler.tags = ['rpg']
handler.register = true
handler.command = /^(eat|makan)$/i
export default handler