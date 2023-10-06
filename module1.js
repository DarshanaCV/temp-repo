//share
const john="john"
const peter="Peter"
//local
const secret="SUPER SECRET"

//alternate ways to export
module.exports.items=['item1','item2']
const person={
    name:'BAC',
    age:12,  
}
// module.exports=items
module.exports.singlePerson=person 

console.log(module);
module.exports={john,peter}