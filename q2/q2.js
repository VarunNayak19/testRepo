function flatteningOfArray(a){
    var output = [];
    for(let i=0;i<a.length;i++){
        if(!Array.isArray(a[i])){
            output.push(a[i])
        }
        else{
            output = output.concat(flatteningOfArray(a[i]))
        }
    }
    return output;
}
var res = flatteningOfArray([ [1, 2, [3, 4, [5]]]])
console.log(res);