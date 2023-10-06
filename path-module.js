const path=require('path')

//platform specific separator / or \
console.log(path.sep);

//joins a sequence of path segments using platform specific separator 
//returns a normalize resulting path
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath);

const base=path.basename(filePath)
console.log(base);

//accepts a sequence of paths or path segments and resolves it into an absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);