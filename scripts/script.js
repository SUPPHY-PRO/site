var page = "main";
var downloadButton = document.getElementById("downloadButton");
var windowsButton = document.querySelector(".page.windows");
var epicButton = document.querySelector(".page.epic");
var antivirusButton = document.querySelector(".page.antivirus");
var minecraftButton = document.querySelector(".page.minecraft");
var gtaButton = document.querySelector(".page.gta");
var steamButton = document.querySelector(".page.steam");
var csgoButton = document.querySelector(".page.casgo");
var programImage = document.getElementById("programImage");
var captionText = document.getElementById("caption");
var discriptionText = document.getElementById("discription");
var imagesArray = [
  "/images/win12.webp",
  "/images/epic.webp",
  "/images/av.webp",
  "/images/mine.webp",
  "/images/gta.webp",
  "/images/steam.webp",
  "/images/csgo.webp",
];
document.addEventListener("DOMContentLoaded", function () {
  captionText.textContent =
    "Сайт создан ради забавы, не рекомендуется скачивать отсюда файлы, если Вы не НЕДОХАКЕРЫ Lite";
  discriptionText.textContent =
    "Лучше подпишись на мои YouTube и Telegram каналы";
    preloadImages();
});

windowsButton.addEventListener("click", function () {
  page = "windows";
  captionText.textContent = "Windows 12 слили в сеть";
  discriptionText.textContent =
    "29 мая 2023 года группировка хакеров, известная под ником SUPPHY, удивила интернет-сообщество, опубликовав в открытый доступ новую версию Windows 12 с номером версии 1.70604. Это вызвало огромный интерес и возбуждение среди пользователей, технологического сообщества и СМИ. Появление Windows 12 вызвало много вопросов и спекуляций. Некоторые считали это уникальной возможностью познакомиться с новейшими разработками, функциями и возможностями этой операционной системы. Другие были озабочены легальностью такого действия и потенциальными последствиями.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[0];
  downloadButton.style.display = "block";
});

epicButton.addEventListener("click", function () {
  page = "epic";
  captionText.textContent = "Epic Games Crack - получи игры бесплатно";
  discriptionText.textContent =
    "Программа, разработанная группой энтузиастов для обхода защиты и взлома игр, распространяемых через платформу Epic Games Store. Программа предназначена для пользователей, которые желают получить доступ к платным играм на всеми известной платформе без необходимости покупки или использования официальных лицензий. Программа предлагает простой и интуитивно понятный интерфейс, который позволяет пользователям легко получать и запускать взломанные игры. Epic Games Crack обновляет взломанные игры на основе доступных обновлений, чтобы пользователи могли наслаждаться последними версиями игр.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[1];
  downloadButton.style.display = "block";
});

antivirusButton.addEventListener("click", function () {
  page = "antivirus";
  captionText.textContent = "SUPPHY AV - антивирус нового поколения";
  discriptionText.textContent =
    "SUPPHY Anti Virus - это инновационное антивирусное ПО, разработанное командой SUPPHY для обеспечения комплексной защиты от различных видов вредоносных программ и киберугроз. Оно предлагает надёжное решение для обнаружения, блокирования и удаления троянов, шпионского ПО, рекламных программ и потенциально опасных элементов, которые могут навредить вашему компьютеру. Программа использует SUPPHY AI - искусственный интелект, который способен генерировать код вирусов, которые ещё не были написаны, тем самым обеспечивая защиту от вирусов, которые ещё только будут написаны.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[2];
  downloadButton.style.display = "block";
});

minecraftButton.addEventListener("click", function () {
  page = "minecraft";
  captionText.textContent = "Minecraft 2.0 - скачивай и играй";
  discriptionText.textContent =
    "Minecraft 2.0 - это самая новая и инновационная версия популярной игры, предлагающая захватывающие приключения и неограниченные возможности творчества в виртуальном мире. С новыми функциями, улучшенной графикой и расширенным игровым процессом, Minecraft 2.0 предлагает игрокам еще больше вариантов для исследования, строительства и взаимодействия с окружающим миром. В новой версии игры графика была значительно улучшена, добавлены новые текстуры, эффекты освещения и визуальные детали, чтобы создать еще более реалистичный и привлекательный игровой мир.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[3];
  downloadButton.style.display = "block";
});

