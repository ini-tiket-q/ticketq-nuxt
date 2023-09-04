export default $axios => ({
  getAllSchedule () {
    return {
      data: [
        {
          airline: { code: 'SUPERAIRJET', name: 'Super Air Jet' },
          origin: { name: 'BTH', at: '2023-09-03T08:25:00+00:00' },
          destination: { name: 'DPS', at: '2023-09-03T10:00:00+00:00' },
          transit: [],
          freeBaggage: 20,
          reschedulable: true,
          price: 1920000,
          stopPoint: [
            {
              location: {
                city: 'Batam (BTH)',
                airport: 'Hang Nadim'
              },
              at: '2023-09-03T08:25:00+00:00',
              duration: '1h',
              plane: {
                code: 'QG-495',
                type: 'Airbus A320'
              }
            },
            {
              location: {
                city: 'Bali (DPS)',
                airport: 'I Gusti Ngurah Rai'
              },
              at: '2023-09-03T10:00:00+00:00',
              duration: null,
              plane: null
            }
          ]
        },
        {
          airline: { code: 'LIONAIR', name: 'Lion Air' },
          origin: { name: 'BTH', at: '2023-09-03T08:25:00+00:00' },
          destination: { name: 'DPS', at: '2023-09-03T10:00:00+00:00' },
          transit: [],
          freeBaggage: 20,
          reschedulable: true,
          price: 1920000,
          stopPoint: [
            {
              location: {
                city: 'Batam (BTH)',
                airport: 'Hang Nadim'
              },
              at: '2023-09-03T08:25:00+00:00',
              duration: '1h',
              plane: {
                code: 'QG-495',
                type: 'Airbus A320'
              }
            },
            {
              location: {
                city: 'Bali (DPS)',
                airport: 'I Gusti Ngurah Rai'
              },
              at: '2023-09-03T10:00:00+00:00',
              duration: null,
              plane: null
            }
          ]
        },
        {
          airline: { code: 'SUPERAIRJET', name: 'Super Air Jet' },
          origin: { name: 'BTH', at: '2023-09-03T08:25:00+00:00' },
          destination: { name: 'DPS', at: '2023-09-03T10:00:00+00:00' },
          transit: [],
          freeBaggage: 20,
          reschedulable: true,
          price: 1920000,
          stopPoint: [
            {
              location: {
                city: 'Batam (BTH)',
                airport: 'Hang Nadim'
              },
              at: '2023-09-03T08:25:00+00:00',
              duration: '1h',
              plane: {
                code: 'QG-495',
                type: 'Airbus A320'
              }
            },
            {
              location: {
                city: 'Bali (DPS)',
                airport: 'I Gusti Ngurah Rai'
              },
              at: '2023-09-03T10:00:00+00:00',
              duration: null,
              plane: null
            }
          ]
        }
      ]
    }
  }
})
