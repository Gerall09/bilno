const cooldown = 600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    const tag = '@' + m.sender.split`@`[0]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`Kesehatan Kamu Kurang Dari 80% Tidak Bisa Berpetualang, Jika Kamu Ada Potion Gunakan Dengan Cara .heal, Jika Tidak Punya Kamu Bisa Membelinya Dengan Cara .buy potion 1
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
Kamu Sudah Berpetualang, Tunggu *🕐${timers.toTimeString()}* Lagi
`.trim())
    const rewards = reward(user)
    let text = `*[ Selesai Adventure ]*\n${tag}\n`
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\nAnda membawa pulang'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    conn.reply(m.chat, text.trim(), m)
    user.lastadventure = new Date * 1
}
handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(adventure|adv|adven|(ber)?petualang(ang)?)$/i
handler.register = true
handler.cooldown = cooldown
handler.limit = 2;
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 1000000,
            exp: 501,
            damage: 189,
            trash: 101,
            potion: 2,
            rock: 2,
            wood: 2,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
            emerald: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: - 101 - user.cat * 4
        }
    }
    return rewards
}