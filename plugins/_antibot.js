export default async function(m) {
  let chat = global.db.data.chats[m.chat];
  if (chat.antiBot) {
    if (m.fromMe) return;
    if (m.isBaileys === true) {
      await conn.reply(m.chat, "*[ ANOTHER BOT DETECTED ]*", m);
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
    return;
  }
}