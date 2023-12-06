CREATE TABLE licores (
    licor_id INT PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    quantity INT NOT NULL
);

