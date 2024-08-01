let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (args.length !== 2) return conn.reply(m.chat, 'Ketik *.use ramuan hero*\nUntuk Memakai Ramuan.', m);
    
    let type = (args[0] || '').toLowerCase();
    let _type = (args[1] || '').toLowerCase();
    let user = global.db.data.users[m.sender];
    let koin = Math.floor(Math.random() * 150) + 20;
    let limits = Math.floor(Math.random() * 150) + 50;
    let caption = `Ketik *.${command} ramuan hero*\nUntuk Memakai Ramuan`;

    switch (type) {
        case 'ramuan':
            if (user.ramuan < 0) return conn.reply(m.chat, 'Kamu Belum Memiliki Ramuan, Ketik .meracik ramuan', m);
            user.stamina += koin;
            user.health += limits;
            if (user.stamina > 100) user.stamina = 100; // Batasan stamina
            if (user.health > 500) user.health = 500; // Batasan health
            user.ramuan -= 1;
            conn.reply(m.chat, `Berhasil Memakai Ramuan\nMemulihkan Stamina Dan Health.\n\nStamina:   +${koin}\nHealth:   +${limits}\nRamuan:   -1`, m);
            break;
        default:
            switch (_type) {
                case 'hero':
                    if (user.ramuan < 0) return conn.reply(m.chat, 'Kamu Belum Memiliki Ramuan, Ketik .meracik ramuan', m);
                    user.stamina += koin;
                    user.health += limits;
                    if (user.stamina > 100) user.stamina = 100; // Batasan stamina
                    if (user.health > 500) user.health = 500; // Batasan health
                    user.ramuan -= 1;
                    conn.reply(m.chat, `Berhasil Memakai Ramuan\nMemulihkan Stamina Dan Health.\n\nStamina:   +${koin}\nHealth:   +${limits}\nRamuan:   -1`, m);
                    break;
                default:
                    return conn.reply(m.chat, caption, m);
            }
    }
}

handler.help = ['use'];
handler.tags = ['rpg'];
handler.command = /^(use)/i;
handler.register = true;

export default handler;