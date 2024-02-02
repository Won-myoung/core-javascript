/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Array.isArray(data);

//풀어쓰기 
function isArray2 (data){
    return Array.isArray(data)
}

const people = [
    {
        id:0,
        name: '박가희',
        age: 25,
        job: '명탐정코난 범인',
        imageSrc: 'FAkq31',
        alt: '어두컴컴한 ~~'
    },
    {
        id:1,
        name: '김보미',
        age: 64,
        job: '짜요짜요 마케팅',
        imageSrc: 'Gakz34'
    },
    {
        id:2,
        name: '한태희',
        age: 13,
        job: '삐돌이',
        imageSrc: 'Fkzoq81'
    },
    {
        id:3,
        name: '이원명',
        age: 81,
        job: '이도령',
        imageSrc: 'Tq9z1i'
    }
]


/* 요소 순환 ---------------------------- */

// forEach //배열에 사용한다.//안에 함수를 넣어준다.(콜백함수)
// forEach는 값을 반환하지 않는다. 

let nameArray = [];

people.forEach((item,index)=>{
    nameArray.push(item.name)
})

// console.log(nameArray)

//이벤트가 많을 때 이런 방식은 좋지 않다.

const list = document.querySelectorAll('span');

list.forEach((item)=>{
    item.addEventListener('click',()=>{
        console.log(this)
    })
})



// list[0].addEventListener('click',()=>{
//     console.log('first!!!');
// })
// list[1].addEventListener('click',()=>{
//     console.log('second!!!');
// })







/* 원형 파괴 ----------------------------- */

const arr = [10,100,1000,10_000]

// push
// pop
// unshift
// shift

// reverse
// const reverse = arr.reverse();
const reverse = [...arr].reverse(); //원형을 복사해서 원본은 유지하고

// splice
// const splice = arr.splice(1,2,'java','css')     //splice는 추가 삭제 모두 가능 slice 상위버전

// sort
/* arr.sort((a,b)=>{
    return b - a
})
 */

const newArray = arr.toReversed()







/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map 새로운 배열을 반환함.

// const job = people.map((item,index)=>{
//     // console.log(item.job);
//     return item.job
// })
// const job = people.map((item,index)=> item.job )


const card = people.map((item,index)=>{

    return /* html */ `
      <div class="userCard"-${index+1}>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
        <span>이름 : ${item.name}</span>
        <span>나이 : ${item.age}</span>
        <span>직업 : ${item.job}</span>
      </div>
    `
  })
  
  
//   card.forEach((item)=> document.body.insertAdjacentHTML('beforeend',item))

const newAge = people.map(item => item.age +1);




const 젊은이들 = people.filter((item)=>{   //복수    //배열
    // return item.age < 30
    return item.name === '박가희'
})

const find = people.find((item)=>{    //단수     //객체
    return item.job === '삐돌이' 
})


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

/* ㅁ */


// const totalAge = people.reduce((acc,cur) => acc + cur.age ,0)
const totalAge = people.reduce((acc,cur)=>{
    acc + cur.age
},0)

const tem = people.reduce((htmlCode,cur)=>{
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
},'')

document.body.insertAdjacentHTML('beforeend',tem)

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split    : string -> array

const str = '원명 가희 소정 설아 경민 진욱'

const stringToArray = str.split(' ')

console.log( stringToArray );


// join    //array -> string

const arrayToString = stringToArray.join('/');

console.log( arrayToString );