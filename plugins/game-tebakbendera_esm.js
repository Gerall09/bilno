// Import modul yang diperlukan
import similarity from 'similarity';

// Tentukan nilai threshold
const threshold = 0.72;

// Buat fungsi handler sebagai modul ESM
const handler = (m) => m;

// Atur fungsi sebelumnya untuk diproses sebelum pesan
handler.before = async (m) => {
    let id = m.chat;

    // Periksa jika pesan merupakan balasan yang sesuai
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekbe/i.test(m.quoted.text)) return !0;

    // Inisialisasi objek tebakbendera jika belum ada
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {};

    // Periksa jika sesi tebakbendera untuk chat tertentu sedang berlangsung
    if (!(id in this.tebakbendera)) return m.reply('Soal itu telah berakhir');

    // Periksa jika balasan merupakan jawaban dari pertanyaan yang benar
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]));

        // Bandingkan jawaban pengguna dengan jawaban yang benar (dengan memperhitungkan threshold)
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            // Tambahkan nilai exp pada pengguna
            db.data.users[m.sender].exp += this.tebakbendera[id][2];

            // Tambahkan tiketcoin pada pengguna
            db.data.users[m.sender].tiketcoin += 1;

            // Kirim pesan konfirmasi ke pengguna
            m.reply(`*Benar!*\n+${this.tebakbendera[id][2]} XP\n+1 Tiketcoin`);

            // Hapus timeout untuk sesi tebakbendera yang sedang berlangsung
            clearTimeout(this.tebakbendera[id][3]);
            
            // Hapus sesi tebakbendera dari daftar aktif
            delete this.tebakbendera[id];
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
            // Kirim pesan "Dikit Lagi!" jika jawaban hampir benar
            m.reply(`*Dikit Lagi!*`);
        } else {
            // Kirim pesan "Salah!" jika jawaban salah
            m.reply(`*Salah!*`);
        }
    }
    return !0;
};

// Inisialisasi nilai exp
handler.exp = 0;

// Export fungsi handler sebagai modul ESM
export default handler;