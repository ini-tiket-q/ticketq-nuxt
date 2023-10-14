export default $axios => ({
  async getAirports () {
    try {
      // const response = await $axios.get('http://143.198.208.181:3000/api/getcodearea-json')
      // const response = await $axios.get('https://web.klikmbc.biz/json/getcodearea-json')
      const response = await $axios.get('api/getcodearea-json')
      const data = response.data

      const localOnly = data.filter(el => el.grup === 'lokal')
      const options = localOnly.map(el => ({ text: ` ${el.city} - ${el.airport}`, value: el.code }))

      options.sort((a, b) => {
        const fa = a.text.toLowerCase()
        const fb = b.text.toLowerCase()
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })

      return options
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data from the API:', error)
      throw error
    }
  },
  async getItlAirports () {
    try {
      // const response = await $axios.get('http://143.198.208.181:3000/api/getcodearea-json')
      // const response = await $axios.get('https://web.klikmbc.biz/json/getcodearea-json')
      const response = await $axios.get('api/getcodearea-json')
      const data = response.data

      return data
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data from the API:', error)
      throw error
    }
  }
})
