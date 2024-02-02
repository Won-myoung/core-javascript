/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
// console.log(typeof empty);

// 2. 값이 할당되지 않은 상태

let undef;
// console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello"; //string literal 방식
const single = 'hello';
const backtick = `hello ${undef}`;

const str = new String('안녕!'); 
//string constructor(생성자) 방식
// console.log(str);

// console.log(backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150;
const floatingPointNumber = 10.331;

// console.log(typeof integer);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;
// console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)
const isClicked = false;
// console.log(typeof isClicked);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = { name: 'tiger' };
// console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uuid');
// console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

function sayHi() {}

const user = {
  name: 'tiger', //property
  age: 27,
  //name, age == key   'tiger', 27 == value
  sayHi: function () {
    console.log('hello~~');
  },
  //normal method
  //구버전이고 prototype : constructor가 들어가있고 무겁다는 단점이 있다.
  sayHi2: () => {
    console.log('hello2~~');
  },
  //arrow function method
  //arrow function은 this를 binding하지 않습니다.
  sayHi3() {
    console.log('hello~~');
  },
  //concise method   가장 많이 사용되는 method
};

// Array

// const arr = [1, 2, 'a', { name: 'tiger' }, 5];

// console.log(arr[0]);

// function
// 상자  함
//   셈  수

function sum(a, b) {
  console.log(a + b);
  return a + b;
}
//함수는 선언한것만으로 실행되지 않는다. 위의 세줄은 선언문이다.

sum(1, 2);
//호출
// const result = sum(1, 2);

// console.log(result);

// this
