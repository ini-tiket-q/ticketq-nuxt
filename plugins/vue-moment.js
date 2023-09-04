import Vue from 'vue'
import VueMoment from 'vue-moment'

const moment = require('moment')
require('moment/locale/en-ca')

Vue.use(VueMoment, { moment })
