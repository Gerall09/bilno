let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender];
    
    // Check if user's health is already at max limit (500 in this case)
    if (user.health >= 500) {
        return m.reply(`😊 Kamu sudah sehat.`);
    }
    
    // Define maximum health limit (500 in this case)
    const maxHealLimit = 500;
    
    // Each potion restores 50 health
    const healthPerPotion = 50;
    
    // Calculate the number of potions needed to reach the max heal limit
    let requiredPotions = Math.ceil((maxHealLimit - user.health) / healthPerPotion);
    
    // If a specific amount is provided in args, use that
    if (isNumber(args[0])) {
        requiredPotions = Math.max(1, parseInt(args[0]));
    }
    
    // Ensure the user has enough potions
    if (user.potion < requiredPotions) {
        return m.reply(`
❌ Potion Kamu Tidak Cukup. Kamu Memiliki *${user.potion}* Potion.
💡 Ketik *${usedPrefix}shop buy potion ${requiredPotions - user.potion}* Untuk Membelinya
`.trim());
    }
    
    // Calculate total health restored and potions used
    const healthRestored = Math.min(healthPerPotion * requiredPotions, maxHealLimit - user.health);
    const potionsUsed = Math.ceil(healthRestored / healthPerPotion);
    
    // Update user's potion count and health
    user.potion -= potionsUsed;
    user.health += healthRestored;
    
    // Return any excess potions
    let excessPotions = requiredPotions - potionsUsed;
    user.potion += excessPotions; // Return excess potions to inventory
    
    m.reply(`
✨ Sukses Menggunakan Potion!
❤️ Jumlah health yang dipulihkan: ${healthRestored}
🔄 Potion yang dikembalikan: ${excessPotions}
`.trim());
}

handler.help = ['heal'];
handler.tags = ['rpg'];
handler.command = /^(heal)$/i;
handler.register = true;

export default handler;

// Helper function to check if a value is a number
function isNumber(value) {
    value = parseInt(value);
    return !isNaN(value);
}