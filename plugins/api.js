import Flight from '~/api/flight'

export default ({ $axios }, inject) => {
  const repositories = {
    flight: Flight($axios)
  }
  inject('api', repositories)
}
