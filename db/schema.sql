### Schema

CREATE DATABASE burger_DB;
USE burger_DB;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date DATETIME NOT NULL,
	PRIMARY KEY (id)
);