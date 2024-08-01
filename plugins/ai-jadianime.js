import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn, usedPrefix, command, text }) => {
    // Determine the target of the command
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    // Get the message content
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Check if the message contains an image
    if (!mime) throw 'Please send or reply to an image with the caption .toanime';

    // Inform the user that the process is starting
    m.reply('Processing your image, please wait...');

    // Download the image from the message
    let media = await q.download();
    // Upload the image to get a URL
    let url = await uploadImage(media);

    // Call the new API with the uploaded image URL
    let response = await fetch(`https://skizo.tech/api/toanime?apikey=${global.skizo}&url=${encodeURIComponent(url)}`);
    
    if (!response.ok) throw 'Failed to convert image to anime. Please try again later.';
    
    let hasil = await response.buffer();
    
    // Send the converted anime image back to the user
    await conn.sendFile(m.chat, hasil, '', 'Here is your anime image! Sorry if it doesn’t meet your expectations.', m);
};

// Command details and export
handler.help = ['jadianime'];
handler.tags = ['ai'];
handler.command = /^(jadianime|toanime)$/i;
handler.premium = true;

export default handler;