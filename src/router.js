
import { Router } from 'director/build/director';
import state from './state'

new Router({
  '/all': _ => state.visibility = 'all',
  '/active': _ => state.visibility = 'active',
  '/completed': _ => state.visibility = 'completed'
}).init();