function findDuplicate(arr) {
  let counter = {};
  let duplicates = [];
  for (let el of arr) {
    if (counter[el] && !duplicates.includes(el)) {
      duplicates.push(el);
    } else {
      counter[el] = 1;
    }
  }
  return duplicates;
}

console.log(findDuplicate([1, 2, 2, 2, 3, 4, 4]));
console.log(findDuplicate([1, 2, 3, 4]));
console.log(findDuplicate([1, "ppp", 3, 4, "ppp"]));

function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    }
    seen.add(num);
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 2, 2, 3, 4, 4]));
console.log(findDuplicates([1, 2, 3, 4]));
console.log(findDuplicates([1, "ppp", 3, 4, "ppp"]));
