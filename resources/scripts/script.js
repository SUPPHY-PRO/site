var page = "main";
var downloadButton = document.getElementById("downloadButton");
var brandImage = document.getElementById("brandImage");

var wannaSiteButton = document.getElementById("wannaSite");

var windowsButton = document.getElementById("windowsProgramText");
var epicButton = document.getElementById("epicProgramText");
var antivirusButton = document.getElementById("antivirusProgramText");
var minecraftButton = document.getElementById("minecraftProgramText");
var fortniteButton = document.getElementById("fortniteProgramText");
var gtaButton = document.getElementById("gtaProgramText");
var steamButton = document.getElementById("steamProgramText");
var csgoButton = document.getElementById("csgoProgramText");
var otherButton = document.getElementById("otherProgramText");

var programImage = document.getElementById("programImage");
var tittleText = document.getElementById("tittle");
var discriptionText = document.getElementById("discription");
var ytImage = document.getElementById("yt");
var tgImage = document.getElementById("tg");
var qiwiImage = document.getElementById("qiwi");
var tinkoffImage = document.getElementById("tinkoff");
var imagesArray = [
  "/resources/images/win12.webp",
  "/resources/images/epic.webp",
  "/resources/images/av2.webp",
  "/resources/images/mine.webp",
  "/resources/images/gta.webp",
  "/resources/images/steam.webp",
  "/resources/images/csgo.webp",
  "/resources/images/fnite.webp",
];
document.addEventListener("DOMContentLoaded", function () {
  // tittleText.textContent =
  //   "Сайт создан ради забавы, не рекомендуется скачивать отсюда файлы, если Вы не НЕДОХАКЕРЫ Lite";
  // discriptionText.textContent =
  //   "Лучше подпишись на мои YouTube и Telegram каналы";
  preloadImages();
});

wannaSiteButton.addEventListener("click", function () {
  window.open(
    "https://t.me/SUPPHY_PRO/36",
    "_blank"
  );
});

brandImage.addEventListener("click", function () {
  window.open(
    "https://supphy.ru"
  );
});

ytImage.addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/channel/UCmPjTsx2AqQQVftOwofk0Kw",
    "_blank"
  );
});

tgImage.addEventListener("click", function () {
  window.open("https://t.me/SUPPHY_PRO", "_blank");
});

qiwiImage.addEventListener("click", function () {
  window.open("https://qiwi.com/n/SUPPHY", "_blank");
});

tinkoffImage.addEventListener("click", function () {
  window.open("https://www.tinkoff.ru/rm/kalantarov.ilya1/aOSxj54446", "_blank");
});

windowsButton.addEventListener("click", function () {
  windowsButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "windows";
  tittleText.textContent = "Windows 12 слили в сеть";
  discriptionText.textContent =
    "29 мая 2023 года группировка хакеров, известная под ником SUPPHY, удивила интернет-сообщество, опубликовав в открытый доступ новую версию Windows 12 с номером версии 1.70604. Это вызвало огромный интерес и возбуждение среди пользователей, технологического сообщества и СМИ. Появление Windows 12 вызвало много вопросов и спекуляций. Некоторые считали это уникальной возможностью познакомиться с новейшими разработками, функциями и возможностями этой операционной системы. Другие были озабочены легальностью такого действия и потенциальными последствиями.";
  programImage.src = imagesArray[0];
});

epicButton.addEventListener("click", function () {
  epicButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "epic";
  tittleText.textContent = "Epic Games Crack - получи игры бесплатно";
  discriptionText.textContent =
    "Программа, разработанная группой энтузиастов для обхода защиты и взлома игр, распространяемых через платформу Epic Games Store. Программа предназначена для пользователей, которые желают получить доступ к платным играм на всеми известной платформе без необходимости покупки или использования официальных лицензий. Программа предлагает простой и интуитивно понятный интерфейс, который позволяет пользователям легко получать и запускать взломанные игры. Epic Games Crack обновляет взломанные игры на основе доступных обновлений, чтобы пользователи могли наслаждаться последними версиями игр.";
  programImage.src = imagesArray[1];
});

