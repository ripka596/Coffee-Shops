function getUrlParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.get(name));
      return urlParams.get(name);
}

const shops = {
  hlebnik: {
    address: "Просп. Энгельса, 8, Санкт-Петербург",
    image: "images/hlebnik/main.png",
    rating: 4.4,
    description: "Пекарня «Хлебник» — это место, где вы можете насладиться свежей выпечкой, ароматным кофе и уютной атмосферой.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.328587,59.999903&z=17&pt=30.328587,59.999903",
    menu: [
      { name: "Чернично-пряный какао", image: "images/hlebnik/1.png" }
      ,{ name: "Капучино яблочный тарт", image: "images/hlebnik/2.png" }
      ,{ name: "Голубая матча черника-ваниль", image: "images/hlebnik/3.png" }
      ,{ name: "Хоккайдо", image: "images/hlebnik/4.png" }
    ]
  },
  baggins: {
    address: "просп. Испытателей, 39, Санкт-Петербург",
    image: "images/baggins/main.png",
    rating: 4.7,
    description: "Baggins Coffee — это кофейня, которая, по словам посетителей, предлагает крепкий и ароматный кофе, а также вкусные десерты и закуски.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.265302,60.007781&z=17&pt=30.265302,60.007781",
    menu: [
      { name: "Айс-латте Белая Ночь", image: "images/baggins/1.png" }
      ,{ name: "Грейпфрутовый кофе от шефа", image: "images/baggins/2.png" }
      ,{ name: "Чай антигрустин", image: "images/baggins/3.png" }
      ,{ name: "Айс-ти Алые Паруса", image: "images/baggins/4.png"}
    ]
  },
  etlon: {
    address: "Светлановский просп., 14, к 1, Санкт-Петербург",
    image: "images/etlon/main.png",
    rating: 5,
    description: "Кофейня Etlon Coffee — это место, где вы можете насладиться ароматным кофе и вкусными десертами. Интерьер кофейни выполнен в современном стиле, с использованием нестандартных элементов, таких как велосипед, подвешенный под потолком.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.343608,60.009624&z=17&pt=30.343608,60.009624",
    menu: [
      { name: "Холодный латте “Белый русский”", image: "images/etlon/1.png" }
      ,{ name: "Латте “Персиковый парфе”", image: "images/etlon/2.png" }
      ,{ name: "Чай", image: "images/etlon/3.png" }
      ,{ name: "Холодный латте", image: "images/etlon/4.png" }
    ]
  },
  aj: {
    address: "Манчестерская ул., 3, Санкт-Петербург",
    image: "images/aj/main.png",
    rating: 5,
    description: "Кофейня Aj Coffee Roasters — это место, где можно позавтракать, пообедать или поужинать, а также поработать с ноутбуком. В меню есть завтраки, основные блюда, салаты и горячее, а также большая кофейная карта.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.328858,60.010793&z=17&pt=30.328858,60.010793",
    menu: [
      { name: "Фильтр кофе вишневый", image: "images/aj/1.png" }
      ,{ name: "ICE раф", image: "images/aj/2.png" }
      ,{ name: "Раф лимонная меренга", image: "images/aj/3.png" }
      ,{ name: "Большой завтрак AJ", image: "images/aj/4.png" }
    ]
  },
  hochu: {
    address: "Заставская ул., 33литД2, Санкт-Петербург",
    image: "images/hochu/main.png",
    rating: 5,
    description: "Кофейня Hochu — это место, где вы можете насладиться ароматным кофе и свежей выпечкой. Здесь вы найдете широкий выбор напитков, включая авторские и сезонные меню, а также Bubble меню.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.318231,59.890992&z=17&pt=30.318231,59.890992",
    menu: [
      { name: "Раф Петербургская пышка", image: "images/hochu/1.png" }
      ,{ name: "Арахисовый раф", image: "images/hochu/2.png" }
      ,{ name: "Латте орео", image: "images/hochu/3.png" }
      ,{ name: "Лавандовый таро латте", image: "images/hochu/4.png" }
    ]
  },
  estetica: {
    address: "Минеральная ул., 23Б, Санкт-Петербург",
    image: "images/estetica/main.png",
    rating: 4.7,
    description: "Estetica - это стильный павильон с панорамными окнами, неоном и милым декором. Кофе варят великолепный — ароматный, с плотной пенкой, подают в ярких стаканчиках. Идеальное место для «кофе с собой» или паузы у окна",
    map: "https://yandex.ru/map-widget/v1/?ll=30.367479,59.966103&z=17&pt=30.367479,59.966103",
    menu: [
      { name: "Клубничная Айс-Матча", image: "images/estetica/1.png" }
      ,{ name: "Цитрусовый Эспрессо-Тоник", image: "images/estetica/2.png" }
      ,{ name: "Кубический круассан", image: "images/estetica/3.png" }
      ,{ name: "Черничный Раф с лавандой", image: "images/estetica/4.png" }
    ]
  },
  oneprice: {
    address: "Санкт-Петербург, Коломяжский проспект",
    image: "images/oneprice/main.png",
    rating: 4.3,
    description: "Кофейня One Price Coffee — это место, где вы можете быстро взять качественный кофе по понятной фиксированной цене за любой объем. Формат идеально подходит для тех, кто ценит свое время и любит брать напитки с собой на ходу",
    map: "https://yandex.ru/map-widget/v1/?ll=30.2971505,60.0026155&z=17&pt=30.297477,60.002432~30.296824,60.002799",
    menu: [
      { name: "Капучино Сникерс", image: "images/oneprice/1.png" }
      ,{ name: "Латте ореховое удовольствие", image: "images/oneprice/2.png" }
      ,{ name: "Листовой чай", image: "images/oneprice/3.png" }
      ,{ name: "Вишневый латте", image: "images/oneprice/4.png" }
    ]
  },
  coffeebon: {
    address: "просп. Королёва, 27, к. 1, Санкт-Петербург",
    image: "images/coffeebon/main.png",
    rating: 4.7,
    description: "Кофейня «КофеБон» — это уютное место, где можно не только выпить кофе, но и провести время с друзьями или поработать за ноутбуком.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.273217,60.012552&z=17&pt=30.273217,60.012552",
    menu: [
      { name: "Бискотти", image: "images/coffeebon/1.png" }
      ,{ name: "Раф фисташковый пломбир", image: "images/coffeebon/2.png" }
      ,{ name: "Раф син-о-бон", image: "images/coffeebon/3.png" }
      ,{ name: "Нежные сырники как у бабушки", image: "images/coffeebon/4.png" }
    ]
  },
  sibaristica: {
    address: "наб. Обводного канала, 199-201К, Санкт-Петербург",
    image: "images/sibaristica/main.png",
    rating: 5,
    description: "Кофейня Sibaristica — это часть большого пространства, в которое входят коворкинг и школа бариста. В меню вошли почти два десятка видов кофе от классических черных до авторских.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.2841597,59.910412&z=17&pt=30.284159,59.910412",
    menu: [
      { name: "Абрикосовая крем-сода", image: "images/sibaristica/1.png" }
      ,{ name: "Машина времени", image: "images/sibaristica/2.png" }
      ,{ name: "Тарт с томатами и моцареллой", image: "images/sibaristica/3.png" }
      ,{ name: "Тирамису", image: "images/sibaristica/4.png" }
    ]
  },
  smakaf: {
    address: "Лоцманская улица, 8, Санкт-Петербург",
    image: "images/smakaf/main.png",
    rating: 5,
    description: "Кофейня «Смакаф» — это уютное место, где можно насладиться ароматным кофе и вкусными десертами, такими как трюфели и сырники.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.275934,59.919041&z=17&pt=30.275934,59.919041",
    menu: [
      { name: "Лавандовый трюфель", image: "images/smakaf/1.png" }
      ,{ name: "Капучино", image: "images/smakaf/2.png" }
      ,{ name: "Конфета граф грей", image: "images/smakaf/3.png" }
      ,{ name: "Трюфель манго-маракуя", image: "images/smakaf/4.png" }
    ]
  },
  mishka: {
    address: "Пискарёвский проспект, 25к2, Санкт-Петербург",
    image: "images/mishka/main.png",
    rating: 5,
    description: "Пекарня «Мишка Bakery» — это место, где вы можете насладиться ароматной выпечкой и вкусными десертами, а также выпить чашечку ароматного кофе.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.413793,59.971226&z=17&pt=30.413793,59.971226",
    menu: [
      { name: "Шоколадный пончик", image: "images/mishka/1.png" }
      ,{ name: "Круассан", image: "images/mishka/2.png" }
      ,{ name: "Чай малина-апельсин", image: "images/mishka/3.png" }
      ,{ name: "Грейпфрутовый тоник", image: "images/mishka/4.png" }
    ]
  },
  novocafe: {
    address: "Софийская улица, 32к1, Санкт-Петербург",
    image: "images/novocafe/main.png",
    rating: 5,
    description: "Кофейня «Ново Кофе» — это уютное место, где можно насладиться ароматным кофе, почитать книгу или просто пообщаться с друзьями.",
    map: "https://yandex.ru/map-widget/v1/?ll=30.405147,59.873386&z=17&pt=30.405147,59.873386",
    menu: [
      { name: "Раф птичье молоко", image: "images/novocafe/1.png" }
      ,{ name: "Какао с маршмеллоу", image: "images/novocafe/2.png" }
      ,{ name: "Карамельный бамбл", image: "images/novocafe/3.png" }
      ,{ name: "Латте взрывной банан", image: "images/novocafe/4.png" }
    ]
  },
};

