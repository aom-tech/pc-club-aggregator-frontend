type FilterSelectData = {
  placeholder: string
  values: string[]
  queryParam: string
}

export const filterSelectData: FilterSelectData[] = [
  {
    placeholder: 'Город',
    values: ['Казань', 'Москва', 'Питер'],
    queryParam: 'city',
  },
  {
    placeholder: 'Время',
    values: ['Сейчас', 'Через 30 мин', 'Через час'],
    queryParam: 'time',
  },
  {
    placeholder: 'Платформа',
    values: ['Пк', 'Плойка', 'Вип'],
    queryParam: 'platform',
  },
]
