// styles
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import './styles.css'

// lit-html templates
import { html, render } from 'lit-html'

import { todoApp } from './components/todoApp'
import { pageFooter } from './components/pageFooter'

import state from './app'

// overall app structure
export const myTemplate = _ => {
  return html`
    <section class="todoapp">
      ${todoApp()}
    </section>
    ${pageFooter()}
  `
}

// the render function, passing the current state to
// each component to re-render if needed
state.$actions.onUpdate = _ => {
  // lit-html render function
  render(myTemplate(state), document.body)

  // save important state so we can restore
  localStorage.setItem('todo-reactive-todos', JSON.stringify(state.todos))
  localStorage.setItem('todo-reactive-visibility', state.visibility)
}

// Force Initial Render
state.$actions.onUpdate()