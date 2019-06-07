ALTER TABLE Product AUTO_INCREMENT = 101;
DELETE FROM Distributor WHERE name = "New guys";
DELETE FROM TagOwnership WHERE productId = 101;
DELETE FROM Tag WHERE value IN ("TestTag1", "TestTag2");
DELETE FROM Product WHERE name = "Test";