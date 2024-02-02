

// function earth(){

//     let water = true;
  
//     let apple = {
//       founder:'Steve Jobs',
//       ceo:'Tim Cook',
//       product: ['iphone','macbook','macStudio','appleWatch']
//     }
  
//     return function (value){
//       water = value
//       // return apple
//     }
//   }
  
//   const UFO = earth()
  
   
//   UFO(0)



const first = document.querySelector('.first');

//함수가 알아서 실행됨    즉시실행함수 iffe

const handleClick = (()=>{

    let isClicked = false;
  
    return function(){
  
      if(!isClicked){
        document.body.style.background = 'orange'
      }else{
        document.body.style.background = 'white'
      }
    
      isClicked = !isClicked; 
  
    }
  })()
  
  //컴포넌트들을 모아놓은것들이 모듈
  
  
  first.addEventListener('click',handleClick)


function useState(initValue){

    let value = initValue;

    function read(){
        return value
    }

    function write(newValue){
        value = newValue;
    }

    return [read,write];

}

const [state,setstate] = useState(111);
//함수 밖에서 실행하기 위한 수단으로도 closure를 쓴다.

state()  //getter
setstate(3333)   //setter


