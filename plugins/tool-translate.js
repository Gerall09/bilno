import translate from '@vitalets/google-translate-api';

let handler = async (m, { args, usedPrefix, command }) => {
    let lang, text;
    if (args.length >= 2) {
        lang = args[0] || 'id';
        text = args.slice(1).join(' ');
    } else if (m.quoted && m.quoted.text) {
        lang = args[0] || 'id';
        text = m.quoted.text;
    } else {
        throw `Ex: ${usedPrefix + command} id hello i am robot`;
    }

    try {
        let res = await translate(text, { to: lang });
        m.reply(`*Terdeteksi Bahasa:* ${res.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim());
    } catch (error) {
        throw `Error : Bahasa "${lang}" Tidak Support`;
    }
};

handler.help = ['translate'].map(v => v + ' <bahasa> <teks>');
handler.tags = ['tools'];
handler.command = /^(tr(anslate)?)$/i;

export default handler;