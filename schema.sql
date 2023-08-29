DROP TABLE IF EXISTS note;
CREATE TABLE IF NOT EXISTS note (noteId INTEGER PRIMARY KEY, title TEXT, description TEXT);
INSERT INTO note (noteId, title, description) VALUES (1, 'Alfreds Futterkiste', 'Maria Anders'), (4, 'Around the Horn', 'Thomas Hardy'), (11, 'Bs Beverages', 'Victoria Ashworth'), (13, 'Bs Beverages', 'Random Name');

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (usersId INTEGER PRIMARY KEY, nome varchar(100), email varchar(100), password varchar(255));
INSERT INTO users (usersId, nome, email, password) VALUES (1, 'Alfreds Futterkiste', 'alfreds@email.com', '123456'), (2, 'Around the Horn', 'around@email.com','654321'), (3, 'Bs Beverages', 'bs@email.com', '654987');