import { html } from 'lit-html'
import { classes, pluralize } from '../utils'

//bottom row filter buttons
const filterItem = (state, filter, label) => {
  const setVisible = filter => event => {
    state.visibility = filter
  }

  const isVisible = filter => {
    return state.visibility === filter
  }

  return html`
    <li>
      <a
        href="#/${filter}"
        @click=${setVisible(filter)}
        class=${classes({ selected: isVisible(filter) })}
        >${label}</a
      >
    </li>
  `
}

// clear completed button
const clearBtn = state => {
  const removeCompleted = event => {
    state.todos = state.todos.filter(todo => !todo.completed)
  }

  if (state.todos.length > state.remaining) {
    return html`
      <button class="clear-completed" @click="${removeCompleted}">
        Clear completed
      </button>
    `
  }
}

// app footer template
export const todoFooter = state => {
  if (!state.todos.length) {
    return ''
  }

  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>${state.remaining}</strong>
        ${pluralize('item', state.remaining)} left
      </span>
      <ul class="filters">
        ${filterItem(state, 'all', 'All')}
        ${filterItem(state, 'active', 'Active')}
        ${filterItem(state, 'completed', 'Completed')}
      </ul>
      ${clearBtn(state)}
    </footer>
  `
}