const shopId = getUrlParameter('id');
const shopData = shops[shopId];
console.log(shopData);
const menuContainer = document.getElementById('shop-menu');

if (shopData !== undefined) {
  document.getElementById('shop-address').textContent = shopData.address;
  document.getElementById('shop-image').src = shopData.image;
  document.getElementById('shop-desc').textContent = shopData.description;
  document.getElementById('map-frame').src = shopData.map;
  renderRating(shopData.rating, document.getElementById('shop-rating'));
  for (const item of shopData.menu) {
    const article = document.createElement('article');
    article.className = 'menu-item';
    article.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}</p>
    `;
    menuContainer.appendChild(article);
  }
} else {
  document.getElementById('card-content').innerHTML = '<p style="font-family: Verdana; font-size: 60px;text-align: center;">Заведение не найдено</p>';
}

function renderRating(ratingValue, container) {
  if (!container) return;
  const rounded = Math.floor(ratingValue);
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const img = document.createElement('img');
    img.src = i < rounded ? 'images/cupActive.png' : 'images/cup.png';
    container.appendChild(img);
  }
}

document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});


document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector(".menu-toggle");
  var navMenu = document.querySelector("header nav");

  if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", function() {
          menuToggle.classList.toggle("open");
          navMenu.classList.toggle("open");
      });
  }
});