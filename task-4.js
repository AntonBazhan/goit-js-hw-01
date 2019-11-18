'use strict';

const credits = 23580;

const pricePerDroid  = 3000;

const totalDroid = 'Сколько дроидов Вы хочете заказать?';

let userChoise = prompt(totalDroid);

let message;

const totalPrice = Number(userChoise) * pricePerDroid;

const balans = credits - totalPrice;

if (userChoise === null) {
    message = 'Отменено пользователем!';

} else if  ( totalPrice > credits ) {
    message = 'Недостаточно средств на счету!';

} else if ( totalPrice < credits ) {
    message = `Вы купили ${Number(userChoise)} дроидов, на счету осталось ${balans} кредитов.`;
}

alert(message);

console.log(userChoise);

