/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.




function Ani(name){
    this.name = name

}

const _a = new Ani('호돌이')



/* ------------------------------------------- */


//constructor method는 최초 1회만 실행됨. ( n회? X )
//n회 반복이 필요하면 constructor 에 넣지만 않으면 된다.

class Animal {

    constructor(name){
        this.name = name;
        this.stomach = [];
        this.legs = 4;
        this.tail = true;
    }

    getEat(){
        return this.stomach
    }

    setEat(food){
        this.prey = food;
        this.stomach.push(food)
    }

}


//const a = new Animal('호돌이')

class Tiger extends Animal{
    constructor(){
        super(name)  //부모의 능력을 다 가져다 쓰겠다.
        this.pattern = '호랑이무늬'
    }

    static option = {
        version: '0.0.1',
        company: 'like-lion',
        ceo: '---'
    }

    static bark(){
        return '어흥!'
    }

    hunt(target){
        return `${target}에게 조심히 접근한다.`
    }
}



const 한라산호랑이 = new Tiger('한돌이');


