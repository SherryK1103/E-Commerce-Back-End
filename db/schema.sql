CREATE DATABASE e_commerce_db;

CREATE TABLE
    Categories (
        id INT NOT NULL AUTO_INCREMENT,
        category_name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    Product (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL DEFAULT 10,
        categories_id INT,
        FOREIGN KEY (categories_id) REFERENCES Categories(id)
    );

CREATE TABLE
    Tag (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        tag_name VARCHAR(255) NOT NULL
    );

CREATE TABLE
    ProductTag (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        product_id INT,
        tag_id INT,
        FOREIGN KEY (product_id) REFERENCES Product(id),
        FOREIGN KEY (tag_id) REFERENCES Tag(id)
    );