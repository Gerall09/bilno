import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Please provide a query.'; // Prompt for input if no text is provided.
  
  m.reply('Searching for Gemini information...'); // Inform the user that a search is in progress.
  
  try {
    // Fetch Gemini information from the API
    let res = await fetch(`https://itzpire.com/ai/gemini-ai?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('Failed to fetch data'); // Check if the request was successful
    
    let data = await res.json();
    console.log('API Response:', data); // Log the API response for debugging

    // Check if the response status is true
    if (!data.status) throw new Error('Information not found');

    // Extract relevant information from the response
    let { result } = data;
    if (!result) throw new Error('Invalid response structure');

    // Send the information to the chat
    result = result.replace(/\*\*/g, '*');
    conn.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          title: "✦ Gemini",
          body: '',
          thumbnailUrl: 'https://telegra.ph/file/c7d753517cf3243c358b6.jpg',
          sourceUrl: global.sgc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.error(e); // Log the error for debugging
    m.reply('Could not find the information you are looking for.'); // Inform the user that the information couldn't be found
  }
};

// Define command help, tags, and limit
handler.help = ['gemini'];
handler.tags = ['ai'];
handler.command = /^(gemini)$/i;
handler.limit = true;

export default handler;