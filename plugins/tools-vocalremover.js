// Importing modules using ESM syntax
import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import axios from 'axios';
import FormData from 'form-data';

// Handler function as an async arrow function
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        if (!/audio/.test(mime)) throw `Reply to an audio message with the command: *${usedPrefix + command}*`;

        let audioBuffer = await q.download();
        if (!audioBuffer) throw 'Cannot download audio!';

        let { instrumental_path, vocal_path } = await vocalRemover(audioBuffer);

        // Sending files to WhatsApp chat
        await Promise.all([
            conn.sendFile(m.chat, instrumental_path, null, null, global.instrumen),
            conn.sendFile(m.chat, vocal_path, null, null, global.vocal)
        ]);

    } catch (e) {
        console.error(e);
        m.reply(e.message || 'An error occurred during the audio processing.');
    }
};

// Adding metadata to handler function
handler.tags = ["tools", "ai"];
handler.command = /^vocalremover/i;
export default handler;

// Function to interact with the vocal remover API
async function vocalRemover(audioBuffer) {
    const api = axios.create({ baseURL: 'https://aivocalremover.com' });

    // Function to retrieve API key
    const getKey = async () => (await api.get('/')).data.match(/key:"(\w+)/)[1];

    const form = new FormData();
    const fileName = Math.random().toString(36) + '.mpeg';
    form.append('fileName', audioBuffer, fileName);

    // Uploading file and processing with API
    const [key, fileUpload] = await Promise.all([
        getKey(),
        api.post('/api/v2/FileUpload', form, { headers: form.getHeaders() }).catch(e => e.response)
    ]);

    if (fileUpload.status !== 200) throw fileUpload.data || fileUpload.statusText;

    const processFile = await api.post('/api/v2/ProcessFile', new URLSearchParams({
        file_name: fileUpload.data.file_name,
        action: 'watermark_video',
        key,
        web: 'web'
    })).catch(e => e.response);

    return processFile.data;
}

// Global metadata for sending files on WhatsApp
global.instrumen = {
    key: {
        remoteJid: "0@s.whatsapp.net",
        participant: "0@s.whatsapp.net",
        id: "",
    },
    message: {
        conversation: `*audio instrumen*`,
    },
};

global.vocal = {
    key: {
        remoteJid: "0@s.whatsapp.net",
        participant: "0@s.whatsapp.net",
        id: "",
    },
    message: {
        conversation: `*audio vocal*`,
    },
};