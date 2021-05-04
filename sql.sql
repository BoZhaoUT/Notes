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

-- select unique values. it can be used on multiple values
SELECT DISTINCT a, b FROM Country;

-- simple ORDER BY. it's increasing order by default
SELECT Name FROM Country ORDER BY Continent DESC, Name ASC;

-- filtering data
SELECT Name, Contiinent, Population FROM Country
  WHERE Population < 10000 OR Population IS NULL;

-- % 0 or many occurences of anything, _ matches a single character
SELECT Name, Contiinent, Population FROM Country
  WHERE Name LIKE '%island%';

-- IN operator
SELECT Name, Contiinent, Population FROM Country
  WHERE Continent IN ('Europe', 'Asia');

-- boolean. 0 = false, any other number is true
SELECT
  CASE a WHEN 1 THEN 'true' END as boolA
FROM booltest;

-- simple JOIN and LEFT JOIN
SELECT s.id AS sale, i.name
  FROM sale AS s
  JOIN item AS i ON s.item_id = i.id;

-- JOIN with a junction table (many-to-many relation)
SELECT c.name, i.name, s.price
  FROM sale AS s
  JOIN item AS i ON s.item_id = i.id
  JOIN customer as c ON s.customer_id = c.id;

-- String functions
SELECT LENGTH(Name);
SELECT SUBSTR('hello world', 1, 5);
SELECT TRIM('...hello...', '.'); -- LTRIM(), RTRIM()
SELECT UPPER('heLLo') -- LOWER()

-- TYPEOF()
SELECT TYPEOF(1 + 1); -- integer
SELECT TYPEOF(1 + 1.0): -- real
SELECT TYPEOF('Panda'); -- text

-- numbers
SELECT 1 / 2; -- 0 because both numbers are integers
SELECT 1.0 / 2; -- 0.5 because 1.0 is a real number
SELECT CAST(1 AS REAL) / 2; -- 0.5
SELECT 17 % 5; -- 3 module division

SELECT 2.555; -- 2.555
SELECT ROUND(2.555); -- 3
SELECT ROUND(2.555, 2); -- 2.56
SELECT ROUND(2.55

-- date and time
SELECT DATETIME('now'); -- 2021-05-03 20:00:54
SELECT DATE('now'); -- 2021-05-03
SELECT TIME('now'); -- 20:01:02
SELECT DATETIME('now', '-1 day', '+3 hours'); -- 2021-05-02 23:03:30

-- aggregate
SELECT a.title AS Album, COUNT(t.track_number) AS Tracks
  FROM track AS t
  JOIN album AS a
    ON a.id = t.album_id
  WHERE a.artist = 'The Beatles' -- where apply on no-aggregate data
  GROUP BY a.id
  HAVING Tracks >= 10   -- having apply on aggregate data

SELECT AVG(Population) FROM Country; -- other functions: MIN(), MAX(), SUM()

-- simple transaction
BEGIN TRANSACTION;
  INSERT INTO widgetSales (inv_id, quan, price) VALUES (1, 5, 500);
  UPDATE widgetInventory SET onhand = (onhand - 5) WHERE id = 1;
END TRANSACTION;

-- with ROLLBACK
BEGIN TRANSACTION;
  INSERT INTO widgetInventory (description, onhand) VALUES ('toy', 25);
ROLLBACK;


DELETE FROM Vehicle WHERE Name = 'Ford';

CREATE TABLE right (a INTEGER, b TEXT, c TEXT);
INSERT INTO right VALUES (1, 'This', 'Right here!');
INSERT INTO right (b, c) VALUES ('That', 'Over there!');
INSERT INTO right DEFAULT VALUES;


-- trigger
CREATE TRIGGER newWidgetSale AFTER INSERT ON WidgetSale
  BEGIN
    UPDATE widgetCustomer SET last_order_id = NEW.id
      WHERE widgetCustomer.id = NEW.customer_id;
  END;

-- view
CREATE VIEW trackView AS SELECT id, album FROM track;
DROP VIEW IF EXISTS trackView;
