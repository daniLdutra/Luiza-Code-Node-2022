function linearSearch(list, item) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] == item) {
      return i;
    }
  }
  return null;
}
const list = [12, 34, 4, 5, 1, 9, 10];

//console.log('Linear Search:' + list);
console.log(linearSearch(list, 1));
console.log(linearSearch(list, 12));
console.log(linearSearch(list, 10));
console.log(linearSearch(list, 9));
console.log(linearSearch(list, 67));
