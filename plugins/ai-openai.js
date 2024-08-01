import fetch from 'node-fetch';

let handler = async(m, { conn, text }) => {
  if (!text) throw 'Mau Nanya Apa?';

  try {
    // Encode the text for the URL
    const encodedText = encodeURIComponent(text);
    
    // Use the provided API endpoint structure
    const apiUrl = `https://skizo.tech/api/openai?apikey=${global.skizo}&text=${encodedText}&system=`;

    // Send the locked padlock reaction
    await conn.sendMessage(m.chat, {
      react: {
        text: '🔒',
        key: m.key,
      }
    });

    // Fetch the response from the API
    let res = await fetch(apiUrl);
    let data = await res.json();

    // After fetching, send the unlocked padlock reaction
    await conn.sendMessage(m.chat, {
      react: {
        text: '🔑',
        key: m.key,
      }
    });
    
    // Check if the API response has a result
    if (data.result) {
      m.reply(data.result);
      
      // Send the unlocked reaction
      await conn.sendMessage(m.chat, {
        react: {
          text: '🔓',
          key: m.key,
        }
      });
    } else {
      m.reply('Gagal mendapatkan jawaban dari AI.');
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
  }
};

handler.help = ['openai'];
handler.tags = ['ai'];
handler.command = /^(ai|openai)$/i;
handler.limit = 2;

export default handler;