-- print literal string
SELECT "Hello, World";

-- rename the column title to "Result", by default it's "Hello, World"
SELECT "Hello, World" AS "Result";

-- another way to rename column title
SELECT Name, LifeExpectancy AS "Life Expantancy" FROM Country ORDER BY Name;

-- the keyward "AS" was not mandatory to rename a column title
SELECT Name, LifeExpectancy "Life Expantancy" FROM Country ORDER BY Name;

-- simple WHERE clause
SELECT Name, Continent, Region FROM Country WHERE Continent = 'Europe';

-- simple WHERE, ORDER BY and Limit
SELECT Name, Continent FROM Country WHERE Continent = 'Europe' ORDER BY Name LIMIT 5;

-- skip first 10
SELECT Name, Continent FROM Country WHERE Continent = 'Europe' ORDER BY Name LIMIT 5 OFFSET 10;

-- count the number of rows
SELECT COUNT(*) FROM Country WHERE Population > 10000 and Continent = 'Europe';

-- only count the number of rows wher LifeExpectancy has data
SELECT COUNT(LifeExpectancy) FROM Country;

-- simple insert
INSERT INTO customer (name, address, city, state, zip)
    VALUES ('John Doe', '123 Sesame Street', 'Toronto', 'CA', '10055')

-- simple update
UPDATE customer SET address = '456 Sesame Street', zip = '90001' WHERE id = 5

-- simple delete
DELETE FROM customer WHERE id = 5;

-- create a table with colum constraints
CREATE TABLE test {
    a   INTEGER NOT NULL,
    b   TEXT
    c   TEXT DEFAULT 'panda'
    d   TEXT UNIQUE
    e   TEXT UNIQUE NOT NULL    -- some SQL implementation treat NULLs as unique values
}

-- drop a table
DROP TABLE test;

-- drop a table. no error if the table doesn't exist
DROP TABLE IF EXISTS test;

-- insert an empty row
INSERT INTO test DEFAULT VALUES;

-- inserting rows from other table
INSERT INTO test (a, b, c) SELECT id, name, description FROM item;

-- alter is used to add, delete or modify columns in an existing table
-- is also to add and drop various constraints on an existing table
ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE table_name
DROP COLUMN column_name;


-- if check_expression is Null, then replace it with replacement_value
ISNULL ( check_expression , replacement_value )  