let handler = m => m;

handler.before = m => {
  const tag = '@' + m.sender.split`@`[0];
  let user = global.db.data.users[m.sender];

  if (user.afk > -1) {
    let duration = (Date.now() - user.afk) / 1000; // Durasi dalam detik
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let seconds = Math.floor(duration % 60);
    
    conn.reply(m.chat, `
${tag} telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${hours} jam, ${minutes} menit, dan ${seconds} detik
`.trim(), m);
    user.afk = -1;
    user.afkReason = '';
  }

  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (let mentionedJid of jids) {
    let mentionedUser = global.db.data.users[mentionedJid];
    if (!mentionedUser) continue;

    let afkTime = mentionedUser.afk;
    if (!afkTime || afkTime < 0) continue;
    let reason = mentionedUser.afkReason || '';

    let duration = (Date.now() - afkTime) / 1000;
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let seconds = Math.floor(duration % 60);

    conn.reply(m.chat, `
Hey kamu ${tag}, jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${hours} jam, ${minutes} menit, dan ${seconds} detik
`.trim(), m);
  }
  return true;
};

export default handler;