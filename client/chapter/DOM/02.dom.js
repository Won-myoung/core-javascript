/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

const first = getNode('.first');
const spanList = getNode('span');




// console.log( first );
// console.log(spanList);



/* 문서 대상 확인 */
// - matches
// - contains


// targetdp selector가 있어?
first.matches('span') 

//h1 태그안에 .second 라는 자식 있어?
console.log( getNode('h1').contains(getNode('.second')) );