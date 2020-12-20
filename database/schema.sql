DROP DATABASE IF EXISTS movielistSQL;

CREATE DATABASE movielistSQL;

USE movielistSQL;

CREATE TABLE movies (
  id int primary key not null auto_increment,
  name varchar(255) not null,
  length varchar(255),
  rating int
);

insert into movies (name, length, rating) values ('The Grinch', '120 mins', 5);
insert into movies (name, length, rating) values ('Ghost in The Shell', '83 mins', 7);
insert into movies (name, length, rating) values ('Ninja Scroll', '123 mins', 8);
insert into movies (name, length, rating) values ('Your Name', '111 mins', 10);
insert into movies (name, length, rating) values ('Run', '140 mins', 9);
