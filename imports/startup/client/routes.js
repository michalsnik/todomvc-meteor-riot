import { FlowRouter } from 'meteor/kadira:flow-router';
import { ActiveRoute } from 'meteor/zimme:active-route';

ActiveRoute.configure({
  activeClass: 'selected',
});

FlowRouter.route('/', {
  name: 'Todos.all',
  action() {},
});

FlowRouter.route('/active', {
  name: 'Todos.active',
  action() {},
});

FlowRouter.route('/completed', {
  name: 'Todos.completed',
  action() {},
});
