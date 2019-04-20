import { html } from 'lit-html'

import { todoHeader } from './todoHeader'
import { todoBody } from './todoBody'
import { todoFooter } from './todoFooter'

export const todoApp = _ => {
  return html`
    ${todoHeader()}${todoBody()}${todoFooter()}
  `
}
