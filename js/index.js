// // 1
// function test(arg){
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//           sum += arg[i];
//     }
//     return sum
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(test(arr));

// 2
// function test(arg){
//     let res=Math.min(...arr)
//     return res
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(test(arr));

// 3
// function test(arg){
//    let res = arr.join().length;
//    return res
// }
// let arr = ['salom']
// console.log(test(arr));

// 4
// function test(arg) {
//     let res = arg.sort(function(a, b){
//         return b -a
//     })
//     return res
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(test(arr));

// 5
// function test(arg1, arg2) {
//   let res = arg1.concat(arg2);
//   return res;
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// console.log(test(arr1, arr2));

// 6
// function test(arg) {
//   let res = arg.reverse();
//   return res;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(test(arr));

// 7
// function test(arg){
//     let res = []
//     for(let i=0; i < arg.length; i++){
//         if (arg[i] > 0) {
//             res.push(arg[i])
//         }
//     }
//     return res
// }
// let arr = [1, -2, 3, -4, 5];
// console.log(test(arr));

// 9
// function test(arg) {
//     let musbat = [];
//     let manfiy = [];
//     for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       musbat.push(arg[i]);
//     } else {
//       manfiy.push(arg[i])
//     }
//   }
//   return {musbat, manfiy}
// }
// let arr = [ 1, 2, 3, 4, 5, -6, -7, -8, -9, -10]
// console.log(test(arr));


// 11
// function test(arg){
//     let sum = 0;
//     for(let i = 0; i < arg.length; i++){
//         sum += arg[i];
//     }
//     let res = sum / arg.length;
//     return res
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(test(arr));


// 12
// function test(arg) {
//     let musbat = [];
//     let manfiy = [];
//     for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       musbat.push(arg[i]);
//     } else {
//       manfiy.push(arg[i])
//     }
//   }
//   return {musbat, manfiy}
// }
// let arr = [ 1, 2, 3, 4, 5, -6, -7, -8, -9, -10]
// console.log(test(arr));


// 13
// function test(arg){
//   arr.pop();
//   arr.pop();
//   arr.pop();
//     arr.push(1, 2, 3, 4, 5, 6)

//     return arr
// }
// let arr = [1, 2, 3];
// console.log(test(arr));


// 14
// function test(arg){
//     let res = [];
//     for(let i =0; i < arg.length; i++){
//        res.push(arg[i] ** 2)
//     }

//     return res
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(test(arr));


// 15
// function test(arg){
//     let res = [];
//     for(let i=0; i < arg.length; i++){
//       let = res.push(arg[i] * 2)
//     }
//     return res
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(test(arr));


// 16
// function test(arg){
//     let res = [];
//     for(let i=0; i < arg.length; i++){
//         if (arg[i]  !== undefined && arg[i] !== null) {
//            res.push(arg[i])
//         }
//     }
//     return res
// }
// let arr = [1, undefined, 3, 4, null];
// console.log(test(arr));


// 18
// function test(arg, element = 1){
//     let count = 0;
//         for(let i=0; i < arg.length; i++){
//         if (arg[i] == element) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr = [1, 2, 3, 4, 5, 1, 6, 1, 7, 1]
// console.log(test(arr));


// 19
// function test(arg){
//     for(let i=0; i < arg.length; i++){
//        arg.splice(1, 0, 3)
//     }
//     return arg
// }
// let arr = [1, 2,  4, 5];
// console.log(test(arr));


// 21
// function test(arg){
//     let max = "";
//     for(let i=0; i < arg.length; i++){
//         if (arg[i].length > max.length) {
//            max = arg[i];
//         }
//     }
//     return max
// }
// let arr = ['salom', 'xayr', 'length']
// console.log(test(arr));


// 23
function test(arg){
    let res = []
    for(let i=0; i < arg.length; i++){
       if (typeof arg[i] === 'number') {
        res.push(arg[i])
       }
    }
    return res
}
let arr = [1, 2, 3, 'salom', 4, 'mmm', 5]
console.log(test(arr));

