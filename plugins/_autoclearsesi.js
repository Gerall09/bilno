import fs from 'fs';
import path from 'path';
import cron from 'node-cron';

let clearSession = () => {
    fs.readdir("./sessions", function (err, files) {
        if (err) {
            console.error('Tidak dapat memindai direktori: ' + err);
            return;
        }

        let filteredArray = files.filter(item => item !== 'creds.json');

        console.log(`Found ${filteredArray.length} session files to delete.`);

        if (filteredArray.length === 0) {
            console.log("No session files to clear.");
            return;
        }

        filteredArray.forEach(function (file) {
            let filePath = path.join('./sessions', file);

            fs.unlink(filePath, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.warn(`File ${file} tidak ditemukan, mungkin sudah dihapus`);
                    } else {
                        console.error(`Error menghapus file ${file}: ${err}`);
                    }
                } else {
                    console.log(`Deleted file: ${file}`);
                }
            });
        });

        console.log("🚩 Berhasil menghapus semua sampah di folder session kecuali creds.json");
    });
};

// Schedule the clearSession function to run daily at 00:00 WIB (7 PM UTC)
cron.schedule('0 17 * * *', () => {
    console.log('Running auto-clear session task...');
    clearSession();
});

// If you want to run it immediately when the server starts, uncomment the line below:
// clearSession();

// Global error handling to avoid unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Application specific logging, throwing an error, or other logic here
});