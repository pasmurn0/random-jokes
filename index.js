let url = 'https://type.fit/api/quotes';
const lngBtns = document.querySelectorAll('.lng-switch-btn');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const startBtn = document.querySelector('.start-btn');
let text = document.querySelector('.text');
let author = document.querySelector('.author');
let body = document.querySelector('body');
const colors = ['#F1F5F8', '#F3FFF3', '#f9e7fc', '#FBFFE2'];

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  let max = data.length;
  let random = Math.floor(Math.random() * max);
  text.textContent = data[random].text;
  author.textContent = data[random].author;
}

function changeActiveBtn() {
  if (url === 'https://type.fit/api/quotes') {
    en.style.boxShadow = '0 0.5em 0.5em -0.2em grey';
    ru.style.boxShadow = '';
  } else {
    ru.style.boxShadow = '0 0.5em 0.5em -0.2em grey';
    en.style.boxShadow = '';
  }
}
changeActiveBtn();

function switchLng() {
    let lng = (this.textContent === 'En') ? 'en' : 'ru';
    url = (lng === 'en') ? 'https://type.fit/api/quotes' : 'ru-quotes.json';
    changeActiveBtn();
    if (lng === 'en') {
      localStorage.setItem('url', 'https://type.fit/api/quotes');
      localStorage.setItem('startBtn.textContent', 'Start!');
    } else {
      localStorage.setItem('url', 'ru-quotes.json');
      localStorage.setItem('startBtn.textContent', 'Вещай!');
    }
}

function changeStartBtn() {
  startBtn.textContent = (url === 'https://type.fit/api/quotes') ? 'Start!' : 'Вещай!';
}

function changeBackground() {
  let maxColors = colors.length;
  let random = Math.floor(Math.random() * maxColors);
  body.style.backgroundColor = colors[random];
}



window.addEventListener('load', () => {
  url = localStorage.getItem('url');
  startBtn.textContent = localStorage.getItem('startBtn.textContent');
  changeActiveBtn();
  changeStartBtn();
  getData();
});

lngBtns.forEach((btn) => btn.addEventListener('click', switchLng));
lngBtns.forEach((btn) => btn.addEventListener('click', changeStartBtn));


startBtn.addEventListener('click', getData);
startBtn.addEventListener('click', changeBackground);


console.log(`Оценка - 62 / 60 баллов\nКритерии:
[X] на странице есть цитата и кнопка для смены цитаты +5
[X] в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
[X] При загрузке страницы приложения отображается рандомная цитата +10
[X] При перезагрузке страницы цитата обновляется (заменяется на другую) +10
[X] Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10
[X] Смена цитаты сопровождается сменой цвета фона, но реализовано не до конца, так как цвет выбирается абсолютным рандомом, то он может не поменяться, то есть случайно может выпасть другой цвет (не хватило времени поправить эту функцию) +7
[X] Можно выбрать один из двух языков отображения цитат: en/ru +10
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (сделал хранение выбранного языка в local storage) +5
`)