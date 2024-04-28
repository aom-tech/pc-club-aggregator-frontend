type ClubCardType = {
  name: string
  address: string
  city: string
  rating: number
  pcCurrent?: number
  pcMax?: number
  psCurrent?: number
  psMax?: number
  vipCurrent?: number
  vipMax?: number
  src: string
}

export const clubsList: ClubCardType[] = [
  {
    name: 'Беляево',
    address: 'г. Москва, ул. Профсоюзная, 102а, этаж 2, ТЦ Белка',
    city: 'Москва',
    rating: 4.55,
    pcCurrent: 15,
    pcMax: 20,
    psCurrent: 20,
    psMax: 20,
    vipCurrent: 7,
    vipMax: 10,
    src: '/club-photo.webp',
  },
  {
    name: 'Winstrike Tavern',
    address: 'Казань, Петербургская улица, 9, ТЦ Республика',
    city: 'Казань',
    rating: 4.9,
    pcCurrent: 24,
    pcMax: 70,
    psCurrent: 3,
    psMax: 8,
    vipCurrent: 4,
    vipMax: 4,
    src: '/winstrike.webp',
  },
  {
    name: 'Hive',
    address: 'Tishinskaya Ploshchad, 1 строение 1, Moscow, Russia, 123056',
    city: 'Москва',
    rating: 4.6,
    pcCurrent: 38,
    pcMax: 45,
    psCurrent: 3,
    psMax: 3,
    vipCurrent: 7,
    vipMax: 10,
    src: '/HivePC.jpeg',
  },
  {
    name: 'Levels Cyber Club',
    address: 'Kochnovskiy Proyezd, 4 корпус 1, Moscow, Russia, 125319',
    city: 'Москва',
    rating: 4.5,
    pcCurrent: 20,
    pcMax: 20,
    psCurrent: 2,
    psMax: 2,
    src: '/LevelsPC.jpg',
  },
  {
    name: 'colizeum Космос',
    address: 'улица Типанова, 27/39, ТК "КОСМОС", Санкт-Петербург',
    city: 'СПБ',
    rating: 4.95,
    pcCurrent: 69,
    pcMax: 85,
    psCurrent: 10,
    psMax: 10,
    vipCurrent: 7,
    vipMax: 30,
    src: '/CosmosPC.png',
  },
  {
    name: 'Cheater',
    address: 'Республика Татарстан, Казань, улица Академика Сахарова, 22',
    city: 'Казань',
    rating: 5,
    pcCurrent: 24,
    pcMax: 70,
    psCurrent: 3,
    psMax: 8,
    vipCurrent: 4,
    vipMax: 4,
    src: '/CheaterPC.jpg',
  },
  {
    name: 'Vega',
    address: 'Promyshlennaya Ulitsa, 6, St Petersburg, Russia, 198095',
    city: 'СПБ',
    rating: 4.55,
    pcCurrent: 15,
    pcMax: 20,
    psCurrent: 20,
    psMax: 20,
    vipCurrent: 7,
    vipMax: 10,
    src: '/VegaPC.jpeg',
  },
  {
    name: 'Winstrike Tavern',
    address: 'Казань, Петербургская улица, 9, ТЦ Республика',
    city: 'Казань',
    rating: 4.9,
    pcCurrent: 24,
    pcMax: 70,
    psCurrent: 3,
    psMax: 8,
    vipCurrent: 4,
    vipMax: 4,
    src: '/winstrike.webp',
  },
]
