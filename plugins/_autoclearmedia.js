import { readdirSync, rmSync } from 'fs'
export async function all(m) {
    let settings = global.db.data.settings[this.user.jid]
    if (settings.clearmedia) {
        if (new Date() * 1 - setting.lastclearmedia > 60000) {
            const dir = './media'
            readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
            setting.lastclearmedia = new Date() * 1
        }
    } return !0
}