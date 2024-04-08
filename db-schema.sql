
CREATE TABLE authors (
  id serial primary key ,
  first_name varchar(255) NOT NULL
);

CREATE TABLE books (
  id serial primary key,
  author_id integer NOT NULL REFERENCES authors (id) ON DELETE CASCADE,
  title varchar(255) NOT NULL
);
