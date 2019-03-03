import { Reactivity } from './ReactivityFramework'
import { renderTemplate } from './ExampleTemplate'


const app = new Reactivity({
  data: {
    firstName: 'Reed',
    lastName: 'Jones',
    input: '',
    beenClicked: true,
    counter: 0
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    reversedFullname() {
      return this.fullName.split('').reverse().join('')
    }
  },
  onUpdate() {
    renderTemplate(this)
  }
})

setInterval(() => app.counter += 1, 1000)


console.log(app.firstName)
console.log(app.fullName)
app.firstName = 'Hello'
console.log(app.fullName)
app.lastName = 'World'
console.log(app.fullName)
console.log(app.reversedFullname)
app.fullName = `This Won't Save`
console.log(app.fullName)