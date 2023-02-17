CREATE TABLE pokemons (
  id INT PRIMARY KEY,
  nombre VARCHAR(255),
  tipo1 VARCHAR(255),
  tipo2 VARCHAR(255),
  nivel INT,
  hp INT
);

CREATE TABLE habilidades (
  id INT PRIMARY KEY,
  nombre VARCHAR(255)
);

CREATE TABLE pokemon_habilidades (
  id INT PRIMARY KEY,
  pokemon_id INT,
  habilidad_id INT,
  FOREIGN KEY (pokemon_id) REFERENCES pokemons(id),
  FOREIGN KEY (habilidad_id) REFERENCES habilidades(id)
);

CREATE TABLE entrenadores (
  id INT PRIMARY KEY,
  nombre VARCHAR(255),
  edad INT,
  genero VARCHAR(255)
);

CREATE TABLE regiones (
  id INT PRIMARY KEY,
  nombre VARCHAR(255)
);

CREATE TABLE medallas (
  id INT PRIMARY KEY,
  entrenador_id INT,
  region_id INT,
  nombre VARCHAR(255),
  FOREIGN KEY (entrenador_id) REFERENCES entrenadores(id),
  FOREIGN KEY (region_id) REFERENCES regiones(id)
);
