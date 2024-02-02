/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;    //찐상수 바뀌지 않는 숫자

console.log(String(YEAR));  //명시적 형 변환
console.log( YEAR + ' ');   // 암시적 형 변환
// console.log(( YEAR + '     ').trim());   trim = 공백 제거



// undefined, null

let days = null;
let weekend;

console.log(days + '');        //암시적 형 변환
console.log(undefined + '');    //암시적 형 변환


// boolean
let isClicked = false;

console.log(isClicked + '');





/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log( Number(friend) );


// null
let money = null;
console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));  //true한 값은 1이 나온다. / false한 값은 0 이 나온다.


// string
let num = '250';
console.log(Number(num));    //명시적 형 변환
console.log( num * 1);       //암시적 형 변환
console.log( num * 1);       //암시적 형 변환
console.log( num / 1);       //암시적 형 변환
console.log( +num);       //암시적 형 변환


// numeric string

const width = '105.3px';
console.log( Number(width));
console.log( parseInt(width));    //parse + Integer 즉 정수로 파싱을 해준다는 의미
console.log( parseFloat(width));   //소수점까지
// 주의할 점은 숫자 앞에 문자가 있으면 안된다. 숫자 중간에 문자가 들어가있으면 문자부분부터 뒤에 숫자까지 모두 잘린다.



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));


// 위에 나열한 것 이외의 것들 

console.clear()

// const value = prompt('값을 입력해주세요');
const value = Number(prompt('값을 입력해주세요'));
const numberValue = +value;

// console.log( Number(value) + 50);
// console.log( value*1 + 50);
// console.log( value/1 + 50);
// console.log( (value/1) + 50);
console.log( +value + 50);

//  문 vs 식       식은 값을 반환하고 문은 값을 반환하지 않습니다.

