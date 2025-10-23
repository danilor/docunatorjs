#!/usr/bin/env node
/**
 * Requirements
 */

const Console = require('./class/Console.class');
const program = require('./config/Program.config');
const fs = require('fs').promises;

const readAllFilesInDirectoryRecursively = require('./Util/ReadFiles');

const processFiles = require('./Util/ProcessFiles');
const processComments = require('./Util/ProcessComments');
/**
 * END of Requirements
 */
// Console.s().title('Docunator JS').s();

/**
 * Processes files in the input directory.
 * @returns {Promise<void>}
 */
async function process(){
    Console.c('Reading files:');
    const files = await readAllFilesInDirectoryRecursively(program.opts().input, program.opts().include.map(ext => ext.startsWith('.') ? ext.toLowerCase() : '.' + ext.toLowerCase()));
    if(files.length === 0){
        Console.e('No files found to process. Exiting.');
        return;
    }
    files.map(f => Console.c(' - ' + f));
    Console.s().c(` * Found ${files.length} files to process.`);
    const comments = await processFiles(files);
    if(comments.length === 0){
        Console.e('No comments found with the specified declarator tag. Exiting.');
        process.exit(0);
        return;
    }
    Console.s().c(` * Extracted a total of ${comments.length} comments with the declarator tag.`);

    const result = await processComments(comments);

    Console.s().c('Comments processing completed ');
    // Console.c(result);
    Console.c('Writing output to ' + program.opts().output);
    await fs.writeFile(program.opts().output, JSON.stringify(result, null, 2));
}

/**
 * Displays the current configuration.
 * @returns {Promise<void>}
 */
async function displayConfig(){
    Console.c(' - Input Path: ' + program.opts().input.join(', '));
    Console.c(' - Output Path: ' + program.opts().output);
    Console.c(' - Including extensions: ' + program.opts().include.join(', '));
    Console.c(' - Using declarator tag: ' + program.opts().declarator).s();
}

/**
 * Main function
 */
async function main(){
    Console.c('Docunator-JS Configuration:').s();
    await displayConfig();
    await process();
}

const r = main();