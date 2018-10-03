create database burgers_db;
use burgers_db;
CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
