import { html } from "lit-html";

export default ({ counter }) => html`
<br>
<hr>
<h2 class="counter">
  ${ counter }
</h2>
<hr>
${counterCSS()}
`

// highly sub-optimal, use a stylesheet
const counterCSS = () => html`
<style>
.counter {
  background: #333;
  color: #fff;
  padding: 24px;
}
</style>
`