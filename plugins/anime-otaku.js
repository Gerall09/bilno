import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Judulnya?';

  try {
    // Call the REST API with the query
    let res = await axios.get(`https://rest.cifumo.biz.id/api/anime/otakudesu-search?query=${encodeURIComponent(text)}`);

    // Check if the response status is true and data is available
    if (res.data.status && res.data.data.length > 0) {
      let anime = res.data.data[0]; // Take the first result

      let result = `• *Judul:* ${anime.title}
• *Genre:* ${anime.genres}
• *Rating:* ${anime.rating}
• *Status:* ${anime.status}
• *Link:* ${anime.link}`;

      // Send the message with additional context info
      await conn.sendMessage(m.chat, {
        text: result,
        contextInfo: {
          externalAdReply: {
            title: "OTAKUDESU",
            body: '',
            thumbnailUrl: anime.thumbnail,
            sourceUrl: anime.link, // Link to the anime on Otakudesu
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });

    } else {
      m.reply('Anime tidak ditemukan.');
    }
  } catch (e) {
    m.reply('Terjadi kesalahan. Judul yang kamu cari tidak dapat ditemukan.');
  }
};

handler.help = ['otakudesu'];
handler.tags = ['anime'];
handler.command = /^(otakudesu)$/i;
handler.limit = true;

export default handler;