const Tags = require("./../config/Tags.config");
const Console = require("../class/Console.class");
const cliProgress = require("cli-progress");


/**
 * Processes a single comment.
 * @param comment
 * @returns {Promise<{}>}
 */
async function processSingleComment(comment) {
    const obj = {};
    const keys = Object.keys(Tags);

    for (const key of keys) {

        const tag = Tags[key];
        if (tag.regex) {

            if (tag.type === 'single') {
                /**
                 * Single Tag Processing
                 */
                tag.regex.lastIndex = 0;
                const matches = comment.match(tag.regex);
                if (matches !== null && matches[1]) {
                    obj[tag.key] = matches[1];
                }

            } else if (tag.type === 'array') {
                /**
                 * Array Tag Processing
                 */
                const matches = comment.match(tag.regex);
                // Console.c(`Processing tag '${key}' with matches:`).c(comment).c(matches);
                if (matches !== null && matches.length > 0) {
                    for (const singleMatch of matches) {
                        tag.regex.lastIndex = 0;
                        const intraMatches = tag.regex.exec(singleMatch);
                        if (intraMatches === null) {
                            Console.s().c('Error Processing single match:').c(singleMatch).s().s();
                            Console.c(tag.regex);
                            Console.c(intraMatches);
                        }
                        if (tag.indexes && intraMatches !== null) {
                            if (!obj[tag.key]) {
                                obj[tag.key] = [];
                            }
                            const entry = {};
                            for (let i = 0; i < tag.indexes.length; i++) {
                                entry[tag.indexes[i]] = (intraMatches[i + 1] ?? '').trim();
                            }
                            obj[tag.key].push(entry);
                        } else {
                            // Console.w('No indexes defined for array tag processing or no matches captured.');
                        }
                    }
                }
            } else {
                // Console.w(`Unknown tag type '${tag.type}' for tag key '${key}'.`);
                // DO NOTHING
            }
        }
    }
    return obj;
}


/**
 * Processes a list of comments.
 * @param commentsList
 * @returns {Promise<void>}
 */
module.exports = async function processComments(commentsList) {
    Console.s().c('Processing extracted comments...');

    const readingBar = new cliProgress.SingleBar({
        stopOnComplete: true,
        forceRedraw: true
    }, cliProgress.Presets.shades_classic);
    readingBar.start(commentsList.length, 0);

    const processedComments = [];
    for (const comment of commentsList) {
        const processedComment = await processSingleComment(comment);
        processedComments.push(processedComment);
        readingBar.increment();
    }
    readingBar.stop();
    return processedComments;
}