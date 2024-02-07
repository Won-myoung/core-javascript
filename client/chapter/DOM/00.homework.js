






//querySelector
const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');

//eventListener

function handleCheckId(){
    // console.log(this.value);

    if(this.value === 'hello'){
        console.log('success');
        idField.classList.remove('is-active');

    }else{
        console.log('error!');
        idField.classList.add('is-active');
    }

}

function handleSubmit(e){

    e.preventDefault();  //이벤트객체를 떨궈준다. 태그의 기본동작을 차단한다.

    console.log('제출!!')
}


idField.addEventListener('input', handleCheckId)
//input은 입력될때마다 함수를 호출한다.

submit.addEventListener('click',handleSubmit)


//classList





// preventDefault









//.value  input에서 해당값을 가져온다.
//상태변수란 아이디/비밀번호를 입력하였을때 true가 떨어지게 한다.
