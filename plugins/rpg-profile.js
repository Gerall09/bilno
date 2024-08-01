import PhoneNumber from 'awesome-phonenumber';
import { xpRange } from '../lib/levelling.js';
import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    function no(number) {
        return number.replace(/\s/g, '').replace(/([@+-])/g, '');
    }

    text = no(text);

    let who;
    if (!text && !m.quoted) {
        who = m.sender; // Gunakan sender ID untuk memeriksa profil sendiri
    } else {
        let number;
        if (isNaN(text)) {
            number = text.split`@`[1];
        } else if (!isNaN(text)) {
            number = text;
        }

        if (!number || number.length > 15 || isNaN(number)) {
            return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6283849737975*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m);
        }

        who = number + '@s.whatsapp.net';
    }

    try {
        if (!global.db.data.users[who]) {
            throw 'Pengguna tidak ada dalam database';
        }

        let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://example.com/default-profile-picture.jpg'); // Ganti dengan URL default

        let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who];
        let now = Date.now();
        let { min, xp, max } = xpRange(level, global.multiplier);
        let username = conn.getName(who);
        let jodoh = pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : 'Single';
        let str = `
┌───❑〘 I N F O  U S E R 〙─────
│📛 Name : ${username} 
│💢 Tag : ${registered ? '' + name + ' ': ''}
│🏷️ Status : ${jodoh}
│🔗 Number : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│💥 Link : https://wa.me/${who.split`@`[0]}${registered ? '\n│🐣 Age: ' + age : ''}
├───────────────────⬡
│🏦 XP : TOTAL ${exp} (${exp - min} / ${xp}) [${max - xp} XP left to levelup]
│🏧 Level : ${level}
│💱 Role : *${role}*
│💹 Limit : ${limit}
│💸 Money : ${money}
├───────────────────⬡
│👨‍ Register : ${registered ? 'Sudah Terdaftar' : 'Belum Terdaftar'}
│♨️ Date Register : ${registered ? ' (' + new Date(regTime).toLocaleString() + ')' : ''}
│💌 Premium : ${premium ? 'Premium' : 'Free'}
│⌛ Expired Premium : ${(premiumDate - now) > 0 ? msToDate(premiumDate - now) : '*No setting expired*'}
`.trim();

        await conn.sendMessage(m.chat, {
            text: str,
            contextInfo: {
                externalAdReply: {
                    title: username,
                    body: 'User Profile',
                    thumbnailUrl: pp,
                    sourceUrl: `https://wa.me/${who.split`@`[0]}`, // URL profil pengguna
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (e) {
        conn.reply(m.chat, `❏ ERROR: ${e}`, m);
    }
};

handler.help = ['profile [@user]'];
handler.tags = ['info', 'tools', 'rpg'];
handler.command = /^profile|pp$/i;
handler.limit = false;
handler.register = false;

export default handler;

function msToDate(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    return `${days} Hari ${hours} Jam ${minutes} Menit`;
}