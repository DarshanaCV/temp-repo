// npm - global command, comes with node
// npm --version

//local dependencies -  use it only in this particular project
// npm i <packagename>    
//i is for install

//global dependency - use it in any project
// npm install -g <packagename>

//package.json -manifest file (stores important information about the project)
//three ways to create package.json 
// manual approach(create it in root, create properties, etc)
//npm init (step by step asks questions, press enter to skip)
//npm init -y (everything default)
const _ = require("lodash")

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
