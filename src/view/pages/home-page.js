import { CurrentDate } from '../components/current-date'
import { ContactCard } from '../components/contact-card'

const dateElement = document.querySelectorAll('.current-date') || []
const contactCardElement = document.querySelectorAll('.contact-card') || []
const contact = { contactName: 'Roos', contact: '123', description: 'call me' }

dateElement.forEach(element => {
  // eslint-disable-next-line no-new
  new CurrentDate(element)
})

contactCardElement.forEach(element => {
  // eslint-disable-next-line no-new
  new ContactCard(element, contact)
})
