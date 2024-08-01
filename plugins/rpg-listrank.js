import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `List Rank RPG :
❏〡 Newbie ㋡ (1-2)
❏〡 Beginner Grade 1 ⚊¹ (3-4)
❏〡 Beginner Grade 2 ⚊² (5-6)
❏〡 Beginner Grade 3 ⚊³ (7-8)
❏〡 Beginner Grade 4 ⚊⁴ (9-10)
❏〡 Private Grade 1 ⚌¹ (11-12)
❏〡 Private Grade 2 ⚌² (13-14)
❏〡 Private Grade 3 ⚌³ (15-16)
❏〡 Private Grade 4 ⚌⁴ (17-18)
❏〡 Private Grade 5 ⚌⁵ (19-20)
❏〡 Corporal Grade 1 ☰¹ (21-22)
❏〡 Corporal Grade 2 ☰² (23-24)
❏〡 Corporal Grade 3 ☰³ (25-26)
❏〡 Corporal Grade 4 ☰⁴ (27-28)
❏〡 Corporal Grade 5 ☰⁵ (29-30)
❏〡 Sergeant Grade 1 ≣¹ (31-32)
❏〡 Sergeant Grade 2 ≣² (33-34)
❏〡 Sergeant Grade 3 ≣³ (35-36)
❏〡 Sergeant Grade 4 ≣⁴ (37-38)
❏〡 Sergeant Grade 5 ≣⁵ (39-40)
❏〡 Staff Grade 1 ﹀¹ (41-42)
❏〡 Staff Grade 2 ﹀² (43-44)
❏〡 Staff Grade 3 ﹀³ (45-46)
❏〡 Staff Grade 4 ﹀⁴ (47-48)
❏〡 Staff Grade 5 ﹀⁵ (49-50)
❏〡 Sergeant Grade 1 ︾¹ (51-52)
❏〡 Sergeant Grade 2 ︾² (53-54)
❏〡 Sergeant Grade 3 ︾³ (55-56)
❏〡 Sergeant Grade 4 ︾⁴ (57-58)
❏〡 Sergeant Grade 5 ︾⁵ (59-60)
❏〡 2nd Lt. Grade 1 ♢¹ (61-62)
❏〡 2nd Lt. Grade 2 ♢² (63-64)
❏〡 2nd Lt. Grade 3 ♢³ (65-66)
❏〡 2nd Lt. Grade 4 ♢⁴ (67-68)
❏〡 2nd Lt. Grade 5 ♢⁵ (69-70)
❏〡 1st Lt. Grade 1 ♢♢¹ (71-72)
❏〡 1st Lt. Grade 2 ♢♢² (73-74)
❏〡 1st Lt. Grade 3 ♢♢³ (75-76)
❏〡 1st Lt. Grade 4 ♢♢⁴ (77-78)
❏〡 1st Lt. Grade 5 ♢♢⁵ (79-80)
❏〡 Major Grade 1 ✷¹ (81-82)
❏〡 Major Grade 2 ✷² (83-84)
❏〡 Major Grade 3 ✷³ (85-86)
❏〡 Major Grade 4 ✷⁴ (87-88)
❏〡 Major Grade 5 ✷⁵ (89-90)
❏〡 Colonel Grade 1 ✷✷¹ (91-92)
❏〡 Colonel Grade 2 ✷✷² (93-94)
❏〡 Colonel Grade 3 ✷✷³ (95-96)
❏〡 Colonel Grade 4 ✷✷⁴ (97-98)
❏〡 Colonel Grade 5 ✷✷⁵ (99-100)
❏〡 Brigadier Early ✰ (101-102)
❏〡 Brigadier Silver ✩ (103-104)
❏〡 Brigadier Gold ✯ (105-106)
❏〡 Brigadier Platinum ✬ (107-108)
❏〡 Brigadier Diamond ✪ (109-110)
❏〡 Major General Early ✰ (111-112)
❏〡 Major General Silver ✩ (113-114)
❏〡 Major General Gold ✯ (115-116)
❏〡 Major General Platinum ✬ (117-118)
❏〡 Major General Diamond ✪ (119-120)
❏〡 Lt. General Early ✰ (121-122)
❏〡 Lt. General Silver ✩ (123-124)
❏〡 Lt. General Gold ✯ (125-126)
❏〡 Lt. General Platinum ✬ (127-128)
❏〡 Lt. General Diamond ✪ (129-130)
❏〡 General Early ✰ (131-132)
❏〡 General Silver ✩ (133-134)
❏〡 General Gold ✯ (135-136)
❏〡 General Platinum ✬ (137-138)
❏〡 General Diamond ✪ (139-140)
❏〡 Commander Early ★ (141-142)
❏〡 Commander Intermediate ⍣ (143-144)
❏〡 Commander Elite ≛ (145-146)
❏〡 The Commander Hero ⍟ (147-148)
❏〡 Legends 忍 (149+)
`;

	let pesan1 = `Inilah tingkatan Rank di RPG Games`;
	conn.sendMessage(m.chat, {
		text: tqto,
		contextInfo: {
			externalAdReply: {
				title: global.namebot,
				body: pesan1,
				thumbnailUrl: global.thumb,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	});
}

handler.help = ['listrank']
handler.tags = ['main']
handler.command = /^(listrank)$/i;

export default handler;