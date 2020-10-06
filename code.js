// создаем переменную для применения событий при нажатии
let lot_btn = document.querySelector(".lot_btn");
// создаем функцию для вывода результата после применения функции getRnd
lot_btn.onclick = function () {
  lot_btn.innerHTML = getRnd();
};
// создаем переменную с разными аргументами
let fifty_fifty = ["Начинает жёлтый", "Начинает красный"];
// создаем функцию для определения, кто начнет первый
function getRnd() {
  return fifty_fifty[Math.floor(Math.random() * fifty_fifty.length)];
}

// создаем переменные для поля вывода рандомного числа
let value_player_1 = document.getElementById("value_player_1");
let value_player_2 = document.getElementById("value_player_2");
// создаем переменные для поля вывода набранных очков
let point_player_1 = document.getElementById("point_player_1");
let point_player_2 = document.getElementById("point_player_2");
// создаем переменные для применения событий при нажатии
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
// создаем переменные, что бы мы могли прибавлять набранные баллы
let point_1 = 0;
let point_2 = 0;
// при выполнении условий должны меняться смайлики
let smile_1 = document.querySelector(".logo_player_1");
let smile_2 = document.querySelector(".logo_player_2");

btn_1.onclick = () => {
  let rand = getRndInteger(1, 30);
  let data = fizzbuzz(rand);
  let textFB = getFB(rand);
  value_player_1.innerHTML = textFB;
  point_1 += data;
  point_player_1.innerHTML = countTen_1(point_1);
};
btn_2.onclick = () => {
  let rand = getRndInteger(1, 30);
  let data = fizzbuzz(rand);
  let textFB = getFB(rand);
  value_player_2.innerHTML = textFB;
  point_2 += data;
  point_player_2.innerHTML = countTen_2(point_2);
};

// создаем функцию вывода рандомного числа
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//создаем функцию для определения набора баллов при условии
function fizzbuzz(rand) {
  if (rand % 15 === 0) {
    return 5;
  } else if (rand % 3 === 0) {
    return 2;
  } else if (rand % 5 === 0) {
    return 3;
  } else {
    return 0;
  }
}

//создаем функцию для определения условий "FizzBuzz"
//при выполнениии условий чило должно замениться на строку
function getFB(rand) {
  if (rand % 15 === 0) {
    return "FizzBuzz";
  } else if (rand % 3 === 0) {
    return "Fizz";
  } else if (rand % 5 === 0) {
    return "Buzz";
  } else {
    return rand;
  }
}
// создаем функцию для остановки игры, после набора 10 балллов для первого игрока
function countTen_1(point_1) {
  if (point_1 >= 10) {
    smile_2.style.backgroundImage = "url(/img/player2/23.png)";
    smile_1.style.backgroundImage = "url(/img/player1/12.png)";
    return "Победа!";
  } else {
    return point_1;
  }
}
// создаем функцию для остановки игры, после набора 10 балллов для второго игрока
function countTen_2(point_2) {
  if (point_2 >= 10) {
    smile_2.style.backgroundImage = "url(/img/player2/22.png)";
    smile_1.style.backgroundImage = "url(/img/player1/13.png)";
    return "Победа!";
  } else {
    return point_2;
  }
}

// создаем кнопку перезапуска игры
let btnReboot = document.getElementById("btnReboot");
btnReboot.onclick = function () {
  document.location.reload();
};
