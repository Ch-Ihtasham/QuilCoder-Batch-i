{
    // const ab=10;
    // ab=11
    // console.log(ab)
}
let ab=['1','12dhkeh',1212]
console.log(ab)
for(let x=0;x<=ab.length;x++){
    console.log(ab[x])
}
for(let x in ab){
    console.log(ab[x])
}
for(let x of ab){
    console.log(x)
}
let obj={
    name:'ihtsham',
    class:12,
    esha:function(){
console.log('this function belongs to esha alma fabourie student of sir ihtasham')
    }
}
console.log(obj.name)
for(let x in obj){
    console.log(x,obj[x])
}
for(let[key,value] of Object.entries(obj)){
    console.log(key,value)
}