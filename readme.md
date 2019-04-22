# Reactivity

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4c040e0-d344-4bae-b91c-2e5f24bdfcf4/deploy-status)](https://app.netlify.com/sites/todo-reactivity/deploys)

Reactivity is a 2 way binding data layer, similar in spirit to the way [Vue.js](https://vuejs.org/) handles data, and computed properties. Its not meant (at this point anyways) to be used in any sort of serious project, but instead is an experiment for me to learn more about [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). It aims to be the data layer which can be used with different rendering, or templating engines. This repo uses [lit-html](https://lit-html.polymer-project.org/) for templating, but any engine should work fine, or even just using vanilla javascript.

Initiating the object is simple.
```js
const data = new Reaction({
  data: {
    // all data properties can go here

    counter: 0
  },
  computed: {
    doubleCounter() {
      return this.counter * 2
    }
  }
})


console.log(data.counter)
// 0
console.log(data.doubleCounter)
// 0

// update the counter
data.counter++

console.log(data.counter)
// 1
console.log(data.doubleCounter)
// 2
```

Additionally, every time a data element is changed, the onUpdate action is called.

```js
const data = new Reaction({
  data: {
    // all data properties can go here

    counter: 0
  },
  computed: {
    doubleCounter() {
      return this.counter * 2
    }
  },
  onUpdate() {
    console.log('updated!')
  }
})

data.counter++
// updated!
```
This hook can be used to re-render the template (or anything else).


The onUpdate action can also be set later on.
```js
/********* store.js **********/
export default new Reaction({
    // data & computed properties
})

/******* template.js *********/
import store from './store'

store.$actions.onUpdate = () => {
  renderTemplate();
}
```