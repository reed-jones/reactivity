import { html, render } from 'lit-html';

// SFC Components
import counterEl from './components/counter'

/**lit-html components */
const header = ({ beenClicked, fullName, reversedFullname }) => html`
  <h1>${beenClicked ? fullName : reversedFullname}</h1>
`
const subHeader = ({ beenClicked, fullName, input }) => html`
  <h3>${fullName}</h3><h5>${input}&nbsp;</h5>
`
const button = (event) => html`
  <button @click=${event}>Click Me!</button>
`
const inputEl = (event, value) => html`
  <input @input=${event} value=${value} />
`

/** Event Handlers */
// the first argument is the instance of the app
const clickHandler = app => e => {
  app.beenClicked = !app.beenClicked
}
const typeHandler = app => e => {
  app.input = e.target.value
}

/** HTML Template */
const myTemplate = a => html`
${header(a)}
${subHeader(a)}
${inputEl(typeHandler(a), a.input)}
${button(clickHandler(a))}
${subHeader(a)}
${counterEl(a)}
`;

export const renderTemplate = app => {
  render(myTemplate(app), document.body)
}