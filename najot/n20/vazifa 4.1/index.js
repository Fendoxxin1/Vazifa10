// function teskariTartib(arr) {
//   for(let i = arr.length; i >= 0; i--){
//     console.log(arr[i]);

//   }
// }

// teskariTartib([1, 2, 3, 4, 5]);

// function juftVaToq(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     a = arr[i] % 2
//     switch (a) {
//       case 0:
//         console.log("Juft", arr[i]);

//         break;
//       case 1:
//         console.log("Toq", arr[i]);
//     }
//   }
// }

// juftVaToq([1, 2, 3, 4, 5]);

// function elementQidirish(arr, element) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(elementQidirish([10, 20, 30, 40, 50], 30));
// console.log(elementQidirish([10, 20, 30, 40, 50], 60));

// function engKattaElement(arr) {
//   let a = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (a < arr[i]) {
//       a = arr[i];
//     }
//   }
//   return a;
// }
// console.log(engKattaElement([10, 5, 8, 12, 3]));

// function elementlarniAlmashtirish(arr, index1, index2) {
//   let newArr = arr.slice();
//   newArr[index1] = arr[index2];
//   newArr[index2] = arr[index1];
//   return newArr;
// }
// console.log(elementlarniAlmashtirish([1, 2, 3, 4, 5], 1, 3)); // Natija: [1, 4, 3, 2, 5]

// function diapazondagiElementlar(arr, min, max) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] <= max && arr[i] >= min) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(diapazondagiElementlar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7)); // Natija: [3, 4, 5, 6, 7]

function bahoTahlili(baholar) {
  let avarage = 0,
    max = 0,
    min = baholar[0],
    ball = [];
  for (i = 0; i < baholar.length; i++) {
    avarage += baholar[i];
    if (baholar[i] > max) max = baholar[i];
    if (baholar[i] < min) min = baholar[i];
    switch (baholar[i]) {
      case baholar[i] >= 90 && baholar[i] <= 100:
        ball.push("A");
        break;
      case baholar[i] >= 80 && baholar[i] <= 89:
        ball.push("B");
        break;
      case baholar[i] >= 70 && baholar[i] <= 79:
        ball.push("C");
        break;
      case baholar[i] >= 60 && baholar[i] <= 69:
        ball.push("D");
        break;
      case baholar[i] >= 0 && baholar[i] <= 59:
        ball.push("F");
        break;
    }
  }
  console.log(Math.round((avarage / baholar.length) * 100) / 100);
  console.log("Eng yuqori baho:", max);
  console.log("Eng past baho:", min);
}

bahoTahlili([85, 92, 78, 65, 88, 72, 90, 60, 96, 55, 78, 82]);
