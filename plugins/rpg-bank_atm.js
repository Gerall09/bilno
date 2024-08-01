const xpperlimit = 1;

let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];

  // Tentukan jumlah dari perintah atau argumen
  let count = command.replace(/^atm/i, '').trim();
  if (/^all$/i.test(count) || /^all$/i.test(args[0])) {
    // "all" atau "all" (dengan spasi) menyimpan semua yang bisa
    count = Math.min(Math.floor(user.money / xpperlimit), user.fullatm - user.bank);
  } else {
    // Jika tidak, parse jumlah dari argumen atau perintah
    count = parseInt(count) || parseInt(args[0]) || 1;
  }
  count = Math.max(1, count); // Pastikan jumlah minimal 1

  // Cek kondisi dan tanggapi dengan pesan yang sesuai
  if (user.atm === 0) {
    return m.reply('Kamu belum memiliki ATM!');
  }
  if (user.bank >= user.fullatm) {
    return m.reply('Uang di bankmu sudah penuh!');
  }
  if (count > user.fullatm - user.bank) {
    return m.reply('Jumlah uang yang ingin ditabung melebihi kapasitas bank!');
  }
  if (user.money >= xpperlimit * count) {
    user.money -= xpperlimit * count;
    user.bank += count;
    conn.reply(m.chat, `Menyimpan money

Dompet: ${user.money.toLocaleString()}
Bank: +${user.bank.toLocaleString()}
Nominal: ${count.toLocaleString()}
Tanggal/waktu: ${new Date().toLocaleString()}`, floc);
  } else {
    conn.reply(m.chat, `[❗] Uang Anda tidak mencukupi untuk menabung ${count.toLocaleString()} Money 💹`, m);
  }
};

handler.help = ['atm <jumlah>'];
handler.tags = ['rpg'];
handler.command = /^(atm|tabung)$/i;

export default handler;