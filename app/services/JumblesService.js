import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js";

class JumblesService {
  createJumble(jumbleData) {
    const newJumble = new Jumble(jumbleData)
    AppState.jumbles.push(newJumble)
    console.log(jumbleData);
    console.log(newJumble);
    AppState.emit('jumbles')
  }
  setJumble(jumbleId) {
    console.log(jumbleId);
    const activeJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = activeJumble
    console.log('appsate', AppState.activeJumble);
    console.log('active', activeJumble);
  }


}

export const jumblesService = new JumblesService