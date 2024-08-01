import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '❗ Please provide a search term for the YouTube channel.', m);
  }

  try {
    let res = await fetch(`https://widipe.com/download/youtubestalk?text=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (!json.status || !json.result || !json.result.data || json.result.data.length === 0) {
      return conn.reply(m.chat, '❗ No channels found or an error occurred.', m);
    }

    let channelInfo = json.result.data[0]; // Taking the first result

    let thumbRes = await fetch(channelInfo.avatar);
    let thumb = await thumbRes.buffer();

    let hasil = `
✨ *Channel Name*: ${channelInfo.channelName}
🔗 *URL*: ${channelInfo.url}
👥 *Subscribers*: ${channelInfo.subscriber}
📝 *Description*: ${channelInfo.description}
✅ *Verified*: ${channelInfo.isVerified ? 'Yes' : 'No'}
    `;

    await conn.sendFile(m.chat, thumb, 'youtube.jpg', hasil, m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '❗ An error occurred while fetching YouTube channel data.', m);
  }
};

handler.help = ['youtubestalk'];
handler.tags = ['internet'];
handler.command = /^(ytstalk|ytstalker|youtubestalk)$/i;
handler.limit = true;

export default handler;