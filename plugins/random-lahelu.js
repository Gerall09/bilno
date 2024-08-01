import fetch from 'node-fetch';

// Define the Lahelu handler function
let handler = async (m, { conn }) => {
    try {
        // Fetch random memes from Lahelu API
        const response = await fetch("https://itzpire.com/random/lahelu");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { status, data } = await response.json();

        if (status !== "success" || !data || data.length === 0) {
            throw new Error("Failed to retrieve meme data.");
        }

        // Select a random meme from the data
        const meme = data[Math.floor(Math.random() * data.length)];

        // Prepare the reply message with image
        const message = `
*Title*: ${meme.title}
*Author*: ${meme.userUsername}
*Hashtags*: ${meme.hashtags.join(', ')}
        `;

        // Reply with the meme details and image
        conn.sendFile(m.chat, meme.media, 'meme.jpg', message);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        m.reply('Terjadi kesalahan saat mengambil meme dari Lahelu.');
    }
};

handler.help = ['lahelu'];
handler.tags = ['random'];
handler.command = /^lahelu$/i;
handler.limit = true;

export default handler;