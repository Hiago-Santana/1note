DROP TABLE IF EXISTS note;
CREATE TABLE IF NOT EXISTS note (noteId INTEGER PRIMARY KEY, title TEXT, description TEXT);
INSERT INTO note (noteId, title, description) VALUES (1, 'Alfreds Futterkiste', 'Maria Anders'), (4, 'Around the Horn', 'Thomas Hardy'), (11, 'Bs Beverages', 'Victoria Ashworth'), (13, 'Bs Beverages', 'Random Name');