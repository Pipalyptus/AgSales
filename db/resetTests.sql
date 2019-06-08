ALTER TABLE Product AUTO_INCREMENT = 101;
DELETE FROM Distributor WHERE name = "New guys";
DELETE FROM Distributor WHERE name = "Test guys";
DELETE FROM TagOwnership WHERE productId = 101;
DELETE FROM TagOwnership WHERE productId = 102;
DELETE FROM Tag WHERE value IN ("TestTag1", "TestTag2", "testingTag");
DELETE FROM Product WHERE name = "Test";
DELETE FROM Product WHERE name = "Test no new tags";