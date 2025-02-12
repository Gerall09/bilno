import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply("Linknya?");
    m.reply("_*Tunggu Sebentar*_")
    try {
        const ytdl = new Ytdl();
        const result = await ytdl.play(text);
        const title = result.title;
        conn.sendFile(m.chat, result.audio['128'].url, title + ".mp3", "", m, 0, {
            mimetype: "audio/mp3",
            asDocument: true,
        });
    } catch (error) {
        m.reply("Terjadi kesalahan, coba lagi nanti!");
        console.error(error); // Added logging for error
    }
};

handler.menu = ["ytmp3"];
handler.tags = ["download"];
handler.command = ["ytmp3", "ytaudio", "yta"];

handler.limit = true;

export default handler;

class Ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let { links, vid, title } = await this.search(url);
        let video = {}, audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            video[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        for (let i in links.mp3) {
            let input = links.mp3[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            audio[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        return { title, video, audio };
    }
}