const data = new Set([1,65,4,6,4,12,1,45,6,47,4,2]);
data.add(6);
data.add(2).add(8);
console.log(data.has(47));
console.log(data);
console.log(data[1]);
console.log(data.size);
data.clear();
console.log(data.size);