antivirusButton.addEventListener("click", function () {
  antivirusButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "antivirus";
  tittleText.textContent = "Kupets - антивирус нового поколения";
  discriptionText.textContent =
    "Kupets - это инновационное антивирусное ПО, разработанное командой SUPPHY для обеспечения комплексной защиты от различных видов вредоносных программ и киберугроз. Оно предлагает надёжное решение для обнаружения, блокирования и удаления троянов, шпионского ПО, рекламных программ и потенциально опасных элементов, которые могут навредить вашему компьютеру. Программа использует SUPPHY AI - искусственный интелект, который способен генерировать код вирусов, которые ещё не были написаны, тем самым обеспечивая защиту от вирусов, которые ещё только будут написаны.";
  programImage.src = imagesArray[2];
});

minecraftButton.addEventListener("click", function () {
  minecraftButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "minecraft";
  tittleText.textContent = "Minecraft 2.0 - скачивай и играй";
  discriptionText.textContent =
    "Minecraft 2.0 - это самая новая и инновационная версия популярной игры, предлагающая захватывающие приключения и неограниченные возможности творчества в виртуальном мире. С новыми функциями, улучшенной графикой и расширенным игровым процессом, Minecraft 2.0 предлагает игрокам еще больше вариантов для исследования, строительства и взаимодействия с окружающим миром. В новой версии игры графика была значительно улучшена, добавлены новые текстуры, эффекты освещения и визуальные детали, чтобы создать еще более реалистичный и привлекательный игровой мир.";
  programImage.src = imagesArray[3];
});

fortniteButton.addEventListener("click", function () {
  fortniteButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "fnite";
  tittleText.textContent = "FniteHacker - единственный необнаруженный чит (обзор по ссылке: https://youtu.be/jcAaxGJX0sI)";
  discriptionText.textContent =
    "Fortnite - захватывающая многопользовательская видеоигра, разработанная компанией Epic Games. С момента своего выпуска в 2017 году, Fortnite стал ярким представителем жанра королевской битвы, привлекая миллионы игроков своим уникальным геймплеем, стилем и непрерывными обновлениями. Важной особенностью Fortnite является возможность строить различные сооружения, используя собранные ресурсы. И для всего этого мы написали лучший встраиваемый чит FniteHacker. Уже на данный момент в нём доступно более 30 различных функций, таких как ESP, Box, Skeleton, Aim, AntiAim, FastBuild, Ping и многое другое. Быстрее качай и начинай выигрывать!";
  programImage.src = imagesArray[7];
});

gtaButton.addEventListener("click", function () {
  gtaButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "gta";
  tittleText.textContent = "Стали доступны исходники GTA 6";
  discriptionText.textContent =
    "Исходники одной из самых ожидаемых игр в индустрии развлечений, стали объектом взлома со стороны известной команды хакеров, действующей под именем SUPPHY. Эта группа талантливых хакеров проявила свои уникальные навыки и умения в области компьютерной безопасности, проникнув в охраняемые системы разработчиков игры и получив доступ к самим исходникам. Это событие вызвало глобальное потрясение в игровой индустрии, вызывая не только волну возмущения со стороны разработчиков и издателей GTA 6, но и заинтересованность со стороны игровых сообществ по всему миру.";
  programImage.src= imagesArray[4];
});

steamButton.addEventListener("click", function () {
  steamButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "steam";
  tittleText.textContent = "Steam by SUPPHY - качай и взламывай";
  discriptionText.textContent =
    "Наша команда профессиональных хакеров лично переписала исходный код программы Steam так, чтобы можно было получать практически любые игры (кроме тех, что вышли менее месяца назад) бесплатно! Процесс авторизации ничем не отличается от оригинальной программы, интерфейс также не претерпел изменений, за исключением вкладки Магазин, в которой у всех игр стоимость стала 0 руб. Также, в программу был 'вшит' VPN, который автоматически включается при запуске программы, чтобы никто не мог отследить Ваше местоположение. В Настройках стали доступны новые функции: АнтиБан, скрыть активность и др.";
  programImage.src = imagesArray[5];
});

