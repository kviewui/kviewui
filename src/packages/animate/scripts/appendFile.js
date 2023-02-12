const styleDir = '../styles/';

const fs = require('fs');
const os = require('os');
const shell = require('shelljs');
const chalk = require('chalk');

const content = fs.readFileSync(`${styleDir}/index.css`, 'utf-8');

// 生成文件头部注释内容
var head = require('./constant').FILE_HEAD;
var contents = [content];

function appendFile(filePath){
    for(var i=0;i<contents.length;i++){
        shell.chmod('-R', 755, filePath);
        fs.appendFileSync(filePath,contents[i]+os.EOL);
    }
}

var fileContents = [head];

function writeFile(filePath) {
    for(var i=0;i<fileContents.length;i++){
        shell.chmod('-R', 755, filePath);
        fs.writeFileSync(filePath,fileContents[i]+os.EOL);
    }
}

writeFile(`${styleDir}/index.css`);
appendFile(`${styleDir}/index.css`);

console.log(chalk.green('动画库css样式库文件初始化完成...'));