/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


//동물 > 호랑이 > 어떤 호랑이

const animal = {
    legs:4,
    tail:true,
    stomach:[],
    get eat(){
        return this.stomach
    },
    set eat(food){
        this.prey = food;
        this.stomach.push(food)
    }
}

const tiger = {
    pattern: '호랑이무늬',
    hunt(target){
        this.prey = target;
        return `${target}에게 조용히 접근합니다.`
    },
    __proto__: animal
}
// tiger.__proto__ = animal  //상속

// animal.setEat('과일');

//tiger.legs = 2;
//tiger에는 없는것을 추가할수도 있고
//부모격?인 animal로 들어가서 바꾸는것도 가능하다.

const 백두산호랑이 = {
    color: 'white',
    name: '백랑이',
    __proto__: tiger
}

const 용마산호랑이 = {
    color: 'greenyellow',
    name: '선돌이',
    __proto__: tiger
}





// 생성자 함수 


function Animal(){
    this.legs = 4;
    this.tail = true;
    this.stomach = [];

    this.getEat = function (){
        return this.stomach
    }

    this.setEat = function (food){
        this.prey = food;
        this.stomach.push(food)
    }
}

const a = new Animal();

function Tiger(name){
    Animal.call(this)
    this.name = name;
    this.pattern = '호랑이무늬';
    this.hunt = function(target){
        this.prey = target
        return `${target}에게 천천히 접근한다.`
    }
}

Tiger.bark = function (){
    return '어흥'
}


//static method  - 
//instance method 


//tiger.prototype = a

const 한라산호랑이 = new Tiger('한돌이');













//call, apply, bind 함수의 '메서드'

//call은 this를 전달해줄 수 있음. *****


function sum(a,b){
    //this = 1;
    console.log(this)
    console.log(a + b);
}

//대신 실행   //console의 this로 들어간다.
// sum()      = 전역객체

//call, apply 바로 실행
// sum.call('a',10,20)
// sum.apply('a',[10,20])


//사용예시
/* const user = {
    name: 'tiger'
}

Object.prototype.hasOwnProperty.call(user) */


const aa = sum.bind('a',10,30)  //묶어놓고 필요할때(나중에) 꺼내쓴다.