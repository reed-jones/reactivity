// lit-html templates
import { html, render as litRender } from 'lit-html'

import { todoApp } from './components/todoApp'
import { pageFooter } from './components/pageFooter'

// overall app structure
export const myTemplate = state => {
  return html`
    <section class="todoapp">
      ${todoApp(state)}
    </section>
    ${pageFooter()}
  `
}

// the render function, passing the current state to
// each component to re-render if needed
export const render = state => {
  litRender(myTemplate(state), document.body)
}
