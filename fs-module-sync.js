// const fs=require('fs')
// fs.readFileSync()

const {readFileSync,writeFileSync}=require('fs')
console.log("start");
const readFirst=readFileSync('./content/first.txt','utf8')
const readSecond=readFileSync('./content/second.txt','utf8')
console.log(readFirst,'\n',readSecond);


//if the file is not there node will create one
//if the file is there it will override the contents
const writeFirst=writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${readFirst},${readSecond}`,
    {flag:'a'}//a for appending
)
console.log("done with the task");
console.log("starting the next one");