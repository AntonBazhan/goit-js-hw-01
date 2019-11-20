"use strict";

const china = "CHINA";

const chili = "CHILI";

const australia = "AUSTRALIA";

const india = "INDIA";

const jamaika = "JAMAIKA";

const userChoise = prompt("В какую страну доставить товар?");

let cost;

let message;

if (userChoise === null) {
  message = "Отменено пользователем!";
} else {
  switch (userChoise.toUpperCase()) {
    case "CHINA":
      cost = 100;
      message = `Доставка в ${userChoise.toUpperCase()} будет стоить ${cost} кредитов`;
      break;

    case "CHILI":
      cost = 250;
      message = `Доставка в ${userChoise.toUpperCase()} будет стоить ${cost} кредитов`;
      break;

    case "AUSTRALIAU":
      cost = 170;
      message = `Доставка в ${userChoise.toUpperCase()} будет стоить ${cost} кредитов`;
      break;

    case "INDIA":
      cost = 80;
      message = `Доставка в ${userChoise.toUpperCase()} будет стоить ${cost} кредитов`;
      break;

    case "JAMAIKA":
      cost = 120;
      message = `Доставка в ${userChoise.toUpperCase()} будет стоить ${cost} кредитов`;
      break;

    default:
      message = "В вашей стране доставка не доступна";

      break;
  }
}

alert(message);