gtaButton.addEventListener("click", function () {
  page = "gta";
  captionText.textContent = "Стали доступны исходники GTA 6";
  discriptionText.textContent =
    "Исходники одной из самых ожидаемых игр в индустрии развлечений, стали объектом взлома со стороны известной команды хакеров, действующей под именем SUPPHY. Эта группа талантливых хакеров проявила свои уникальные навыки и умения в области компьютерной безопасности, проникнув в охраняемые системы разработчиков игры и получив доступ к самим исходникам. Это событие вызвало глобальное потрясение в игровой индустрии, вызывая не только волну возмущения со стороны разработчиков и издателей GTA 6, но и заинтересованность со стороны игровых сообществ по всему миру.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[4];
  downloadButton.style.display = "block";
});

steamButton.addEventListener("click", function () {
  page = "steam";
  captionText.textContent = "Steam by SUPPHY - качай и взламывай";
  discriptionText.textContent =
    "Наша команда профессиональных хакеров лично переписала исходный код программы Steam так, чтобы можно было получать практически любые игры (кроме тех, что вышли менее месяца назад) бесплатно! Процесс авторизации ничем не отличается от оригинальной программы, интерфейс также не претерпел изменений, за исключением вкладки Магазин, в которой у всех игр стоимость стала 0 руб. Также, в программу был 'вшит' VPN, который автоматически включается при запуске программы, чтобы никто не мог отследить Ваше местоположение. В Настройках стали доступны новые функции: АнтиБан, скрыть активность и др.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[5];
  downloadButton.style.display = "block";
});

csgoButton.addEventListener("click", function () {
  page = "csgo";
  captionText.textContent = "Новейшие читы для CS:GO";
  discriptionText.textContent =
    "На нашем сайте Вы всегда можете скачать актуальную версию читов для Вашего любимого онлайн шутера. Внутри программы Вы можете найти такие читы, как: AimBot, TriggerBot, WallHack, GlowESP, Tracer, SkinChanged, LegitMode, RageMode и многое другое. Всё это можно настроить под себя так, как нравится именно Вам. Также в нашем чите присутствует SUPPHY AI - наш собственный искуственный интеллект, обученный на огромной базе данных для того, чтобы все функции чита работали более точно и стабильно.\nP.S. Сначала запускается игра CS:GO, после полной подругзки всех русурсов запускаются читы.";
  programImage.style.display = "flex";
  programImage.src = imagesArray[6];
  downloadButton.style.display = "block";
});

downloadButton.addEventListener("click", function () {
  switch (page) {
    case "windows":
      window.open("https://disk.yandex.ru/d/OVoGpie4QwWXAA", "_blank");
      break;
    case "epic":
      window.open("https://disk.yandex.ru/d/_BoFNtScw29-Gg", "_blank");
      break;
    case "antivirus":
      window.open("https://disk.yandex.ru/d/nY_E9G0yxWrfTw", "_blank");
      break;
    case "minecraft":
      window.open("https://disk.yandex.ru/d/_hcXgkXdnfqLRg", "_blank");
      break;
    case "gta":
      window.open("https://disk.yandex.ru/d/iLReYcdfQlEAjw", "_blank");
      break;
    case "steam":
      window.open("https://disk.yandex.ru/d/s_V_YJMrlhlJhw", "_blank");
      break;
    case "csgo":
      window.open("https://disk.yandex.ru/d/OqZ78PzG4cJfUA", "_blank");
      break;
    default:
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return;
  }
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

function preloadImages() {
  imagesArray.forEach(function (url) {
    var img = new Image();
    img.src = url;
  });
}
