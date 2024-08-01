let handler = async (m, { conn, usedPrefix }) => {
    try {
        let user = global.db.data.users[m.sender];
        let elapsedTime = new Date() - user.lastnambang;
        let remainingTime = 300000 - elapsedTime;
        let timers = formatTime(remainingTime);
        let minerName = await conn.getName(m.sender);
        const tag = '@' + m.sender.split`@`[0];

        if (user.stamina < 20) {
            return m.reply(`Stamina anda tidak cukup\nHarap isi stamina anda dengan *${usedPrefix}eat*`);
        }

        if (remainingTime > 0) {
            return m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`);
        }

        // Generate random values for mining rewards
        let rewards = Array.from({ length: 8 }, () => Math.floor(Math.random() * 200) * 10);

        // Define the items mined
        let items = ['Diamond', 'Iron', 'Gold', 'Emerald', 'Rock', 'Clay', 'Coal', 'Exp'];

        // Construct the result message
        let resultMessage = `*《 Hasil Nambang ${minerName} 》*\n\n` +
            items.map((item, index) => {
                let emoji = getEmoji(item);
                return `*${emoji} = [ ${rewards[index]} ] ${item}*`;
            }).join('\n') +
            `\n\nStamina anda berkurang -20`;

        // Update user properties
        user.diamond += rewards[0];
        user.iron += rewards[1];
        user.gold += rewards[2];
        user.emerald += rewards[3];
        user.rock += rewards[4];
        user.clay += rewards[5];
        user.coal += rewards[6];
        user.exp += rewards[7];
        user.stamina -= 20;
        user.lastnambang = new Date().getTime();

        // Schedule a reminder for when the cooldown ends
        setTimeout(() => {
            conn.reply(m.chat, `⛏️ Kak ${tag}, Sudah waktunya nambang lagi.`, null);
        }, 300000);

        // Send the result message
        m.reply(resultMessage);
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mencoba menambang. Silakan coba lagi nanti.');
    }
};

handler.help = ['nambang'];
handler.tags = ['rpg'];
handler.command = /^(nambang|menambang)$/i;
handler.group = true;
export default handler;

function formatTime(ms) {
    let d = Math.floor(ms / 86400000);
    let h = Math.floor(ms / 3600000) % 24;
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [
        `\n${d} *Days ☀️*\n`,
        `${h.toString().padStart(2, '0')} *Hours 🕐*\n`,
        `${m.toString().padStart(2, '0')} *Minute ⏰*\n`,
        `${s.toString().padStart(2, '0')} *Second ⏱️*`
    ].join(' ');
}

function getEmoji(item) {
    switch (item) {
        case 'Diamond': return '💎';
        case 'Iron': return '⛓️';
        case 'Gold': return '🪙';
        case 'Emerald': return '💚';
        case 'Rock': return '🪨';
        case 'Clay': return '🌕';
        case 'Coal': return '🕳️';
        case 'Exp': return '✉️';
        default: return '';
    }
}