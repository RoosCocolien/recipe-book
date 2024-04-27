// to create custom elements we use JS classes
// HTMLElement is an interface that represents HTML elements

// zie assignment 3cv2

export class RecipeCard extends HTMLElement {
  // constructor provides a prefix value when the first el has been created
  // also prefix values for title ingr and instr
  constructor() {
    super()
    this.title = ''
    this.imageSrc = ''
    this.ingredients = []
    this.instructions = ''
  }

  // this is a life cycle of an HTML element that will be called
  // when the element is successfully added to an HTML document
  // with render we display the cntents of the custom element
  connectedCallback() {
    this.title = this.getAttribute('title')
    this.ingredients = this.getAttribute('ingredients')
    this.instructions = this.getAttribute('instructions')
    this.imageSrc = this.getAttribute('imageSrc')

    // render is used to set the content of a custom element
    this.render()
  }

  render() {
    this.innerHTML = `
        <div>
            <h2>${this.title}</h2>
            <img src=${this.imageSrc} />
            <p>${this.ingredients}</p>
            <p>${this.instructions}</p>
        </div>
    `
  }
}

customElements.define('recipe-card', RecipeCard)

// https://medium.com/tunaiku-tech/create-your-first-web-component-with-vanilla-javascript-af93cbf3a70f
