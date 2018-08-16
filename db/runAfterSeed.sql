-- All of these statements must be ran after the seed has been ran
-- This is because sequelize requires these columns to function

ALTER TABLE mushrooms ADD COLUMN id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST;

ALTER TABLE mushrooms ADD COLUMN createdAt DATETIME;

ALTER TABLE mushrooms ADD COLUMN updatedAt DATETIME;