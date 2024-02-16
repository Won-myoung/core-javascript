

/* global gsap */

import { 
    tiger,
    delayP,
    insertLast,
    changeColor,
    getNode as $,
    renderSpinner,
    renderUserCard,
    renderEmptyCard,
    clearContents,
  } from "./lib/index.js";



const END_POINT = 'https://jsonplaceholder.typicode.com/users'

const userCardInner = $('.user-card-inner')

//확인                 // const userCardInner = getNode('.user-card-inner');

//export * from './getNode.js';


//[phase-1]
// 1. user 데이터를 tiger 함수를 사용해 fetch 해주세요.
//     -tiger.get()

// 2. 함수 안에 넣기 ( renderUserList )
// 3. html, css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
//    - 유저 데이터(array) 순환하여 모든 아이템 뽑아내기 (forEach)
//    - 템플릿 변수 만들기 (article)
//    - template literal을 사용하여 데이터 집어넣기(보간: interpolation)
//    - insertLast함수를 사용하여 화면에 렌더링하기




async function renderUserList(){
    
    renderSpinner(userCardInner);

    try{

        await delayP()

        // const spinner = $('.loadingSpinner');


        gsap.to('.loadingSpinner',{
            duration: 3,//기본값 0.5초
            opacity:0,
            onComplete(){
                $('.loadingSpinner').remove()
            }
        })
        // spinner.remove()

        const response = await tiger.get(END_POINT);

        const userData = response.data;

        userData.forEach((user)=>{
        // console.log(user.website);

        // user.name
        

        userData.forEach((user)=> renderUserCard('.user-card-inner',user))

        changeColor('.user-card');

        gsap.from('.user-card',{   // 무료
            x: 100,
            opacity:0,
            stagger:0.1,
        }/* option */)

    })
}
catch{

    console.log('error!')
    
    renderEmptyCard(userCardInner)
}
}

renderUserList()


function handleDelete(e){
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if( !article || !button ) return;
  const id = article.dataset.index.slice(5) ;

  
  tiger.delete(`${END_POINT}/${id}`).then(()=>{

    clearContents(userCardInner)
    renderUserList()

  })


}

userCardInner.addEventListener('click',handleDelete)






const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');



function handleCreate(){

  gsap.to('.pop',{autoAlpha:1})
}


function handleCancel(e){
  e.stopPropagation()
  gsap.to('.pop',{autoAlpha:0})
}


function handleDone(e){
  e.preventDefault() // html 태그의 기본 동작을 차단 
  
  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website }


  tiger.post(END_POINT,obj).then(()=>{
    clearContents(userCardInner)
    renderUserList()
    gsap.to('.pop',{autoAlpha:0})

  })
}


createButton.addEventListener('click',handleCreate)
cancelButton.addEventListener('click',handleCancel)
doneButton.addEventListener('click',handleDone)