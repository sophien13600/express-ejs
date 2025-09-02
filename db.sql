DROP DATABASE if EXISTS express_mvc;
CREATE DATABASE express_mvc;

use express_mvc;

CREATE Table personnes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(30),
    prenom VARCHAR(30),
    age INT
);


INSERT INTO personnes VALUES
(null, "Wick", "John", 45),
(null, "Dalton", "Jack", 55),
(null, "Maggio", "Sophie", 35);
