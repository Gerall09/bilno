import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  conn.sendMessage(m.chat, {
  text: `🎁 *L I N K :*
${link}
☘️ *S I Z E :* ${media.length} Byte
🍁 *E x p i r e d :* ${isTele ? 'No Expiry Date' : 'Unknown'}`,
contextInfo: {
            externalAdReply: {
                title: "T O U R L",
                body: '',
                thumbnailUrl: global.thumb,
                sourceUrl: sgc,
                mediaType: 1,
                renderLargerThumbnail: true
            }}}, { quoted: floc })
}
handler.help = ['upload (reply media)', 'tourl (reply media)']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
handler.limit = true
export default handler