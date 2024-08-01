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
            text: `SC INI MASIH DALAM PENGEMBANGAN
`,
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© Tinasha Tuldar || PontaSan++",
          }),
contextInfo: { 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363199602506586@newsletter',
			newsletterName: namebot, 
			serverMessageId: -1
		}
          }, 
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
{                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\" 👑Owner\",\"id\":\"Oowner\"}"
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

handler.command = /^(sc|sourcecode|script)$/i;
handler.tags = ["info"];
handler.help = ['sc']

export default handler