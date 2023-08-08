// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
const removeEveryOther = arr => arr.filter((el, i) => i % 2 == 0);

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// KATA 2 7kyu
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
// filter and regex /A-Z/g return index
const capitals = word => {
	let indices = [];
  let arr = word.split('')
  console.log(arr)
  arr.forEach((el, i) => {
    if (el.match(/[A-Z]/g)) {
      indices.push(i);
    }
  })
  return indices;
};

console.log(capitals('CodEWaRs'));


// KATA 3 8kyu
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
const findAverage = arr => arr.length == 0 ? 0 : arr.reduce((ttl, cv) => ttl + cv, 0) / arr.length;


console.log(findAverage([1,2,3,4]));
console.log(findAverage([85,50,11]));
// KATA 4 8kyu
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
const countSheeps = arr => arr.filter(Boolean).length;

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]))

// KATA 5 7kyu
// https://www.codewars.com/kata/57fe864854685b1c420002e0
const sortArray = (a1, a2) => a1.map( el1 => a2.find( el2 => el1[0]===el2[0] ) );

console.log(sortArray(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'], ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']));