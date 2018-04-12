
USE amazon_db;

CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(100)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("string-cheese  ", "foods ", 2.50, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("invisibility-cloak", "accessories", 150, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("parachute    ", "accessories", 80, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hover-craft  ", "vehicles ", 300, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-wing  ", "vehicles ", 400, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("grappling-hook", "accessories", 25, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apples   ", "foods ", 2, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("golfcart  ", "vehicles ", 250, 4);
