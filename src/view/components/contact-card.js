export class ContactCard {
  constructor(renderElement, { contactName = '', contact = '', description = '' } = {}) {
    this.renderElement = renderElement
    this.contactName = contactName
    this.contact = contact
    this.description = description
    this.render()
  }

  render() {
    this.renderElement.innerHTML = `
            <h3>${this.contactName}</h3>
            <p>${this.contact}</p>
            <p>${this.description}</p>
        `
  }
}
