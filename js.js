//
// let house = {
//     color : 'ff4676',
//     type:'apartment',
//     year:'1990',
// }
//
// // for(let key in house){
// //     console.log(key,house[key])
// // }
//
//
// const testArr = [1,2,3,4]
// for(let index of testArr){
//     console.log(index)
// }

// function maxMin(inputA , inputB) {
//     return inputA > inputB ? inputA : inputB
// }
//
// console.log(maxMin(2,5))
//
// function type(stringA) {
//     return typeof (stringA) === 'string' ;
// }

//----------------------------------------

// function FizzBuzz(number){
//     if( number%15===0){
//         return "FizzBuzz"
//     }
//     else if( number%3===0) {
//         return "Fizz"
//     }
//     else if(number%5===0) {
//         return "Buzz"
//     }
//     else
//         return number
// }
// console.log(FizzBuzz(24))
// console.log(FizzBuzz(25))
// console.log(FizzBuzz(30))
// console.log(FizzBuzz(22))

//-----------------------


// function powerTwo(inputA){
//     let n = 0;
//     if(inputA >= 1 && inputA <=1000000000) {
//         while ((2 ** n < inputA))
//             n++;
//         return 2 ** n;
//     }
//     else
//        return "out of range";
// }
//
// console.log(powerTwo(1010))


//-----------------------------

// function completeNumber(inputA){
//     let sum = 0;
//     if(inputA >= 1 && inputA <=200000){
//         for(let i = 1; i<= inputA/2; i++){
//             if (inputA%i === 0)
//                 sum +=i
//         }
//         if(sum === inputA)
//             return "YES"
//         else
//             return "NO"
//     }
//     else
//         return " input is out of range"
// }
//
//
// function lessThan2000(){
//     let ans =[];
//     for(let i = 1; i<= 2000; i++){
//         if (completeNumber(i)==="YES")
//             ans += i+ '  ' ;
//     }
//     return ans
// }
// console.log(lessThan2000())


//-------------------------

function prime(inputA){
    let yoyo = 1;
    while (yoyo < inputA) {
        if (inputA % yoyo === 0)
            return false
        else
            return true
        yoyo += 1;
    }
}
// console.log(prime(15))
//
// function lessThan(inputOne){
//     let ans =[];
//     for(let i = 2; i<= inputOne; i++){
//         if (prime(i))
//             ans += i+ '  ' ;
//     }
//     return ans
// }
//
// console.log(lessThan(30))


//-----------------------


// function check_prime(number){
// for( leti in range(3, math.ceil(number ** (1 / 2)) + 1, 2)){
//     if(number % i == 0)
//         return False
//     return True
// }


function janSakht(J1){
    let test = J1.toString();
    let len = test.length;
    for(let z = len; z>0; z--){
        if(!prime(Number(test.substring(0,z))))
            return "not jansakht"
    }
    return "jansakht"
}
console.log(janSakht(300))