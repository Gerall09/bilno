import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    // Check if keywords are provided
    if (!args[0]) {
        return m.reply(`Masukan Judul untuk pencarian!\n\nContoh:\n${usedPrefix + command} Dance Loli Bmw`);
    }

    // Join args into a single query string for the API call
    let keywords = encodeURIComponent(args.join(' '));

    // Define the API URL
    let apiUrl = `https://skizo.tech/api/tiktok-search?apikey=${global.skizo}&keywords=${keywords}`;

    // Notify the user that the process is in progress
    await m.reply('_Proses sedang berlangsung, Mohon tunggu..._ ⌛');

    try {
        // Fetch data from the API
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        let data = await response.json();

        // Handle no results
        if (data.length === 0) {
            return m.reply('Tidak ada hasil yang ditemukan. ❌');
        }

        // Process the first result
        let result = data[0];
        let { duration, play, wmplay, music, music_info, play_count, digg_count, comment_count, share_count, author } = result;
        let caption = `👤 Nickname: ${author.nickname}
🆔 Unique ID: ${author.unique_id}
⏱ Durasi: ${duration} detik
🎬 Plays: ${play_count}
👍 Suka: ${digg_count}
💬 Komentar: ${comment_count}
📤 Bagikan: ${share_count}
🎵 Musik: ${music_info.title} oleh ${music_info.author}`.trim();

        // Send the video file
        await conn.sendFile(m.chat, play, 'video.mp4', caption, m);

        // Send the audio file as a voice note
        await conn.sendFile(m.chat, music, 'audio.ogg', '', m, { asDocument: false, ptt: true });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data. ❌');
    }
}

// Handler metadata for bot commands
handler.help = ['tiktoksearch'];
handler.tags = ['downloader'];
handler.command = /^(tiktoksearch|ttsearch|tiktokcari)$/i;
handler.limit = true;

export default handler;