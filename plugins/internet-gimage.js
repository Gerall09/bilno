import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    conn.sendMessage(m.chat, {
		react: {
			text: '🆗',
			key: m.key,
    }
})
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*Result:* ${text}
*Source:* Google
`,m)
conn.sendMessage(m.chat, {
		react: {
			text: '✅',
			key: m.key,
    }
})
}
handler.help = ['gimage']
handler.tags = ['internet']
handler.limit = true;
handler.command = /^(gimage|image|gimg|img)$/i

export default handler