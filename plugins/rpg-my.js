import daily from './rpg-daily.js'
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'
import fetch from 'node-fetch'

const inventory = {
  others: {
    health: true,
    eris: true,
    exp: true,
    limit: true,
  },
  items: {
    health: true,
    eris: true,
    exp: true,
    level: true,
    limit: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerald Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: true,

  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
    pet: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
  },
  cooldowns: {
    lastclaim: {
      name: 'claim',
      time: daily.cooldown
    },
    lastweekly: {
      name: 'weekly',
      time: weekly.cooldown
    },
    lastmonthly: {
      name: 'monthly',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'adventure',
      time: adventure.cooldown
    }
  }
}

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "https://telegra.ph/file/ee60957d56941b8fdd221.jpg")
  const tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v]}`).filter(v => v).join('\n│ ').trim()
  const crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  const pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
  const caption = `
_*❏ USER INFO ❏*_

╭──────────────
│ 📄 *Nama:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 📛 *Username:* ${user.username || '-'}
│ 🎂 *Umur:* ${user.age || '-'}
│ 👑 *Status:* ${user.premiumTime > 0 ? 'Premium User' : 'Free User'}
│ 💳 *Limit:* ${user.limit || 0} left
│ 💵 *Money:* Rp.${user.money || 0}
│ 🏦 *Bank:* Rp.${user.bank || 0}
│ 📊 *Level:* ${user.level || 0}
│ 🎖️ *Role:* ${user.role || '-'}
│ 🧪 *Exp:* ${user.exp || 0}
│ 📥 *Register:* ${user.registered ? 'Sudah terdaftar' : 'Belum terdaftar'}
│ 📅 *Regist Time:* ${user.registered ? new Date(user.regTime).toLocaleString() : '-'}
╰──────────────

_*Ingatlah Di langit masih ada langit.*_
`.trim()
  await conn.sendMessage(m.chat, { text: caption,
    contextInfo: {
      externalAdReply: {
        mediaUrl: sig,
        mediaType: 2,
        description: wm,
        title: 'Profile User',
        body: botdate,
        thumbnail: await (await fetch(pp)).buffer(),
        sourceUrl: sgc
      }
    }
  }, m)
}

handler.help = ['my']
handler.tags = ['rpg']
handler.command = /^(my|me)$/i

handler.register = false
export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *ʏᴇᴀʀs 🗓️*\n', mo, ' *ᴍᴏɴᴛʜ 🌙*\n', d, ' *ᴅᴀʏs ☀️*\n', h, ' *ʜᴏᴜʀs 🕐*\n', m, ' *ᴍɪɴᴜᴛᴇ ⏰*\n', s, ' *sᴇᴄᴏɴᴅ ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}