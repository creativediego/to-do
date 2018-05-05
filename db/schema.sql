DROP DATABASE IF EXISTS to_do_db;

CREATE DATABASE to_do_db;

USE to_do_db;

CREATE TABLE tasks (
id INT NOT NULL AUTO_INCREMENT,
task VARCHAR(100) NOT NULL,
completed BOOLEAN NOT NULL DEFAULT 0,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)

);