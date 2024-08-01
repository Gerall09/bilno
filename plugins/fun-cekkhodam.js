import axios from "axios";
import cheerio from "cheerio";

// Handler untuk perintah .khodam
let handler = async (m, { text }) => {
    if (!text) {
        return m.reply('Mohon berikan nama untuk mencari Khodam.');
    }

    try {
        // Ambil informasi Khodam menggunakan fungsi Khodam
        const result = await Khodam(text);

        // Buat pesan balasan dengan informasi Khodam
        const message = `\`Nama\`: ${result.nama}
\`Khodam\`: ${result.khodam}`;

        // Kirim pesan balasan
        m.reply(message);
    } catch (error) {
        console.error(`Error in .khodam command: ${error}`);
        m.reply('Terjadi kesalahan saat mengambil data Khodam. Silakan coba lagi.');
    }
}

// Metadata handler untuk perintah bot
handler.help = ['cekkhodam'];
handler.tags = ['fun'];
handler.command = /^cekkhodam$/i;

export default handler;

// Fungsi untuk mengambil informasi Khodam
async function Khodam(nama) {
    return new Promise(async (resolve, reject) => {
        await axios.get(`https://khodam.vercel.app/v2?nama=${nama}`).then(({ data }) => {
            const $ = cheerio.load(data);

            const khodam = $('.__className_cad559').text().trim().split('✨')[1];
            const result = {
                nama,
                khodam: khodam || 'Tidak ditemukan',
                share: `https://khodam.vercel.app/v2?nama=${nama}&share`
            }
            resolve(result);
        }).catch(reject);
    })
}