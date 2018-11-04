### Schema

CREATE DATABASE burger_DB;
USE burger_DB;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(50),
    devoured BOOLEAN NOT NULL DEFAULT false,
    createdOn TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);