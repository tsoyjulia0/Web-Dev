export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  like: number;
  categoryId: number;
}

export const productList: Product[] = [
  {
    id: 1,
    name: 'Monitor Samsung Odyssey G3 LS27AG300NIXCI black',
    price: 358.63,
    description: 'Монитор Samsung Odyssey G3 LS27AG300NIXCI с диагональю 27\" выполнен в черном корпусе и стандартно устанавливается на подставку.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h3d/50938199572510/monitor-samsung-gaming-odyssey-g3-ls27ag300nixci-104959386-1.jpg",
    link: "https://kaspi.kz/shop/p/samsung-odyssey-g3-ls27ag300nixci-chernyi-104959386/?c=750000000#!/item",
    like: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Монитор Samsung LF24T350FHIXCI черный',
    price: 179.52,
    description: 'Минималистичный дизайн. Максимальный визуальный комфорт. Отсутствие рамок с 3 сторон создает ощущение свободного пространства и современной эстетики в любой рабочей обстановке.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h7c/33060711006238/samsung-lf24t350fhixci-cernyj-100677425-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/samsung-lf24t350fhixci-chernyi-100677425/?c=750000000#!/item",
    like: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Монитор Lenovo Legion Y25-30 черный',
    price: 356.79,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h8f/67807079497758/lenovo-legion-y25-30-chernyi-108410322-1.jpg",
    link: "https://kaspi.kz/shop/p/lenovo-legion-y25-30-chernyi-108410322/?c=750000000#!/item",
    like: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Монитор Xiaomi Mi Desktop Monitor 1C BHR4510GL черный',
    price: 181.72,
    description: 'Монитор Xiaomi Mi Desktop Monitor 1С привлекает внимание элегантностью форм, практически незаметной узкой рамкой около экрана и востребованным функционалом, поэтому станет надежным выбором для работы с различными приложениями и развлечений мультимедиа на каждый день. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/hf2/33938822070302/xiaomi-mi-desktop-monitor-1c-cernyj-101109328-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-desktop-monitor-1c-bhr4510gl-chernyi-101109328/?c=750000000#!/item",
    like: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: 'Монитор DELL S2721HGF черный',
    price: 299.5,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h1c/33187029418014/dell-s2721hgf-cernyj-100687619-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/dell-s2721hgf-chernyi-100687619/?c=750000000#!/item",
    like: 0,
    categoryId: 1
  },
  {
    id: 6,
    name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    price: 444.23,
    description: 'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких и темных сценах.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg",
    link: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item",
    like: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'Телевизор LG 43LM5772PLA 109 см черный',
    price: 400.95,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item",
    like: 0,
    categoryId: 2
  },

  {
    id: 8,
    name: 'Телевизор Xiaomi MI TV P1 L43M6-6ARG 109 см черный',
    price: 460.05,
    description: 'Современный телевизор – это не только просмотр фильмов и телепередач, а большой комплекс возможностей для весёлого и в то же время познавательного семейного досуга.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h5b/49320428371998/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-l43m6-6arg-109-sm-chernyi-102743844/?c=750000000#!/item",
    like: 0,
    categoryId: 2
  },

  {
    id: 9,
    name: 'Телевизор Yasin 32G7 81 см черный',
    price: 186.75,
    description: 'Благодаря разрешению Ultra-HD зритель с удовольствием просмотрит на своём телевизоре любой фильм, ведь его изображение будет выше всяких похвал. Технологии Smart и Android у Вас дома!',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/hc5/61768877965342/yasin-g7-cernyj-103489358-1.jpg",
    link: "https://kaspi.kz/shop/p/yasin-32g7-81-sm-chernyi-103489358/?c=750000000#!/item",
    like: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'Телевизор Samsung UE32T5300AU 81 см черный',
    price: 336.62,
    description: 'Телевизор Samsung UE32T5300AU с 32-дюймовым экраном, разрешение которого составляет 1920 х 1080 пикселей, подходит для небольшой гостиной или просторной спальни. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/hf7/33871936159774/samsung-ue32t5300au-81-sm-cernyj-101134634-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/samsung-ue32t5300au-81-sm-chernyi-101134634/?c=750000000#!/item",
    like: 0,
    categoryId: 2
  },

  {
    id: 11,
    name: 'Графический планшет XP-PEN Star G640S',
    price: 58.24,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/h45/32283318288414/xp-pen-star-g640s-black-18500065-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/xp-pen-star-g640s-18500065/?c=750000000#!/item",
    like: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'Графический планшет Wacom One Medium CTL-672',
    price: 87.28,
    description: 'Графический планшет One Medium позволяет воплощать на компьютере потрясающие плоды вашего воображения точнее, быстрее и легче, чем вы могли себе представить.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h83/31703280255006/wacom-one-medium-ctl-672-black-red-18500036-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/wacom-one-medium-ctl-672-18500036/?c=750000000#!/item",
    like: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: 'Графический планшет Wacom One Small CTL-472',
    price: 60.35,
    description: 'WacomSmall One – удобный и компактный графический планшет, размер рабочей области которого составляет 152 х 95 мм. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h3c/31729992794142/wacom-one-small-ctl-472-black-red-18500037-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/wacom-one-small-ctl-472-18500037/?c=750000000#!/item",
    like: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'Графический планшет HUION Inspiroy H430P',
    price: 39.21,
    description: 'Воплотите в жизнь свои творческие задумки – создавайте рисунки с графическим планшетом Huion INSPIROY H950P. Интерфейсом подключения этого проводного устройства стал USB, зато перо для ввода является беспроводным, что оставляет за вами полную свободу движений. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/hcb/31515605696542/huion-inspiroy-h430p-black-18500047-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/huion-inspiroy-h430p-18500047/?c=750000000#!/item",
    like: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'Графический планшет XP-PEN Star G430S',
    price: 33.6,
    description: 'G430S графический планшет обладает активной областью 4x3” и толщиной всего 2 мм. Он такой же тонкий, как и все наши графические планшеты начального уровня. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/hed/32296442855454/xp-pen-star-g430s-black-18500064-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/xp-pen-star-g430s-18500064/?c=750000000#!/item",
    like: 0,
    categoryId: 3
  },

  {
    id: 16,
    name: 'Карта памяти Netac microSDHC P500STN-032G 32Gb',
    price: 2.96,
    description: 'Карта памяти microSD Netac Standard поможет расширить хранилище вашего смартфона, планшета, MP3-плеера, электронной книги. Объём – 32 Гб.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h3e/33157592907806/netac-microsdhc-p500stn-032g-32gb-100783155-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/netac-microsdhc-p500stn-032g-32gb-100783155/?c=750000000#!/item",
    like: 0,
    categoryId: 4
  },

  {
    id: 17,
    name: 'Карта памяти Transcend TS128GUSD300S 128 Гб',
    price: 12.77,
    description: 'Карты памяти Transcend microSDXC 300S соответствуют как стандарту UHS Speed Class 3 (U3), так и требованиям UHS Video Speed Class 30 (V30) для записи видео в формате 4K Ultra HD, обеспечивая скорости чтения и записи до 95 и 45 МБ/с, соответственно.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h4e/31625888759838/transcend-ts128gusd300s-128gb-15300303-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/transcend-ts128gusd300s-128-gb-15300303/?c=750000000#!/item",
    like: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: 'Карта памяти Netac microSDHC P500STN-032G 32Gb',
    price: 3.8,
    description: 'Карта памяти Kingston Canvas Select Plus оптимизирована для работы с устройствами, работающими на Android. Благодаря соответствию скоростному классу Class 10, UHS-I (U1) карту можно использовать в фото- и видеокамерах, снимающих в формате Full HD. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h47/50487923048478/kingston-micro-sdhc-sdcs2-32gbsp-32gb-100113168-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/kingston-sdcs2-32gbsp-32-gb-100113168/?c=750000000#!/item",
    like: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: 'Карта памяти Netac P500 Extreme Pro 128 Гб',
    price: 14.25,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/hc6/49270793502750/netac-nt02p500pro-128g-s-128-gb-104059692-1.jpg",
    link: "https://kaspi.kz/shop/p/netac-p500-extreme-pro-128-gb-104059692/?c=750000000#!/item",
    like: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Карта памяти Himory Micro SD U3A1 128 Гб',
    price: 13.44,
    description: 'Карта памяти Kingston Canvas Select Plus оптимизирована для работы с устройствами, работающими на Android. Благодаря соответствию скоростному классу Class 10, UHS-I (U1) карту можно использовать в фото- и видеокамерах, снимающих в формате Full HD. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/h51/68366179074078/himory-tf02-tf99-micro-sd-u3a1-128-gb-108639858-1.jpg",
    link: "https://kaspi.kz/shop/p/himory-micro-sd-u3a1-128-gb-108639858/?c=750000000#!/item",
    like: 0,
    categoryId: 4
  },
];
