import fs from 'fs';
import path, { dirname } from 'path';
import assert from 'assert';
import { syntaxError } from 'syntax-error';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(__filename);

/**
 * Function to recursively find all JavaScript files in a directory.
 * @param {string} dir - Directory path to search.
 * @returns {string[]} - Array of absolute paths to JavaScript files.
 */
function findJavaScriptFiles(dir) {
    const files = [];

    function traverseDirectory(directory) {
        const items = fs.readdirSync(directory);
        for (const item of items) {
            const itemPath = path.join(directory, item);
            const stat = fs.statSync(itemPath);
            if (stat.isDirectory()) {
                traverseDirectory(itemPath);
            } else if (stat.isFile() && item.endsWith('.js')) {
                files.push(itemPath);
            }
        }
    }

    traverseDirectory(dir);
    return files;
}

/**
 * Checks JavaScript files for syntax errors and asserts their validity.
 * @param {string[]} files - Array of file paths to check.
 */
function checkSyntaxAndAssert(files) {
    files.forEach(file => {
        try {
            console.log('Checking', file);
            const code = fs.readFileSync(file, 'utf8');
            const error = syntaxError(code, file, {
                sourceType: 'module',
                allowReturnOutsideFunction: true,
                allowAwaitOutsideFunction: true
            });
            if (error) {
                assert.fail(`Syntax error in ${file}\n\n${error}`);
            }
            console.log('Done', file);
        } catch (err) {
            console.error(`Error checking ${file}:`, err);
        }
    });
}

// Retrieve directories from package.json and include current directory ('.')
const packageDirectories = Object.keys(require(path.join(__dirname, './package.json')).directories);
const folders = ['.', ...packageDirectories];

// Find all JavaScript files in specified directories
const filesToCheck = folders.flatMap(folder => findJavaScriptFiles(folder));

// Check syntax and assert validity
checkSyntaxAndAssert(filesToCheck);