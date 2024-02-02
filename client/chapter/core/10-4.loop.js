/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,
    hasOwnProperty(){
        return '내가 누굴까?'
    }
  };
  
  
Object.prototype.nickName = 'tiger';

  // 객체의 속성(property) 포함 여부 확인 방법

//   const key = 'valueOf'
//   const key = 'toString'
//   const key = 'creator'
  const key = 'nickName'

  /* console.log( key in js ); */ //내 조상까지 찾는다.
  // key in js

  //JS는 hasOwnProperty를 보호해주지 않는다.
  //생성된 객체의 method는 불안함, => 진짜 객체의 능력을 빌려씀

  //method 빌려쓰기 (call)

//   console.log(js.hasOwnProperty(key));

console.log(Object.prototype.hasOwnProperty.call(js,key));
//   console.log(({})hasOwnProperty.call(js,key));
//({})  = 새로운 객체 느낌 


//자신의 속성을 가지고 있는지 확인 방법

  // - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
  
  
  // 객체 자신의 속성인지 확인하는 방법
  // - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은? hasOwnProperty
  
  
  // for ~ in 문
  // - 객체 자신의 속성만 순환하려면?
  // - 배열 객체 순환에 사용할 경우?




console.clear()

for(let key in js){

    if(Object.prototype.hasOwnProperty.call(js,key)){
        console.log(key);
    }
}

//배열도 for..in을 쓸 수 있을까?

const tens = [10,100,1000,1000];

for(let key in tens){
    console.log(tens[key]);
}




//반복문