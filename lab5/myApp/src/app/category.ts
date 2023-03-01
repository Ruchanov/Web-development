import {Product} from "./products";

export interface Category{
  id: number,
  name: string,
  products: [],
  image: string

}

export const categories=[
  {
    id: 1,
    name: "Laptops",
    products:[
      {
        id: 2,
        name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
        price: 480000,
        description: 'диагональ экрана: 13.3 дюйм\n' +
          'процессор: Apple M1\n' +
          'видеокарта: Apple M1 7 core\n' +
          'размер оперативной памяти: 8 ГБ\n' +
          'тип жесткого диска: SSD\n' +
          'общий объем накопителей: 256 ГБ',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
        address: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 3,
        name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
        price: 389000,
        description: 'диагональ экрана: 15.6 дюйм\n' +
          'процессор: Intel Core i5 11400H\n' +
          'видеокарта: NVIDIA GeForce GTX 1650\n' +
          'размер оперативной памяти: 16 ГБ\n' +
          'тип жесткого диска: SSD\n' +
          'общий объем накопителей: 512 ГБ',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
        address: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 4,
        name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
        price: 349000,
        description: 'диагональ экрана: 15.6 дюйм\n' +
          'процессор: AMD Ryzen 5 4600H\n' +
          'видеокарта: nVidia GeForce GTX1650\n' +
          'размер оперативной памяти: 8 ГБ\n' +
          'тип жесткого диска: SSD\n' +
          'общий объем накопителей: 512 ГБ',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
        address: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg\''
      },
      {
        id: 5,
        name: 'Ноутбук Apple MacBook Air 13 MLY33 черный',
        price: 628000,
        description: 'диагональ экрана: 13.6 дюйм\n' +
          'видеокарта: Apple M2 8-Core\n' +
          'размер оперативной памяти: 8 ГБ\n' +
          'тип жесткого диска: SSD\n' +
          'общий объем накопителей: 256 ГБ',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h3d/52679174357022/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg',
        address: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 10,
        name: 'Ноутбук Acer Nitro 5 AN515-45 NH.QB9ER.004 черный',
        price: 379000,
        description: 'диагональ экрана: 15.6 дюйм' +
          'процессор: AMD Ryzen 5 5600H\n' +
          'видеокарта: NVIDIA GeForce GTX 1650\n' +
          'размер оперативной памяти: 8 ГБ\n' +
          'тип жесткого диска: SSD\n' +
          'общий объем накопителей: 512 ГБ',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
        address: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      }
    ],
    image: ''
  },
  {
    id: 2,
    name: "TV",
    products: [
      {
        id: 1,
        name: 'Телевизор Yasin LED-32E7000 81 см черный',
        price: 60000,
        description: 'тип: LED-телевизор ' +
          'диагональ: 32 дюйм ' +
          'разрешение: 1366x768 ' +
          'поддержка HD: 720p HD ' +
          'технология Smart TV: Нет' +
          'wi-Fi: Да' +
          'входы: AV,HDMI,USB,антенный,Bluetooth',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg',
        address: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 2,
        name: 'Телевизор LG 43LM5772PLA 109 см черный',
        price: 183000,
        description: 'тип: LED-телевизор\n' +
          'диагональ: 42.5 дюйм\n' +
          'разрешение: 1920x1080\n' +
          'поддержка HD: 1080p Full HD\n' +
          'технология Smart TV: Да\n' +
          'wi-Fi: Да\n' +
          'входы: AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
        address: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 3,
        name: 'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный',
        price: 119990,
        description: 'тип: LED-телевизор\n' +
          'диагональ: 32 дюйм\n' +
          'разрешение: 1366x768\n' +
          'поддержка HD: 720p HD\n' +
          'технология Smart TV: Да\n' +
          'wi-Fi: Да\n' +
          'входы: композитный, ,HDMI, ,USB, ,Bluetooth',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
        address: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 3,
        name: 'Телевизор DAUSCHER LD55AU7100 140 см черный',
        price: 239990,
        description: 'тип: LED-телевизор\n' +
          'диагональ: 55 дюйм\n' +
          'разрешение: 3840x2160\n' +
          'поддержка HD: 4K UHD\n' +
          'технология Smart TV: Да\n' +
          'wi-Fi: Да\n' +
          'входы: аудио, ,оптический, ,VGA',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/hfa/66314652581918/dauscher-ld55au7100-chernyi-107598351-1.jpg',
        address: 'https://kaspi.kz/shop/p/dauscher-ld55au7100-140-sm-chernyi-107598351/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 4,
        name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
        price: 198000,
        description: 'тип: LED-телевизор\n' +
          'диагональ: 43 дюйм\n' +
          'разрешение: 1920x1080\n' +
          'поддержка HD: 1080p Full HD\n' +
          'технология Smart TV: Да\n' +
          'wi-Fi: Да\n' +
          'входы: AV, ,компонентный, ,Ethernet (RJ-45), ,USB',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
        address: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 5,
        name: 'Телевизор Yasin 40G7 102 см черный',
        price: 114677,
        description: 'тип: LED-телевизор\n' +
          'диагональ: 40 дюйм\n' +
          'разрешение: 1920x1080\n' +
          'поддержка HD: 1080p Full HD\n' +
          'технология Smart TV: Да\n' +
          'wi-Fi: Да\n' +
          'входы: оптический, ,AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,RS-232, ,MHL',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg',
        address: 'https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      }
    ]
  },
  {
    id:3,
    name: "Auto parts",
    products: [
      {
        id: 1,
        name: 'Колодки Super-Q передние BrakePad-0001-SQ',
        price: 6480,
        description: 'назначение: передние\n' +
          'номер OEM: 95231011\n' +
          'артикул производителя: BrakePad-0001-SQ\n' +
          'количество в комплекте: 4\n' +
          'марка автомобиля: Chevrolet, ,Ravon\n' +
          'модель автомобиля: Cobalt, ,R4\n' +
          'год выпуска автомобиля: 2015, ,2016, ,2017, ,2018, ,2019, ,2020, ,2021, ,2022',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h37/62166491234334/super-q-perednie-brakepad-0001-sq-106242853-1.jpg',
        address: 'https://kaspi.kz/shop/p/super-q-perednie-brakepad-0001-sq-106242853/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 2,
        name: 'АвтоВаз коробка переключения передач 21100-1700012',
        price: 142500,
        description:'номер детали OEM: 21100-1700012-00\n' +
          'артикул производителя: 21100-1700012\n' +
          'марка автомобиля: Lada\n' +
          'модель автомобиля: 2112, ,2110, ,2111\n' +
          'год выпуска автомобиля: 1995, ,1996, ,1997, ,1998, ,1999, ,2000, ,2001, ,2002, ,2003, ,2004, ,2005, ,2006, ,2007, ,2008, ,2009, ,2010\n' +
          'тип: коробка переключения передач',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h98/51524195713054/avtovaz-korobka-peredac-21100-1700012-00-101905552-1-Container.jpg',
        address: 'https://kaspi.kz/shop/p/avtovaz-korobka-perekljuchenija-peredach-21100-1700012-101905552/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 3,
        name: 'WXQP рычаг подвески 360925',
        price: 48000,
        description:'номер детали OEM: 8D0498998S\n' +
          'артикул производителя: 360925\n' +
          'марка автомобиля: Audi, ,Volkswagen\n' +
          'модель автомобиля: A4, ,A6, ,A8, ,Passat\n' +
          'год выпуска автомобиля: 1995, ,1996, ,1997, ,1998, ,1999, ,2000, ,2001, ,2002, ,2003, ,2004, ,2005, ,2006, ,2007, ,2008\n' +
          'тип: рычаг подвески',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h01/52427472568350/wxqp-rycag-podveski-360925-105774515-1.jpg',
        address: 'https://kaspi.kz/shop/p/wxqp-rychag-podveski-360925-105774515/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 4,
        name: 'CNAB шрус наружный 665100703',
        price: 7700,
        description:'номер детали OEM: AD-009A\n' +
          'артикул производителя: 665100703\n' +
          'марка автомобиля: Audi\n' +
          'модель автомобиля: 100, ,A6, ,S4\n' +
          'год выпуска автомобиля: 1991, ,1992, ,1993, ,1994, ,1995, ,1996, ,1997\n' +
          'тип: шрус наружный',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/hb2/51439594897438/cnab-srus-naruznyj-665100703-105245377-1.jpg',
        address: 'https://kaspi.kz/shop/p/cnab-shrus-naruzhnyi-665100703-105245377/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 5,
        name: 'Top Grade подшипник 626Z',
        price: 1500,
        description:'номер детали OEM: Z180626\n' +
          'артикул производителя: 626Z\n' +
          'марка автомобиля: Toyota\n' +
          'модель автомобиля: Camry\n' +
          'год выпуска автомобиля: 2017\n' +
          'тип: подшипник',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/ha1/62626228731934/top-grade-podsipnik-626z-103495071-1.jpg',
        address: 'https://kaspi.kz/shop/p/top-grade-podshipnik-626z-103495071/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
    ]
  },
  {
    id: 4,
    name: 'Game consoles',
    products: [
      {
        id: 1,
        name: 'Игровая приставка Sony PlayStation 5 белый',
        price: 325000,
        description:'тип: стационарная\n' +
          'объем SSD: 825 Гб\n' +
          'поддержка UHD (4K): Да\n' +
          'тип носителя для игр: UHD Blu-ray',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg',
        address: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 2,
        name: 'Игровая приставка Sony Play Station 4 Slim 500GB + геймпад + UFC4 + GTA5 + FIFA23 + MORTAL (игры в цифровой версии)',
        price: 268000,
        description: 'тип: стационарная\n' +
          'объем HDD: 500 Гб\n' +
          'поддержка UHD (4K): Нет\n' +
          'тип носителя для игр: BD (Blu-ray Disc)',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h53/69471616172062/sony-play-station-4-slim-500gb-geimpad-ufc4-gta5-fifa21-mortal-igry-v-tsifrovoi-versii-104465180-1.jpg',
        address: 'https://kaspi.kz/shop/p/sony-play-station-4-slim-500gb-geimpad-ufc4-gta5-fifa23-mortal-igry-v-tsifrovoi-versii--104465180/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 3,
        name: 'Игровая приставка Xbox Series X 1TB черный',
        price: 314000,
        description:'тип: стационарная\n' +
          'объем SSD: 1024 Гб\n' +
          'поддержка UHD (4K): Да\n' +
          'тип носителя для игр: BD (Blu-ray Disc)',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hbe/33586549227550/xbox-series-x-1tb-cernyj-100824897-1-Container.jpg',
        address: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 4,
        name: 'Игровая приставка VALVE Steam Deck 256Gb',
        price: 398000,
        description:'тип: портативная\n' +
          'объем SSD: 256 Гб\n' +
          'поддержка UHD (4K): Да\n' +
          'тип носителя для игр: micro SD',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h78/66820887052318/igrovaya-pristavka-valve-steam-deck-256gb-108012338-1.jpg',
        address: 'https://kaspi.kz/shop/p/valve-steam-deck-256gb-108012338/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },
      {
        id: 5,
        name: 'Игровая приставка SEGA Retro Genesis ZD-06b HD Ultra + 225 игр',
        price: 37000,
        description:'тип: стационарная\n' +
          'поддержка UHD (4K): Нет\n' +
          'тип носителя для игр: нет',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hfd/47572837269534/sega-retro-genesis-zd-06b-hd-ultra-225-igr-103071332-1.jpg',
        address: 'https://kaspi.kz/shop/p/sega-retro-genesis-zd-06b-hd-ultra-225-igr-103071332/?c=750000000#!/item',
        rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
      },

    ]
  }
]
