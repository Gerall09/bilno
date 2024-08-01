let handler  = async (m, { conn, isOwner}) => {
 const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import("@adiwajshing/baileys")).default
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `\`P A Y M E N T\`

 *E-Wallet* 

ᴅᴀɴᴀ: 083849737975
ɢᴏᴘᴀʏ: 083856965988
ᴏᴠᴏ: 083849737975
ᴘᴜʟsᴀ: 083857182374`,
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© YueBot || PT.dana_indonesia",
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
{                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"🎉 ᴘʀᴇᴍɪᴜᴍ\",\"id\":\"Opremium\"}"
},
{                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"💳 ǫʀɪs\",\"id\":\"Oqris\"}"
},
           ],
          })
        })
    }
  }
}, {})

return await conn.relayMessage(m.key.remoteJid, msgs.message, {
  messageId: m.key.id
})
}

handler.command = /^(payment|pay)$/i;
handler.tags = ["info"];
handler.help = ['payment']

export default handler