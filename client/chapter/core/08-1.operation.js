/* ---------------- */
/* Operators        */
/* ---------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log(unary) ;

// 이항 연산자
let binary = +a + +b;
console.log(binary);

// 삼항 연산자 **********************
// let ternary = a > 10 ? '크다' : '작다';
let ternary = a > 10;
console.log(ternary);



// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 1 - 2;

// 산술 연산자: 곱셈
let multiplication = 10 * 3;

// 산술 연산자: 나눗셈
let division = 10 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log( remainder);

if( a % 2 === 0){
    console.log('짝수입니다.');
}

// const user = {
//     name: 'tiger',
//     age: 40,
//     sayHi(){
//         return 'hello'
//     }
// }


// 산술 연산자: 거듭 제곱
let power = 2 ** 53 -1;
console.log(power);

console.log( Math.pow(2,53) -1 === Number.MAX_SAFE_INTEGER);


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

console.log( coercionTypeConversion );



// 대부분의 연산자는 기본 값으로만 작동합니다.
// let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
// let onlyWorkDefaultValues = [1,2,3].concat( [4,5,6]); //concat 결합하다.

// console.log(onlyWorkDefaultValues);

let first = [1,2,3];
let second = [4,5,6];

//  ********  spread syntax  전개 구문     //많이 나오고 많이 사용한다. ******
console.log( [...first, ...second,7,8,9] );





//rest parameter
function sum(...rest){
    console.log(rest);
}



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


let counter = 0;

console.log(++counter);
// console.log(counter++);

//     /=  == 나누고 할당한다.





// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?

let total = count % 4;

count = count / 2

let pow = count ** 3;

total = total * count + pow;