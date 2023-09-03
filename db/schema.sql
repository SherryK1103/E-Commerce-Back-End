CREATE DATABASE e_commerce_db;

CREATE TABLE
    categories(
        id INT NOT NULL AUTO_INCREMENT,
        category_name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    product(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL DEFAULT 10,
        categories_id INT,
        FOREIGN KEY (categories_id) REFERENCES categories(id)
    );

CREATE TABLE
    tag(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        tag_name VARCHAR(255) NOT NULL,
    );