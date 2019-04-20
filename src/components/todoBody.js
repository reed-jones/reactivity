import { html } from 'lit-html'
import { todoItem } from './todoItem'

export const todoBody = state => {
  if (!state.todos.length) {
    return ''
  }

  const allDone = e => {
    state.todos = state.todos.map(todo => ({
      ...todo,
      completed: e.target.checked,
    }))
  }

  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        .checked="${!state.remaining}"
        @change="${allDone}"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${state.filteredTodos.map(todo => todoItem(state, todo))}
      </ul>
    </section>
  `
}
