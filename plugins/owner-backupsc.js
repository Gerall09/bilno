import fs from 'fs';
import archiver from 'archiver';
import path from 'path';
import moment from 'moment';

const handler = async (m, { conn }) => {
  // Notify the user about the backup preparation
  m.reply('Sedang mempersiapkan backup...');

  // Ensure global.namebot is defined
  if (!global.namebot) {
    throw new Error('Nama bot belum diatur di global.namebot');
  }

  // Generate timestamps
  let timestamp = moment().format('YYYYMMDD-HHmmss');
  let waktuBackup = moment().format('YYYY-MM-DD HH:mm:ss');
  let backupName = `${global.namebot} ${waktuBackup}.zip`;

  // Create write stream for the backup file
  let output = fs.createWriteStream(backupName);
  let archive = archiver('zip', { zlib: { level: 9 } });

  // Listen for the close event of the archive
  output.on('close', function () {
    let caption = `Berikut adalah file backup kode bot:\nNama file: ${backupName}\nUkuran file: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`;
    conn.sendFile(m.chat, backupName, backupName, caption, m)
      .then(() => {
        fs.unlinkSync(backupName); // Delete the backup file after sending
      })
      .catch((err) => {
        throw err;
      });
  });

  // Handle warnings and errors during archiving
  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });
  archive.on('error', function (err) {
    throw err;
  });

  // Pipe archive data to the file
  archive.pipe(output);

  // Append files to the archive, excluding specific patterns
  archive.glob('**/*', {
    cwd: '/home/container', // Adjust to the correct directory
    ignore: ['node_modules/**', 'sessions/', 'tmp/**', '.npm/**', backupName]
  });

  // Finalize the archive
  archive.finalize();
};

// Command metadata
handler.help = ['backupsc'];
handler.tags = ['owner'];
handler.command = /^backupsc$/i;
handler.owner = true;

export default handler;