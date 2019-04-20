import { html } from 'lit-html'

const addTodo = state => event => {
  if (event.keyCode !== 13) {
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

export const todoHeader = state => {
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
        @keyup="${addTodo(state)}"
      />
    </header>
  `
}
