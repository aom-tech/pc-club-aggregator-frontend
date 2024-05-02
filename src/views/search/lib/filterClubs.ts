import { clubsList } from '../model'

export const filterClubs = (searchParams: { [K: string]: string }) => {
  const queryParams = new URLSearchParams(searchParams)
  const cityParam = queryParams.get('city')
  const platformParam = queryParams.get('platform')
  const seatsParam = queryParams.get('seats')

  const filteredClubs = clubsList.filter((club) => {
    if (cityParam) {
      if (cityParam !== club.city) {
        return false
      }
    }

    switch (platformParam) {
      case 'плойка':
        if (!(club.psCurrent && club.psCurrent > 0)) {
          return false
        }
        if (seatsParam) {
          if (club.psCurrent < +seatsParam) {
            return false
          }
        }
        break
      case 'пк':
        if (!(club.pcCurrent && club.pcCurrent > 0)) {
          return false
        }
        if (seatsParam) {
          if (club.pcCurrent < +seatsParam) {
            return false
          }
        }
        break
      case 'вип':
        if (!(club.vipCurrent && club.vipCurrent > 0)) {
          return false
        }
        if (seatsParam) {
          if (club.vipCurrent < +seatsParam) {
            return false
          }
        }
        break
      default:
        break
    }
    return true
  })

  return filteredClubs
}
