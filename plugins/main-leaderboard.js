let handler = async (m, { conn, args, participants }) => {
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
        return {...value, jid: key}
    })
    let sortedExp = users.map(toNumber('exp')).sort(sort('exp', true)) // Mengurutkan exp secara menaik (dari besar ke kecil)
    let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
    let sortedDamage = users.map(toNumber('damage')).sort(sort('damage'))
    let usersExp = sortedExp.map(enumGetKey)
    let usersLim = sortedLim.map(enumGetKey)
    let usersLevel = sortedLevel.map(enumGetKey)
    let usersMoney = sortedMoney.map(enumGetKey)
    let usersDamage = sortedDamage.map(enumGetKey)
    console.log(participants)
    let len = args[0] && args[0].length > 0 ? Math.min(15, Math.max(parseInt(args[0]), 15)) : Math.min(15, sortedExp.length)
    let text = `🌐 L E A D E R B O A R D 🌐\n\n┌✦Top 🧪 Exp
   • *🧪 Exp Leaderboard Top ${len}* •
  ㊭ Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
 
  ${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Exp ${exp}*`).join`\n`}
  ┗━═┅═━––––––๑
  ┌✦ Top 🎟 Limit
  • *🎟 Limit Leaderboard Top ${len}* •
  ㊭ Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
  
  ${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Limit ${limit}*`).join`\n`}
  ┗━═┅═━––––––๑
  ┌✦ Top 📊 Level
  • *📊 Level Leaderboard Top ${len}* •
  ㊭ Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*

  ${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}
  ┗━═┅═━––––––๑
  ┌✦ Top 💰 Money
  • *💰 Money Leaderboard Top ${len}* •
  ㊭ Kamu: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*

  ${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Money ${money}*`).join`\n`}
┗━═┅═━––––––๑
  ┌✦ Top 💥 Damage
  • *💥 Damage Leaderboard Top ${len}* •
  ㊭ Kamu: *${usersDamage.indexOf(m.sender) + 1}* dari *${usersDamage.length}*

  ${sortedDamage.slice(0, len).map(({ jid, damage }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Damage ${damage}*`).join`\n`}
┗━═┅═━––––––๑
  
  `.trim()
   conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersDamage.slice(0, len), ...usersMoney.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}

handler.help = ['leaderboard']
handler.tags = ['main']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.limit = 2;
handler.premium = false
handler.register = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
    }
    else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
    return a.jid
}