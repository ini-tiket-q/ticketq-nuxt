import Flight from '~/api/flight'
import Airport from '~/api/airports'

export default ({ $axios }, inject) => {
  const repositories = {
    flight: Flight($axios),
    airports: Airport($axios)
  }
  inject('api', repositories)
}
