type FilterSelectData = {
  placeholder: string
  values: string[]
  stateKey: string
}

export const filterSelectData: FilterSelectData[] = [
  {
    placeholder: 'Город',
    values: ['Казань', 'Москва', 'Питер'],
    stateKey: 'city',
  },
  {
    placeholder: 'Время',
    values: ['Сейчас', 'Через 30 мин', 'Через час'],
    stateKey: 'time',
  },
  {
    placeholder: 'Платформа',
    values: ['Пк', 'Плойка', 'Вип'],
    stateKey: 'platform',
  },
  {
    placeholder: 'Кол-во мест',
    values: ['1', '2', '3'],
    stateKey: 'seats',
  },
]
