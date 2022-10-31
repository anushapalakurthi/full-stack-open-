Create Table blogs (
  id SERIAL PRIMARY KEY,
  author text,
  url text NOT NULL,
  title text NOT NULL,
  likes int default 0
);

INSERT INTO blogs (author, url, title, likes) values ('Emmanuel Okuchukwu', 'https://fullstackopen.com/en/part13/using_relational_databases_with_sequelize', 'Hello World the program!', 0)
