const Console = require("../class/Console.class");
const cliProgress = require('cli-progress');
const extractCommentsFromFile = require('./../Util/ExtractComments');
const program = require('./../config/Program.config');

/**
 * Processes a list of files to extract comments based on the declarator tag.
 * @param files
 * @returns {Promise<void>}
 */
module.exports = async function processFiles(files){
    Console.s('Extracting each file content and processing...');
    const readingBar = new cliProgress.SingleBar({
        stopOnComplete: true,
        forceRedraw: true
    }, cliProgress.Presets.shades_classic);
    readingBar.start(files.length, 0);
    const comments = [];
    for(const filePath of files) {
        const comment = await extractCommentsFromFile(filePath, `${program.opts().declarator}`);
        readingBar.increment();
        if( comment !== null && comment.length > 0){
            for (const c of comment) {
                comments.push(c);
            }
        }
    }
    readingBar.stop();

    return comments;
}