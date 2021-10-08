// //
// // let house = {
// //     color : 'ff4676',
// //     type:'apartment',
// //     year:'1990',
// // }
// //
// // // for(let key in house){
// // //     console.log(key,house[key])
// // // }
// //
// //
// // const testArr = [1,2,3,4]
// // for(let index of testArr){
// //     console.log(index)
// // }
//
// // function maxMin(inputA , inputB) {
// //     return inputA > inputB ? inputA : inputB
// // }
// //
// // console.log(maxMin(2,5))
// //
// // function type(stringA) {
// //     return typeof (stringA) === 'string' ;
// // }
//
// //----------------------------------------
//
// // function FizzBuzz(number){
// //     if( number%15===0){
// //         return "FizzBuzz"
// //     }
// //     else if( number%3===0) {
// //         return "Fizz"
// //     }
// //     else if(number%5===0) {
// //         return "Buzz"
// //     }
// //     else
// //         return number
// // }
// // console.log(FizzBuzz(24))
// // console.log(FizzBuzz(25))
// // console.log(FizzBuzz(30))
// // console.log(FizzBuzz(22))
//
// //-----------------------
//
//
// // function powerTwo(inputA){
// //     let n = 0;
// //     if(inputA >= 1 && inputA <=1000000000) {
// //         while ((2 ** n < inputA))
// //             n++;
// //         return 2 ** n;
// //     }
// //     else
// //        return "out of range";
// // }
// //
// // console.log(powerTwo(1010))
//
//
// //-----------------------------
//
// // function completeNumber(inputA){
// //     let sum = 0;
// //     if(inputA >= 1 && inputA <=200000){
// //         for(let i = 1; i<= inputA/2; i++){
// //             if (inputA%i === 0)
// //                 sum +=i
// //         }
// //         if(sum === inputA)
// //             return "YES"
// //         else
// //             return "NO"
// //     }
// //     else
// //         return " input is out of range"
// // }
// //
// //
// // function lessThan2000(){
// //     let ans =[];
// //     for(let i = 1; i<= 2000; i++){
// //         if (completeNumber(i)==="YES")
// //             ans += i+ '  ' ;
// //     }
// //     return ans
// // }
// // console.log(lessThan2000())
//
//
// //-------------------------
//
// function prime(inputA){
//     let yoyo = 1;
//     while (yoyo < inputA) {
//         if (inputA % yoyo === 0)
//             return false
//         else
//             return true
//         yoyo += 1;
//     }
// }
// // console.log(prime(15))
// //
// // function lessThan(inputOne){
// //     let ans =[];
// //     for(let i = 2; i<= inputOne; i++){
// //         if (prime(i))
// //             ans += i+ '  ' ;
// //     }
// //     return ans
// // }
// //
// // console.log(lessThan(30))
//
//
// //-----------------------
//
//
// // function check_prime(number){
// // for( leti in range(3, math.ceil(number ** (1 / 2)) + 1, 2)){
// //     if(number % i == 0)
// //         return False
// //     return True
// // }
//
//
// function janSakht(J1){
//     let test = J1.toString();
//     let len = test.length;
//     for(let z = len; z>0; z--){
//         if(!prime(Number(test.substring(0,z))))
//             return "not jansakht"
//     }
//     return "jansakht"
// }
// console.log(janSakht(300))

const minMaxer = (a,b) => {
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    console.log("the Max number is %s " , max)
    console.log("the Min number is %s" , min)
}

const stringChecker = (a) => {
    if (typeof a === "string"){
        console.log("The input is a string")
    }else {
        console.log("The input is not a string")
    }
}

const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0 ){
        console.log("FizzBuzz")
    }else if(number % 3 === 0 ) {
        console.log("Fizz")
    }else if(number % 5 ===0 ){
        console.log("Buzz")
    }else {
        console.log(number)
    }
}

const power2Checker = (num) => {
    let i = 0 ;
    while ( 2** i <= num){
        ++i
        if (2**i > num){
            console.log(2**i)
        }
    }
}

const maghsum = (number) => {
    let store = 0 ;
    let i = 1 ;
    while ( store < number){

        if (number % i === 0){
            store = store + i ;
        }
        ++i ;
    }
    if (store === number){
        console.log("YES")
    }else {
        console.log("NO")
    }
}

const avval = (a) =>{
    let i = 2
    while ( i < a || a == 1) {
        if (a == 1 || a % i == 0 ){
            return false
        }
        ++i ;
    }
    return true
}

const avvalShow = (firstNumber , secondNumber) =>{
    let result = "";
    let max = Math.max(secondNumber , firstNumber)
    let min = Math.min(secondNumber,firstNumber)

    while (max > min+1){
        max-- ;
        if (Avval(max)===true){
            result += max + ","
        }
    }
    console.log(result.substring(0, result.length-1))
}


// const maxmaker = (number) => {
//    return  10**(number-1) - 1
// }

const numDivider =(number) => {
    let numString = number.toString()
    let i = 1
    let divided = []
    while (i <= numString.length) {
        if (avval((numString.substring(0 , i)))){
            divided.push(numString.substring(0 , i))
        }
        i++
    }
    if (divided.length === numString.length){
        return number
    }
}

const passMaker = (input) => {
    let max = (10**(input)) - 1
    let result = []
    while (max > (10**(input))/10){
        if (numDivider(max) !== undefined){
            result.push(numDivider(max))
        }
        max--
    }
    return result
}
console.log(passMaker(3))



