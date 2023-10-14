export default $axios => ({
  async getAllSchedule () {
    try {
      // const response = await $axios.get('http://143.198.208.181:3000/api/getcodearea-json')
      const response = await $axios.get('https://web.klikmbc.biz/json/getcodearea-json')
      const data = response.data
      console.log({ data })

      return data
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data from the API:', error)
      throw error
    }
  }
})
