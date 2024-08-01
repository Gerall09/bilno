import ytdl from 'ytdl-core'
import fs from 'fs'
import search from 'yt-search'

let sentVideos = [];

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*Example*: .playvideo rewrite the star');

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  try {
    let searchResults = await search(text);
    let videoId = searchResults.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

    if (sentVideos.includes(title)) {
      let newVideoId = '';
      for (let i = 0; i < searchResults.videos.length; i++) {
        if (!sentVideos.includes(searchResults.videos[i].title)) {
          newVideoId = searchResults.videos[i].videoId;
          break;
        }
      }
      if (!newVideoId) {
        return m.reply('🐱 No more videos available with the same title');
      }
      videoId = newVideoId;
      info = await ytdl.getInfo(videoId);
      title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    }

    let format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo', filter: 'videoandaudio' });
    let video = ytdl(videoId, { format });

    let fileSize = 0;
    video.on('data', (chunk) => {
      fileSize += chunk.length;
      if (fileSize > 150 * 1024 * 1024) {
        video.destroy();
        fs.unlinkSync(`${title}.mp4`);
        m.reply('🐱 Ukuran Video Melebihi 150 MB');
      }
    });

     let kemii = `乂  *Y T - P L A Y*\n\n`
	kemii +=`	◦  *Title* : ${title}\n\n`
	kemii +=`ʏᴜᴇ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴘᴏɴᴛᴀ sᴇɴsᴇɪ`
    video.pipe(fs.createWriteStream(`${title}.mp4`)).on('finish', () => {
      let buffer = fs.readFileSync(`${title}.mp4`);
      conn.sendFile(m.chat, buffer, `${title}.mp4`, kemii, m);
      fs.unlinkSync(`${title}.mp4`);

      sentVideos.push(title);
      if (sentVideos.length > 10) {
        sentVideos.shift();
      }
    });
  } catch (e) {
    console.log(e);
    m.reply(`🐱 An error occurred while downloading the video: ${e.message}`);
  }
};

handler.help = ['playvideo'];
handler.tags = ['downloader'];
handler.limit = true;
handler.command = /^playvideo$/i;

export default handler