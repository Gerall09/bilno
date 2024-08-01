let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender

    const tag = '@' + m.sender.split`@`[0]

    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'

    const user = db.data.users[who]

    // Custom number formatter
    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    conn.reply(m.chat, `乂 *L I M I T  U S E R* 乂\n\n ∘  *Pemilik*: ${tag}\n ∘  *Limit*:   ${formatNumber(user.limit)}\n ∘  *Exp*:   ${formatNumber(user.exp)}\n ∘  *Balance*:   ${formatNumber(user.balance)}

Jika Limit Kalian Habis.!!
> (.buylimit <nominal>) 1 limit = 1000 exp
> (.tukarlimit <nominal>) 1 limit = 15 balance`, floc)
}
handler.help = ['limit']
handler.tags = ['users', 'user']
handler.command = /^(limit|ceklimit)$/i
export default handler