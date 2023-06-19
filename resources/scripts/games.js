var header = document.getElementById("header");
var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var ps = document.getElementById("ps");
var footer = document.getElementById("footer");

var email = document.getElementById("email");
var cubesText = document.getElementById("cubesText");
var bodyText = document.getElementById("bodyText");

var ru = document.getElementById("lang-ru");
var en = document.getElementById("lang-en");

email.addEventListener("click", function () {
  copyToClipboard("admin@supphy.ru", "Почта скопирована");
});

cubesText.addEventListener("click", function () {
  copyToClipboard("Cubes", "Тема скопирована");
});

bodyText.addEventListener("click", function () {
  copyToClipboard(
    "Прошу удалить мои личные данные, а именно: электронный адрес: [email], а также все прочие данные, связанные с данным электронным адресом, в том числе: созданные мной уровни; статистику, относящуюся к другим пользовательским уровням",
    "Содержание скопировано"
  );
});

ru.addEventListener("click", function () {
    header.textContent = "Удаление пользовательских данных в игре Cubes от разработчика NullName";
    main1.textContent = `Для удаления личных данных требуется написать письмо на почту cubes@supphy.ru письмо с темой: "Cubes", и следующим содержанием: "Прошу удалить мои личные данные, а именно: электронный адрес: [email], а также все прочие данные, связанные с данным электронным адресом, в том числе: созданные мной уровни; статистику, относящуюся к другим пользовательским уровням."`;
    main2.textContent = "После отправки письма на почту cubes@supphy.ru личные данные пользователя будут удалены в течение 2 (двух) недель с момента получения письма.";
    ps.textContent = `*Пояснения: [email] - адрес электронной почты, данные о которой требуется удалить.`;
    footer.textContent = "*Данная страница сайта не является публичной офертой или договором";
    ru.style.border = "1px solid rgba(255, 255, 255, 1)";
    en.style.border = "1px solid rgba(255, 255, 255, 0.5)";
    ru.style.cursor = "default";
    en.style.cursor = "pointer";
    ru.style.color = "rgba(255, 255, 255, 0.8)";
    en.style.color = "rgba(255, 255, 255, 0.5)";
});

en.addEventListener("click", function () {
    header.textContent = "Deleting user data in the Cubes game from the developer NullName";
    main1.textContent = `To delete personal data, you need to write an email cubes@supphy.ru a letter with the subject: "Cubes", and the following content: "I ask you to delete my personal data, namely: email address: [email], as well as all other data related to this email address, including: levels created by me; statistics related to other user levels."`;
    main2.textContent = "After sending the letter to the post office cubes@supphy.ru the user's personal data will be deleted within 2 (two) weeks from the date of receipt of the letter.";
    ps.textContent = "*Explanation: [email] - the email address, the data about which you want to delete.";
    footer.textContent = "*This page of the website is not a public offer or contract";
    ru.style.border = "1px solid rgba(255, 255, 255, 0.5)";
    en.style.border = "1px solid rgba(255, 255, 255, 1)";
    ru.style.cursor = "pointer";
    en.style.cursor = "default";
    ru.style.color = "rgba(255, 255, 255, 0.5)";
    en.style.color = "rgba(255, 255, 255, 0.8)";
});

function copyToClipboard(text, alertText) {
  navigator.clipboard.writeText(text);
  alert(alertText);
}
