const fs = require('fs').promises;
const path = require('path');
const Console = require('./../class/Console.class');
/**
 * Reads all files in a directory recursively, excluding specified extensions.
 * @param dirPath
 * @param includeExtensions
 * @returns {Promise<*[]>}
 */
module.exports = async function readAllFilesInDirectoryRecursively(dirPath, includeExtensions) {
    let filesList = [];
    for(const currentPath of dirPath) {
        try{
            const entries = await fs.readdir(currentPath, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = path.join(currentPath, entry.name);
                if (entry.isDirectory()) {
                    const subdirectoryFiles = await readAllFilesInDirectoryRecursively([fullPath], includeExtensions);
                    filesList = filesList.concat(subdirectoryFiles);
                } else {
                    const fileExtension = path.extname(entry.name).toLowerCase();
                    if (includeExtensions.includes(fileExtension)) {
                        filesList.push(fullPath);
                    }
                }
            }
        }catch (error){
            Console.e('Error reading directory: ' + currentPath);
        }
    }
    return filesList;
}