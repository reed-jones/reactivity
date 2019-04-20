// styles
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import './styles.css'

// plugins
import { Reaction } from './reaction'

// base template render function
import { render } from './render'

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

  // calls every time a value changes
  onUpdate() {
    // re-render on data updates
    render(this)

    // store settings
    localStorage.setItem('todo-reactive-todos', JSON.stringify(this.todos))
    localStorage.setItem('todo-reactive-visibility', this.visibility)
  },
})
