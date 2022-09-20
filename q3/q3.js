var a = [3,3,1,1,1,8,3,6,8,7,8];

let n = a.length;
let keepCount = new Map();
let keepIndex = new Map();

for(let i =0;i<n;i++){
    if(keepCount.has(a[i])) {
        keepCount.set(a[i],keepCount.get(a[i])+1);
    }
    else{
        keepCount.set(a[i],1);
        keepIndex.set(a[i],i);
    }
}
console.log(keepCount)
console.log(keepIndex)

function sorting(a,b){
    let f1 = keepCount.get(a);
    let f2 = keepCount.get(b);
    if(f1 == f2){
        return keepIndex.get(a) - keepIndex.get(b);
    }
    else{
        return keepCount.get(b) - keepCount.get(a);   
    }
}
a.sort(sorting);
console.log(a);
