import cp from 'child_process';
import { promisify } from 'util';
import cron from 'node-cron';

let exec = promisify(cp.exec).bind(cp);

let clearTmp = async () => {
    let o;
    try {
        o = await exec('rm -rf tmp && mkdir tmp');
        console.log('Temporary directory cleared and recreated:', o);
    } catch (e) {
        o = e;
        console.log('Error while clearing temporary directory:', o);
    }
};

// Schedule the clearTmp function to run every 10 minutes
cron.schedule('*/5 * * * *', () => {
    console.log('Running auto-clear tmp task...');
    clearTmp();
});

// If you want to run it immediately when the server starts, uncomment the line below:
// clearTmp();