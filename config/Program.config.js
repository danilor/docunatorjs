/**
 * This is all the program configuration for the CLI using commander.js
 * @link https://www.npmjs.com/package/commander
 */

const { program } = require('commander');
const {promises: fs} = require("fs");
program
    .name('docunator-js')
    .description('Docunator JS is an automatic documentation generator for Typescript/JavaScript projects.')
    .version('0.0.1')
    .option('-O, --output <string>', 'The output path for the generated JSON file', 'docs.json')
    .option('-I, --input <items>', 'The list of input path of the project to document', (value) => value.split(','), ['./src'])
    .option('-A, --include <items>', 'Comma-separated list of file extensions to include', (value) => value.split(','), ['js', 'ts', 'tsx', 'jsx', 'mjs'])
    // .option('-v, --verbose', 'Enable verbose logging')
    .option('-D, --declarator <string>', 'The declarator tag for the comments to be read', '@docunator')
;
module.exports = program.parse();