csgoButton.addEventListener("click", function () {
  csgoButton.classList.add("hover");
  downloadButton.style.visibility = "visible";
  hoverBack();
  page = "csgo";
  tittleText.textContent = "Новейшие читы для CS:GO";
  discriptionText.textContent =
    "На нашем сайте Вы всегда можете скачать актуальную версию читов для Вашего любимого онлайн шутера. Внутри программы Вы можете найти такие читы, как: AimBot, TriggerBot, WallHack, GlowESP, Tracer, SkinChanged, LegitMode, RageMode и многое другое. Всё это можно настроить под себя так, как нравится именно Вам. Также в нашем чите присутствует SUPPHY AI - наш собственный искуственный интеллект, обученный на огромной базе данных для того, чтобы все функции чита работали более точно и стабильно.\nP.S. Сначала запускается игра CS:GO, после полной подругзки всех русурсов запускаются читы.";
  programImage.src = imagesArray[6];
});

otherButton.addEventListener("click", function () {
  window.location.href = "https://supphy.ru/sources";
});

downloadButton.addEventListener("click", function () {
  switch (page) {
    case "windows":
      window.open("https://disk.yandex.ru/d/OVoGpie4QwWXAA", "_blank");
      // downloadFile("/resources/files/win12.zip");
      break;
    case "epic":
      //window.open("https://disk.yandex.ru/d/_BoFNtScw29-Gg", "_blank");
      downloadFile("/resources/files/epic.zip");
      break;
    case "antivirus":
      //   window.open("https://disk.yandex.ru/d/nY_E9G0yxWrfTw", "_blank");
      downloadFile("/resources/files/kupets.zip");
      break;
    case "minecraft":
      //   window.open("https://disk.yandex.ru/d/_hcXgkXdnfqLRg", "_blank");
      downloadFile("/resources/files/minecraft2.zip");
      break;
    case "gta":
      //   window.open("https://disk.yandex.ru/d/iLReYcdfQlEAjw", "_blank");
      downloadFile("/resources/files/gta6.zip");
      break;
    case "steam":
      //   window.open("https://disk.yandex.ru/d/s_V_YJMrlhlJhw", "_blank");
      downloadFile("/resources/files/steam2.zip");
      break;
    case "csgo":
      //   window.open("https://disk.yandex.ru/d/OqZ78PzG4cJfUA", "_blank");
      downloadFile("/resources/files/csgocheats.zip");
      break;
    case "fnite":
      //   window.open("https://disk.yandex.ru/d/OqZ78PzG4cJfUA", "_blank");
      downloadFile("/resources/files/FniteHacker.zip");
      break;
    default:
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return;
  }
  //window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

function preloadImages() {
  imagesArray.forEach(function (url) {
    var img = new Image();
    img.src = url;
  });
}

function hoverBack() {
  programImage.style.visibility = "visible";
  switch (page) {
    case "windows":
      windowsButton.classList.remove("hover");
      break;
    case "epic":
      epicButton.classList.remove("hover");
      break;
    case "antivirus":
      antivirusButton.classList.remove("hover");
      break;
    case "antivirus":
      antivirusButton.classList.remove("hover");
      break;
    case "minecraft":
      minecraftButton.classList.remove("hover");
      break;
    case "gta":
      gtaButton.classList.remove("hover");
      break;
    case "steam":
      steamButton.classList.remove("hover");
      break;
    case "csgo":
      csgoButton.classList.remove("hover");
      break;
    case "fnite":
      fortniteButton.classList.remove("hover");
      break;
    case "other":
      otherButton.classList.remove("hover");
      break;
  }
}

function downloadFile(filePath) {
  var link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.substring(filePath.lastIndexOf("/") + 1);
  link.click();
}
