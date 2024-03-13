my_array = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("original array " + my_array);

//bubble sort
const n = my_array.length;
for (i = 0; i < n; i++) {
  for (j = 0; j < n - i; j++) {
    if (my_array[j] > my_array[j + 1]) {
      const swap = my_array[j];
      my_array[j] = my_array[j + 1];
      my_array[j + 1] = swap;
    }
  }
}
console.log("after bubble sort " + my_array);

//selection sort
