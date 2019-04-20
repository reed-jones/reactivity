import { html } from 'lit-html'
import { ENTER_KEY, ESC_KEY } from '../keyCodes'
import { classes } from '../utils'

export const todoItem = (state, todo, events) => {


  const removeTodo = todo => event => {
    state.todos = state.todos.filter(t => t.id !== todo.id)
  }

  const editTodo = todo => event => {
    state.beforeEditCache = todo.title
    state.editedTodo = todo.id
    document.getElementById(`todo_input_${todo.id}`).focus()
  }


  const doneEdit = todo => event => {
    if (!state.editedTodo) {
      return
    }

    state.editedTodo = null
    todo.title = todo.title.trim()
    if (!todo.title) {
      removeTodo(todo)()
    }
  }

  const cancelEdit = todo => event => {
    state.editedTodo = null
    todo.title = state.beforeEditCache
  }

  const editKeydown = todo => event => {
    if (event.keyCode === ENTER_KEY) {
      doneEdit(todo)()
    } else if (event.keyCode === ESC_KEY) {
      cancelEdit(todo)()
    }
  }

  return html`
    <li
      class="todo ${classes({
        completed: todo.completed,
        editing: todo.id === state.editedTodo,
      })}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          .checked="${todo.completed}"
          @click=${e => {
            todo.completed = !todo.completed
            if (!state.filteredTodos.some(({ id }) => id === todo.id )) {
              e.preventDefault()
            }
          }}
        />
        <label @dblclick="${editTodo(todo)}">${todo.title}</label>
        <button class="destroy" @click="${removeTodo(todo)}"></button>
      </div>
      <input
        class="edit"
        type="text"
        id=${'todo_input_' + todo.id}
        .value="${todo.title}"
        @input="${e => (todo.title = e.target.value)}"
        @blur="${doneEdit(todo)}"
        @keyup="${editKeydown(todo)}"
      />
    </li>
  `
}