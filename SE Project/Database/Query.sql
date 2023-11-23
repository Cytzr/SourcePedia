CREATE TABLE Users (
   userID uniqueidentifier PRIMARY KEY,
   name VARCHAR(50),
   email VARCHAR(50),
   password VARCHAR(20)
);

CREATE TABLE Documents(
    documentID uniqueidentifier PRIMARY KEY,
	userID uniqueidentifier,
	title VARCHAR(255),
	content NVARCHAR(MAX),
	publishedTime DATE DEFAULT GETDATE(),
	FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE Tags(
    tagID uniqueidentifier PRIMARY KEY,
	tagName VARCHAR(255)
);

CREATE TABLE DocumentTags(
    documentID uniqueidentifier,
	tagID uniqueidentifier,
	PRIMARY KEY (documentID, tagID),
	FOREIGN KEY (documentID) REFERENCES Documents(documentID),
	FOREIGN KEY (tagID) REFERENCES Tags(tagID)
);

INSERT INTO Users(userID, name, email, password)
VALUES(NEWID(), 'jonathan', 'jonathan@gmail.com', 'jon'),
(NEWID(), 'calvin', 'calvin@gmail.com', 'cal'),
(NEWID(), 'sutrisna', 'sutrisna@gmail.com', 'sut')

--SELECT * FROM Users

INSERT INTO Documents(documentID, userID, title, content, publishedTime)
VALUES(NEWID(), (SELECT userID FROM Users WHERE name = 'jonathan'), 'ABC', 'loremipsum', '2004-01-01'),
(NEWID(), (SELECT userID FROM Users WHERE name = 'calvin'), 'DEF', 'sumaosodjawndw', '2004-02-02'),
(NEWID(), (SELECT userID FROM Users WHERE name = 'sutrisna'), 'GHI', ';jwebibkjsdivlsBAVP', '2004-03-03')

--SELECT * FROM Documents

/*
SELECT *
FROM Users as u
INNER JOIN Documents as d
ON u.userID = d.userID
*/

INSERT INTO Tags(tagID, tagName)
VALUES(NEWID(), 'Health'),
(NEWID(), 'Tech'),
(NEWID(), 'Lifestyle')

--SELECT * FROM Tags

INSERT INTO DocumentTags(documentID, tagID)
VALUES((SELECT d.documentID 
FROM Documents as d
INNER JOIN Users as u 
ON u.userID = d.userID
WHERE u.name = 'jonathan'),(SELECT tagID
FROM Tags
WHERE tagName = 'Health')),

((SELECT d.documentID 
FROM Documents as d
INNER JOIN Users as u 
ON u.userID = d.userID
WHERE u.name = 'calvin'),(SELECT tagID
FROM Tags
WHERE tagName = 'Health')),

((SELECT d.documentID 
FROM Documents as d
INNER JOIN Users as u 
ON u.userID = d.userID
WHERE u.name = 'sutrisna'),(SELECT tagID
FROM Tags
WHERE tagName = 'Tech')),

((SELECT d.documentID 
FROM Documents as d
INNER JOIN Users as u 
ON u.userID = d.userID
WHERE u.name = 'jonathan'),(SELECT tagID
FROM Tags
WHERE tagName = 'Tech'))

--SELECT * FROM DocumentTags