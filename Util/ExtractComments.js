const fs = require('fs').promises;

const Console = require("../class/Console.class");


/**
 * Extracts comments from content based on the declarator tag.
 * @param content
 * @param declaratorTag
 * @returns {Promise<*|*[]>}
 */
async function extractCommentsFromContent(content, declaratorTag) {
    const d = declaratorTag ?? '@docunator';
    // Console.c(`   - Extracting comments with declarator tag: ${d}`);
    const regex = /\/\*\*(.+?)\*\*?\//gmsi;
    const commentRegex = new RegExp('\\\/\\*\\*(.+?)\\*\\*?\\\/', 'gsim');
    const comments = content.match(commentRegex) || [];
    return comments.filter(comment => comment.includes(d));
}

/**
 * Extracts comments from a file based on the declarator tag.
 * @param filePath
 * @param declaratorTag
 * @returns {Promise<*|*[]|null>}
 */
module.exports = async function extractCommentsFromFile(filePath, declaratorTag)  {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        // Console.c('Reading comments from file: ' + filePath);
        const c =  await extractCommentsFromContent(content, declaratorTag);
        // Console.c(` - Found ${c.length} comments in file ${filePath}`);
        // Console.c(c);
        if(c===null || c.length === 0){
            return null;
        }
        // Console.c(`   - Extracted ${c.length} comments from file ${filePath}`);
        return c;
    } catch (error) {
        Console.e(`Error reading file ${filePath}: ${error.message}`);
        process.exit(1);
        return null;
    }
}