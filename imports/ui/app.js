import riot from 'riot';

riot.tag('app',

  `
  <section class="todoapp">

    <header class="header">
      <h1>todos</h1>
      <input class="new-todo js-new-todo" placeholder="What needs to be done?" autofocus>
    </header>

  </section>

  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://github.com/michalsnik">Michał Sajnóg</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  `,

  function(opts) {

  }

);
