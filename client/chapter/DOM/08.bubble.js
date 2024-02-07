/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');




section.addEventListener('click',function(e){   
                // 애로우 function을 사용할땐 this를 못써서 e.currentTarget을 사용한다.


    // console.log(e.target);  // 첫 번째로 마주하는 마우스 포인터 대상
    console.log(this === e.currentTarget);
    // console.log('%c section','color:orange');
})


// article.addEventListener('click',()=>{
//   console.log('%c article','color:dodgerblue');
// })


// p.addEventListener('click',(e)=>{

// e.stopPropagation(); //버블링 스탑
//   console.log('%c p','color:hotpink');
// })


/* 캡처링 ----------------------------------------------------------------- */