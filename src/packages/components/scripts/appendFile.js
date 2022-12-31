const sourceDir = '../common/css/dist';

const fs = require('fs');
const os = require('os');
const shell = require('shelljs');

const str = fs.readFileSync(`${sourceDir}/demo.css`, 'utf-8');
const content = fs.readFileSync(`${sourceDir}/index.css`, 'utf-8');

const package = require('../package.json');
console.log(package.author);

// 生成文件头部注释内容
var head = require('./constant').FILE_HEAD;
var contents = [content, str];

function appendFile(filePath){
    for(var i=0;i<contents.length;i++){
        shell.chmod('-R', 755, filePath);
        // shell.mv('-f', filePath, `${sourceDir}/index.txt`);
        fs.appendFileSync(filePath,contents[i]+os.EOL);
            //fs.appendFileSync(filePath,contents[i]+os.EOL);
    }
}

var fileContents = [head];

function writeFile(filePath) {
    for(var i=0;i<fileContents.length;i++){
        shell.chmod('-R', 755, filePath);
        // shell.mv('-f', filePath, `${sourceDir}/index.txt`);
        fs.writeFileSync(filePath,fileContents[i]+os.EOL);
            //fs.appendFileSync(filePath,contents[i]+os.EOL);
    }
}

writeFile(`${sourceDir}/index.css`);
appendFile(`${sourceDir}/index.css`);