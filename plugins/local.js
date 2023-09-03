export default (context, inject) => {
  inject('contact', ({
    fb: { value: 'https://www.facebook.com/badanpengusahaanbatam', text: 'facebook' },
    twitter: { value: 'https://twitter.com/bp_batam', text: 'twitter' },
    ig: { value: 'https://www.instagram.com/bpbatam', text: 'instagram' }
  }))
}
