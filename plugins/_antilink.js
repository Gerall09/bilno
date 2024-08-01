let handler = m => m;

let linkRegex = /https?:\/\/whatsapp\.com\/channel\//i;
let groupLinkRegex = /https?:\/\/chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i;

handler.before = async function (m, { conn, user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true;
  const tag = '@' + m.sender.split`@`[0];
 
  let chatId = m.chat;
  let groupData = global.db.data.chats[chatId];
  let users = groupData.users || {};
  let isGroupLink = linkRegex.exec(m.text);
  let isLinkGC = groupLinkRegex.exec(m.text);

  if (groupData.antiLink && (isGroupLink || isLinkGC)) {
    let sender = m.sender;
    let senderName = await conn.getName(sender);
    
    // Initialize user data if not exists
    if (!users[sender]) {
      users[sender] = { warn: 0 };
    }

    // Increment warning count
    users[sender].warn += 1;
    let warnCount = users[sender].warn;

    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${tag}*, kamu telah mengirimkan link grup atau saluran!\n\nWarn Kamu *${warnCount}/5*\n\n> Jika Warn telah mencapai 5 Maka kamu akan dikick dari grup!`);

    // Check if user is admin
    if (isAdmin) {
      return await m.reply('*Maaf, kamu admin. hehe..*');
    }

    // Check if bot is admin
    if (!isBotAdmin) {
      return await m.reply('*Bot tidak menjadi admin, Bagaimana saya bisa menghapus pesanmu_*');
    }

    // Delete the message
    await conn.sendMessage(m.chat, { delete: m.key });

    // Update group data
    groupData.users = users;
    global.db.data.chats[chatId] = groupData;
    // Save updated data to database

    // Check if warning count reached the threshold
    if (warnCount >= 5) {
      await m.reply(`*「 ANTI LINK 」*\n\nDetected *${tag}*, kamu telah mencapai 5 peringatan dan akan dikeluarkan dari grup.`);
      await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
    }

    return true;
  }

  return false;
}

export default handler;