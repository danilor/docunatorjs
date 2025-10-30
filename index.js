#!/usr/bin/env node
/**
 * Requirements
 */

const Console = require('./class/Console.class');
const program = require('./config/Program.config');
const configuration = require('./config/default.config');
const fs = require('fs').promises;

const readAllFilesInDirectoryRecursively = require('./Util/ReadFiles');

const processFiles = require('./Util/ProcessFiles');
const processComments = require('./Util/ProcessComments');

/**
 * END of Requirements
 */

/**
 * Processes files in the input directory.
 * @returns {Promise<void>}
 */
async function process() {
    // Console.c('Reading files:');
    const files = await readAllFilesInDirectoryRecursively(configuration.input, configuration.include.map(ext => ext.startsWith('.') ? ext.toLowerCase() : '.' + ext.toLowerCase()));
    if (files.length === 0) {
        Console.e('No files found to process. Exiting.');
        return;
    }
    files.map(f => Console.c(' - ' + f));
    Console.s().c(` * Found ${files.length} files to process.`);
    const comments = await processFiles(files, configuration.declarator);
    if (comments.length === 0) {
        Console.e('No comments found with the specified declarator tag. Exiting.');
        process.exit(0);
        return;
    }
    // Console.s().c(` * Extracted a total of ${comments.length} comments with the declarator tag.`);

    const result = await processComments(comments);

    // Console.s().c('Comments processing completed ');
    // Console.c(result);
    Console.s().c('Output JSON: ' + configuration.output);
    await fs.writeFile(configuration.output, JSON.stringify(result, null, 2));
}

/**
 * Displays the current configuration.
 * @returns {Promise<void>}
 */
async function displayConfig() {
    Console.s().c('Current Configuration:');
    Console.c(' - Input Path: ' + configuration.input.join(', '));
    Console.c(' - Output Path: ' + configuration.output);
    Console.c(' - Including extensions: ' + configuration.include.join(', '));
    Console.c(' - Using declarator tag: ' + configuration.declarator).s();
}

async function replaceConfig() {

    // Check if a custom config file exists
    const customConfigPath = program.opts().config;
    try {
        await fs.access(customConfigPath);
        // If the file exists, read and parse it
        const customConfigData = await fs.readFile(customConfigPath, 'utf-8');
        const customConfig = JSON.parse(customConfigData);
        // Override default configuration with custom configuration
        Object.assign(configuration, customConfig);
        Console.s().c('Custom configuration loaded from ' + customConfigPath).s();
    } catch (err) {
        // If the file does not exist, continue with default configuration
        Console.s().c(`No custom configuration file found ${customConfigPath}, using default configuration.`).s();
    }

    // Now override configuration with command-line options
    const options = program.opts();
    if (options.input) {
        configuration.input = options.input;
    }
    if (options.output) {
        configuration.output = options.output;
    }
    if (options.include) {
        configuration.include = options.include;
    }
    if (options.declarator) {
        configuration.declarator = options.declarator;
    }


}

/**
 * Main function
 */
async function main() {
    Console.s().title('Docunator JS').s();
    // First we need to see if we have any config file to load
    await replaceConfig();
    await displayConfig();
    await process();
}

const r = main();