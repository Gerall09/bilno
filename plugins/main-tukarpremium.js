let handler = async (m, { conn, text, usedPrefix, command }) => {
    // Determine the target user directly from the sender ID
    let who = m.sender
    let user = db.data.users[who]

    // Extract the number of premium days from the command text
    let daysPremium = parseInt(text.trim())

    // Check if daysPremium is a valid number
    if (!isNaN(daysPremium)) {
        // Check if the user has already purchased 3 times this month
        let currentMonth = new Date().getMonth()
        let purchasesThisMonth = user.purchasesThisMonth || []
        let purchasesCount = purchasesThisMonth.filter(p => new Date(p).getMonth() === currentMonth).length
        
        // Check if the user has exceeded the purchase limit
        if (purchasesCount >= 3) {
            throw `Maaf, kamu sudah mencapai batas maksimal pembelian premium untuk bulan ini.`
        }

        // Check if the user has enough limit
        let requiredLimit = daysPremium * 10000 // Price adjusted to 10000 limit per day
        if (user.limit < requiredLimit) throw `Kamu tidak punya cukup limit untuk menukar ${daysPremium} hari premium. Kamu butuh ${requiredLimit} limit.`

        // Ensure the maximum number of premium days is 7
        if (daysPremium > 7) daysPremium = 7

        // Deduct the equivalent limit from the user's limit
        user.limit -= requiredLimit

        // Calculate the duration in milliseconds
        var jumlahHari = 86400000 * daysPremium
        var now = Date.now()

        // Update premium status and expiration time
        if (now < user.premiumTime) user.premiumTime += jumlahHari
        else user.premiumTime = now + jumlahHari
        user.premium = true

        // Record this purchase in purchasesThisMonth
        purchasesThisMonth.push(now)
        user.purchasesThisMonth = purchasesThisMonth

        // Send success message
        m.reply(`Sukses
*Nama:* ${user.name}
*Selama:* ${daysPremium} Hari
*Sisa Limit:* ${user.limit}`)
    } else {
        // Send price list message
        m.reply(`\`Harga Premium\`\n\n
* 1 Hari = 10,000 Limit
* 2 Hari = 20,000 Limit
* 3 Hari = 30,000 Limit

Gunakan perintah ${usedPrefix + command} <jumlah_hari> untuk menukar limit menjadi premium.
* Contoh: ${usedPrefix + command} 3`)
    }
}

handler.help = ['tukarprem']
handler.tags = ['main']
handler.command = /^(tukarprem|tukarpremium)$/i

handler.group = false
handler.rowner = false

export default handler