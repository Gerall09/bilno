import fetch from 'node-fetch';
import { lookup } from 'mime-types';
import { URL_REGEX } from '@adiwajshing/baileys';

let handler = async (m, { conn, text }) => {
  // Send reaction to indicate processing
  await conn.sendMessage(m.chat, {
    react: {
      text: '🔍',
      key: m.key,
    },
  });

  // Validate input
  if (!text || !URL_REGEX.test(text)) {
    throw 'Input valid Pinterest URL, bro! 😒';
  }

  try {
    // Fetch the download link using CIFUMO API
    let res = await pinterest(text);
    let mime = lookup(res);
    let link = await shortUrl(res);

    // Send the downloadable content back to the chat
    await conn.sendMessage(m.chat, { [mime.split('/')[0]]: { url: res }, caption: `Success Download: ${link}` }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw `Failed to download content, bro! 😔 Please ensure the URL is correct and try again. (${error.message})`;
  }
};

handler.help = ['pindl <link>'];
handler.tags = ['downloader'];
handler.command = /^pindl$/i;
handler.limit = 2;
handler.register = true;

export default handler;

// Function to fetch download link from CIFUMO API
async function pinterest(url) {
  try {
    let res = await fetch(`https://rest.cifumo.biz.id/api/downloader/pindl?url=${encodeURIComponent(url)}`);
    let json = await res.json();

    if (!json.status) {
      throw new Error('Download failed, bro! 😔');
    }
    return json.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch download link, bro! 😔');
  }
}

// Function to shorten URLs
async function shortUrl(url) {
  try {
    let res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if (!res.ok) throw new Error('TinyURL service is down');
    return await res.text();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to shorten URL, bro! 😔');
  }
}