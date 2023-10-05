import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { jumblesService } from "../services/JumblesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

function _drawList() {
  let content = ''
  const jumbles = AppState.jumbles
  AppState.jumbles.forEach(jumble => content += jumble.JumbleListTemplate)
  console.log('jumble HTML', content);
  setHTML('jumbleList', content)
}

function _drawActiveJumble() {
  const jumbleName = AppState.activeJumble
  const jumble = AppState.activeJumble
  if (!jumble) { return }
  setHTML('jumbleTxt', jumble.JumbleText)
  setHTML('jumbleName', jumble.JumbleName)
}

export class JumblesController {
  constructor() {
    _drawList()
    AppState.on('jumbles', _drawList)
  }
  setJumble(jumbleId) {
    jumblesService.setJumble(jumbleId)
    _drawActiveJumble()
  }

  createJumble(event) {
    try {

      const form = event.target
      event.preventDefault()

      const jumbleData = getFormData(form)

      jumblesService.createJumble(jumbleData)
      form.reset()
    } catch (error) {

    }

  }


  checkInput(event) {
    event.preventDefault()
    const form = event.target
    let textInput = ''
    const inputData = getFormData(form)
    console.log(inputData);
    // @ts-ignore
    if (inputData === AppState.activeJumble.body) {
      Pop.success('game win')
    }

  }


}