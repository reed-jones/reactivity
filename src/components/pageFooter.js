import { html } from 'lit-html'

export const pageFooter = _ => {
  return html`
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="https://www.reedjones.com">Reed Jones</a></p>
      <p>(Heavily) Inspired by <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  `
}
