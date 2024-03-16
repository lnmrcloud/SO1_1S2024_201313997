USE db;
CREATE TABLE ram (
    idram_registro INT NOT NULL AUTO_INCREMENT,
    ram int,
    PRIMARY KEY (idram_registro)
);
CREATE TABLE cpu (
    idcpu_registro INT NOT NULL AUTO_INCREMENT,
    cpu int,
    PRIMARY KEY (idcpu_registro)
);