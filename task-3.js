"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";

const passwordName = "Please enter password";

const userChoise = prompt(passwordName);

let message;

if (userChoise === null) {
  message = "Отменено пользователем!";
} else {
  switch (userChoise) {
    case ADMIN_PASSWORD:
      message = "Добро пожаловать!";

      break;

    default:
      message = "Доступ запрещен, неверный пароль!";
      break;
  }
}

alert(message);

