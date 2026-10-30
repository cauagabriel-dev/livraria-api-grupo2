-- Script do banco da Livraria
-- Rode este arquivo inteiro no MySQL Workbench (raio ⚡).
-- Ele apaga e recria tudo: pode rodar de novo sempre que quiser começar do zero.

DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria;
USE livraria;

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  estoque INT NOT NULL
);

INSERT INTO livros (titulo, autor, preco, estoque) VALUES
  ('Clean Code', 'Robert C. Martin', 89.90, 12),
  ('Eloquent JavaScript', 'Marijn Haverbeke', 45.00, 20),
  ('O Hobbit', 'J.R.R. Tolkien', 39.90, 8),
  ('O Senhor dos Anéis', 'J.R.R. Tolkien', 59.90, 15),
  ('A Revolução dos Bichos', 'George Orwell', 34.90, 10);

SELECT * FROM livros;
SELECT * FROM livros WHERE id = 3;

-- Parte Extra
SELECT * FROM livros WHERE preco < 50;
SELECT * FROM livros WHERE autor = 'J.R.R. Tolkien';
SELECT * FROM livros WHERE estoque > 10;
