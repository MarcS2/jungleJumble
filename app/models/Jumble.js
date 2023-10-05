import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get JumbleListTemplate() { // a basic list template to get drawing
    return `
    <div>
    <button onclick="app.JumblesController.setJumble('${this.id}')" class="btn btn-danger my-2">Start</button>
    <p class="d-inline">${this.name}</p>
    </div>
  `
  }

  get JumbleText() {
    return `<p class="fs-5">${this.body}</p>`
  }

  get JumbleName() {
    return `<p class="fs-4 fw-3 mb-0">${this.name}</p>`
  }

}