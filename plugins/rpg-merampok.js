let handler = async (m, { conn, text, usedPrefix, command }) => {
    let ownerNumber = '6283857182374@s.whatsapp.net'; // Owner's WhatsApp number
    let dapat = Math.floor(Math.random() * 100000); // Random amount of money to rob
    let nomors = m.sender; // Sender's number
    let who;

    if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0];
    else who = m.chat;

    if (!who) throw 'Tag salah satu lah';
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base';
    if (who === ownerNumber) throw 'Anda tidak dapat merampok owner!';

    let __timers = (new Date - global.db.data.users[m.sender].lastrob);
    let _timers = (3600000 - __timers); // 1 hour cooldown
    let timers = clockString(_timers);
    let users = global.db.data.users;

    if (new Date - global.db.data.users[m.sender].lastrob > 3600000) {
        if (10000 > users[who].eris) throw 'Target tidak memiliki cukup uang!';

        users[who].eris -= dapat; // Deduct amount from target
        users[m.sender].eris += dapat; // Add amount to sender
        global.db.data.users[m.sender].lastrob = new Date * 1; // Update last robbery time

        conn.reply(m.chat, `Berhasil merampok uang target sebesar 💰${dapat}`, m);
    } else {
        conn.reply(m.chat, `Anda sudah merampok dan berhasil sembunyi, tunggu ${timers} untuk merampok lagi`, m);
    }
}

handler.help = ['merampok'];
handler.tags = ['rpg'];
handler.command = /^merampok|rob$/;
handler.limit = true;
handler.group = true;

export default handler;

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [
        '\n' + d, ' *Days ☀️*\n ',
        h, ' *Hours 🕐*\n ',
        m, ' *Minute ⏰*\n ',
        s, ' *Second ⏱️* '
    ].map(v => v.toString().padStart(2, 0)).join('');
}