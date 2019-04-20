import { html } from 'lit-html'

import { todoHeader } from './todoHeader'
import { todoBody } from './todoBody'
import { todoFooter } from './todoFooter'

export const todoApp = state => {
  return html`
    ${todoHeader(state)}${todoBody(state)}${todoFooter(state)}
  `
}
