const ownerID = '6283857182374@s.whatsapp.net'; // Owner's identifier

let handler = async (m, { conn }) => {
  const randomTexts = [
    'Ada apa manggil manggil?',
    'Iya kak Kenapa?',
    'Udah makan Belum kak?',
    'Hmm??',
    'Nyariin Ya?',
    'Mandi sono',
    'Apa coba',
    'Yoo Gw disini!!',
    'Bomatt',
    'Capek menanggapi',
    'Napa butuh bantuan?',
    'Berisik luh',
    'Jangan lupa bernapas',
    'Kenapa dah',
    'Lagi tes sinyal?',
    'Oi oi',
    'Iya',
    'Jangan ngagetin dong',
    'Hah?',
    'humm??',
  ];

  const ownerTexts = [
    'Hallo ponta',
    'Kenapa Ponta??',
    'Aku di sini Ponta',
    'Ui ponta',
    'Makan belum pon?',
    'Udah mandi belum pon',
    'Semangat Pon',
    'Aku selalu di sini pon',
    'Aku Online Kok',
    'Aman udah ku urus pon',
    'Yo Ownerkuu',
  ];

  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const randomText = randomTexts[randomIndex];

  const randomOwnerIndex = Math.floor(Math.random() * ownerTexts.length);
  const randomOwnerText = ownerTexts[randomOwnerIndex];

  const isOwner = m.sender === ownerID;

  conn.reply(m.chat, `${isOwner ? randomOwnerText : randomText}`, floc)
};

handler.customPrefix = /^(tinasha|bot|botz|@⁨Yue Bot VIP V6 Zero⁩)$/i;
handler.command = new RegExp();

export default handler;