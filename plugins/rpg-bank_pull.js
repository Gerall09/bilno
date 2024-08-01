const xpperlimit = 1; // Konversi nilai Bank ke money

let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];

  // Tentukan jumlah dari perintah atau argumen
  let count = command.replace(/^pull/i, '').trim();
  if (/^all$/i.test(count) || /^all$/i.test(args[0])) {
    // "all" atau "all" (dengan spasi) menarik semua yang bisa
    count = Math.min(Math.floor(user.bank / xpperlimit), user.bank);
  } else {
    // Jika tidak, parse jumlah dari argumen atau perintah
    count = parseInt(count) || parseInt(args[0]) || 1;
  }
  count = Math.max(1, count); // Pastikan jumlah minimal 1

  // Cek kondisi dan tanggapi dengan pesan yang sesuai
  if (user.atm === 0) {
    return m.reply('Kamu belum punya ATM, buat dulu sana!');
  }
  if (user.bank >= xpperlimit * count) {
    user.bank -= xpperlimit * count;
    user.money += count;
    conn.reply(m.chat, `Sukses menarik money sebesar ${count.toLocaleString()}`, m);
  } else {
    conn.reply(m.chat, `Money kamu tidak mencukupi untuk menarik ${count.toLocaleString()}`, m);
  }
};

handler.help = ['pull'];
handler.tags = ['rpg'];
handler.command = /^pull([0-9]+)|pull|pullall|pull\sall|tarik([0-9]+)|tarik|tarikall|tarik\sall$/i;
handler.register = false;

export default handler;