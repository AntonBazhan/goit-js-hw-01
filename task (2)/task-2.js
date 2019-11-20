"use strict";

const total = 100;

let ordered;

ordered = 50;

let totalProduct =
  total < ordered
    ? '"На складе недостаточно твоаров!"'
    : '"Заказ оформлен, с вами свяжется менеджер"';

console.log(totalProduct);

ordered = 20;

totalProduct =
  total < ordered
    ? '"На складе недостаточно твоаров!"'
    : '"Заказ оформлен, с вами свяжется менеджер"';

console.log(totalProduct);

ordered = 80;

totalProduct =
  total < ordered
    ? '"На складе недостаточно твоаров!"'
    : '"Заказ оформлен, с вами свяжется менеджер"';

console.log(totalProduct);

ordered = 130;

totalProduct =
  total < ordered
    ? '"На складе недостаточно твоаров!"'
    : '"Заказ оформлен, с вами свяжется менеджер"';

console.log(totalProduct);
