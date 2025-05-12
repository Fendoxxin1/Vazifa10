CREATE TABLE IF NOT EXISTS guruhlar (
    id SERIAL PRIMARY KEY,
    name VARCHAR(55)
);

CREATE TABLE IF NOT EXISTS talabalar (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(55),
    guruh_id INT REFERENCES guruhlar(id)
);