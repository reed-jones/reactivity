// plugins
import { Reaction } from './reaction'

// import todo filters
import { filters } from './utils'

// restore previous todos, and remap id's starting at 0
let storedTodos = JSON.parse(
  localStorage.getItem('todo-reactive-todos') || '[]',
).map((todo, id) => ({ ...todo, id }))

// export the App so that we can easily import
// and update state from other components
// if we wanted too.
export default new Reaction({
  // set initial data values
  data: {
    counter: storedTodos.length,
    newTodo: '',
    todos: storedTodos,
    editedTodo: null,
    visibility: localStorage.getItem('todo-reactive-visibility') || 'all',
  },

  // set computed properties
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return filters.active(this.todos).length
    },
  },
})