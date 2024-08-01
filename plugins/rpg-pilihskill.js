let handler = async (m, { conn, usedPrefix, text, command }) => {
    const user = global.db.data.users[m.sender];
    const skills = [
        "swordmaster", "necromancer", "witch", "archer", "magicswordmaster", 
        "thief", "shadow", "paladin", "bard", "assassin", "monk", 
        "druid", "summoner", "warlock", "berserker", "ranger", 
        "elementalist", "shaman", "priest", "ninja", "alchemist",
        "samurai", "templar", "gunslinger", "vampire", "demonhunter"
    ];
    
    const selectedSkill = text.trim().toLowerCase();

    if (!skills.includes(selectedSkill)) {
        throw `Pilih *skill🃏* dari daftar berikut:\n\n${skills.map(skill => `› ${skill}`).join('\n')}\n\n` +
              `Cara menggunakan:\n${usedPrefix + command} <namaskill>\n\nContoh:\n${usedPrefix + command} necromancer`;
    }

    const previousSkill = user.skill || 'tidak ada';

    user.skill = selectedSkill;
    m.reply(`Skill kamu telah diubah dari ${previousSkill} ke ${selectedSkill}`);
};

handler.help = ['selectskill'];
handler.tags = ['rpg'];
handler.command = /^(selectskill|pilihskill)$/i;

export default handler;