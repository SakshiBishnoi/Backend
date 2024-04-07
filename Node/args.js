// const args = process.argv.slice(2);
// for(let arg of  args) {
//     console.log(`Hi There , ${arg}!`);
// }


const fs = require('fs');
const folderName = process.argv[2] || 'Project';
 
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}