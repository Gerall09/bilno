const prices = {
    hiu: { buy: 1500, sell: 400 },
    ikan: { buy: 500, sell: 50 },
    dory: { buy: 800, sell: 200 },
    orca: { buy: 1500, sell: 400 },
    paus: { buy: 2000, sell: 900 },
    cumi: { buy: 1400, sell: 300 },
    gurita: { buy: 1600, sell: 500 },
    buntal: { buy: 700, sell: 100 },
    udang: { buy: 500, sell: 50 },
    lumba: { buy: 1500, sell: 400 },
    lobster: { buy: 800, sell: 200 },
    kepiting: { buy: 700, sell: 150 },
};

let handler = async (m, { conn, command, args, usedPrefix }) => {
    let jualbeli = args[0]?.toLowerCase();
    let type = args[1]?.toLowerCase();
    let count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : 1;

    const Kaine = `Contoh penggunaan: *${usedPrefix}shopfish buy hiu 1*

============================

*Fishing | Harga Beli*
Hiu: ${prices.hiu.buy}
Ikan: ${prices.ikan.buy}
Dory: ${prices.dory.buy}
Orca: ${prices.orca.buy}
Paus: ${prices.paus.buy}
Cumi: ${prices.cumi.buy}
Gurita: ${prices.gurita.buy}
Buntal: ${prices.buntal.buy}
Udang: ${prices.udang.buy}
Lumba²: ${prices.lumba.buy}
Lobster: ${prices.lobster.buy}
Kepiting: ${prices.kepiting.buy}

*Fishing | Harga Jual*
Hiu: ${prices.hiu.sell}
Ikan: ${prices.ikan.sell}
Dory: ${prices.dory.sell}
Orca: ${prices.orca.sell}
Paus: ${prices.paus.sell}
Cumi: ${prices.cumi.sell}
Gurita: ${prices.gurita.sell}
Buntal: ${prices.buntal.sell}
Udang: ${prices.udang.sell}
Lumba²: ${prices.lumba.sell}
Lobster: ${prices.lobster.sell}
Kepiting: ${prices.kepiting.sell}
`.trim();

    try {
        if (/shopfish/i.test(command)) {
            switch (jualbeli) {
                case 'buy':
                    if (!(type in prices)) return conn.reply(m.chat, Kaine, m);
                    if (global.db.data.users[m.sender].eris < prices[type].buy * count)
                        return conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${type} dengan harga ${prices[type].buy * count} Money`, m);
                    global.db.data.users[m.sender][type] += count * 1;
                    global.db.data.users[m.sender].eris -= prices[type].buy * count;
                    conn.reply(m.chat, `Sukses membeli ${count} ${type} dengan harga ${prices[type].buy * count} Money`, m);
                    break;
                case 'sell':
                    if (!(type in prices)) return conn.reply(m.chat, Kaine, m);
                    if (global.db.data.users[m.sender][type] < count * 1)
                        return conn.reply(m.chat, `${type} anda tidak cukup`, m);
                    global.db.data.users[m.sender][type] -= count * 1;
                    global.db.data.users[m.sender].eris += prices[type].sell * count;
                    conn.reply(m.chat, `Sukses menjual ${count} ${type}, dan anda mendapatkan ${prices[type].sell * count} Money`, m);
                    break;
                default:
                    return conn.reply(m.chat, Kaine, m);
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kaine, m);
        console.error(e);
    }
};

handler.help = ['shopfish'];
handler.tags = ['rpg'];
handler.command = /^(shopfish)$/i;
handler.limit = true;
handler.group = true;

export default handler;