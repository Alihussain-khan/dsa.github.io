my_array = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("original array " + my_array);
const n = my_array.length;

//bubble sort
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n - i; j++) {
//     if (my_array[j] > my_array[j + 1]) {
//       const swap = my_array[j];
//       my_array[j] = my_array[j + 1];
//       my_array[j + 1] = swap;
//     }
//   }
// }
// console.log("after bubble sort " + my_array);

//selection sort
for (i = 0; i < n; i++) {
  let min_val = i;
  for (j = i + 1; j < n; j++) {
    if (my_array[j] < my_array[min_val]) {
      min_val = j;
      let swap = my_array[i];
      my_array[i] = my_array[min_val];
      my_array[min_val] = swap;
    }
  }
}
console.log("after selection sort " + my_array);
