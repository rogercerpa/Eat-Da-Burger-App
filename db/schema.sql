DROP DATABASE IF EXISTS eat_da_burger;
CREATE DATABASE eat_da_burger;
USE eat_da_burger;
CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (100)NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);
    