import { pool } from '../src/common/postgres'

const sql = `
CREATE TABLE child (
	id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(50) NOT NULL,
	age INT NOT NULL
);

CREATE TABLE funding (
	id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	title VARCHAR(50) NOT NULL,
	image_url INT NOT NULL,
  story TEXT NOT NULL,
  price int NOT NULL,
  present_image_url TEXT NOT NULL,
  present_name TEXT NOT NULL,
  child_id REFERENCES child ON DELETE SET NULL
);
`

pool.query(sql)
