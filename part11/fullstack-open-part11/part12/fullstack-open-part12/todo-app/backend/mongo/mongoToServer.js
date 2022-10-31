database.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'databaseOwner',
      database : 'the_database',
    },
  ],
});

database.createCollection('todos');
database.todos.insert({ text: 'Write code', done: true });
database.todos.insert({ text: 'Learn about containers', done: false });