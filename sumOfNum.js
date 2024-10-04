const num= 456347

const a=num+"";
const b=a.split("")
console.log(b)

let sum=0;

for(var i=0; i<b.length ; i++){
   sum=sum+Number(a[i]);
}
console.log(sum)

