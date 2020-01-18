//Task1
function whichDay() {
    let day = prompt("Какой сегодня день?");
    if(day!==undefined){
        alert(day);
        return;
    }
    alert("Вы ничего не ввели!");
}

//Task2
function message() {
    let role = prompt("Кто вы?");
    let message = (role === "Гость")?"Привет!":(role==="Директор")?"Здравствуйте":(role==="")?"Познакомимся":"";
    alert(message);
}

//Task3a
function jsTest(){
    let ans = prompt("Каково официальное название Java Script?", "Не знаю(");
    let message = (ans === "EcmaScript")?"Верно!":"Не знаете? EcmaScript!";
    alert(message);
}

//Task3б
function whoAreYou(){
    let role = prompt("Кто пришел?");
    if(role === null){
        alert("Вход отменен");
        return;
    }
    if (role === 'Админ'){
        let pass = prompt("Пароль?");
        if(pass === null) {
            alert("Вход отменен");
            return;
        }
        if(pass === "Черный Властелин"){
            alert("Добро пожаловать!");
        }
        else alert("Пароль неверен");
    }
    else {
        alert("Я вас не знаю.");
    }
}

//Task 4
function fib(){
    let v1 = 0;
    let v2 = 1;
    let t;
    console.log(v1);
    console.log(v2);
    for (let i = 0; i < 13; i++){
        t = v1+v2;
        v1 = v2;
        v2 = t;
        console.log(t);
    }
}