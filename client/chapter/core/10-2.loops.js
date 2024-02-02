/* -------------------- */
/* Do While Loop        */
/* -------------------- */


/* 
let i = 0;

do {

    console.log(i)
    
    i++

}while( i < 5)  */






// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력


/* let repeat = prompt('몇번반복하시겠습니까?',0);

do {

    console.log(repeat);


}while(repeat--) */






// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단











// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정






let first = document.querySelector('.first');

/* do {
    
    first = first.nextSibling;

}while(first.nodeType !== 1) 
console.log ( first ); */

// }while(first.nodeType !== document.ELEMENT_NODE ) //true가 아닐때까지 처음부터 반복
//true가 아닐때까지 처음부터 반복

//Dom 세상에서 가장 작은 단위를 node라고 한다. nodeType = node 의 type을 체크하는것
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
//노드타입
//1 3 8 9번 정도는 기억해두면 좋다.



//JS core란  브라우저 console창과 같은것
//document object model
//nodeType이란  


function next(node){

    if(typeof node === 'string'){
        node = document.querySelector(node);
      }

    do{
      node = node.nextSibling;
    }while(node.nodeType !== 1)
  
    return node;
  }
  
  
  
  
  const second = next(first);
  
  console.log(second);

  //nextElementSibling 공백 바로 넘기고 다음 element 요소 찾는...


  function prev(node){
      // if(!node) throw new Error('선택된 ELEMENT의 이전 요소는 존재하지 않습니다.')

    if(typeof node === 'string'){
        node = document.querySelector(node);
      }
    
      do{
          node = node.previousSibling;

    }while(node.nodeType !== 1)
  
    return node;
  }

//   console.log( prev(document.querySelector('.second')));
  console.log( prev('.second'));
  
  
  //prev(second) => first