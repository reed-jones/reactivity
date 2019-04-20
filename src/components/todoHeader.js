import { html } from 'lit-html'
import { ENTER_KEY } from '~/keyCodes'
import state from '~/app'

const addTodo = _ => event => {
  if (event.keyCode !== ENTER_KEY) {
    return
  }
  const value = state.newTodo && state.newTodo.trim()
  if (!value) {
    return
  }

  state.todos.push({
    id: ++state.counter,
    title: value,
    completed: false,
  })
  state.newTodo = ''
}

export const todoHeader = _ => {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        .value="${state.newTodo}"
        @input="${e => (state.newTodo = e.target.value)}"
        @keyup="${addTodo()}"
      />
    </header>
  `
}
