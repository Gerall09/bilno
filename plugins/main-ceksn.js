import { createHash } from 'crypto';

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex');
  const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import("@adiwajshing/baileys")).default;

  let msgs = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Berikut Adalah Sn Anda\n*${sn}*`,
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© YueBot",
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy code",
                "copy_code": `${sn}`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🚀 Auto Unreg",
                  id: `Vunreg ${sn}`,
                }),
              },
            ],
          }),
        }),
      },
    },
  }, {});

  await conn.relayMessage(m.key.remoteJid, msgs.message, {
    messageId: m.key.id,
  });
};

handler.help = ['ceksn'];
handler.tags = ['main'];
handler.command = /^(ceksn)$/i;
handler.register = true;

export default handler;