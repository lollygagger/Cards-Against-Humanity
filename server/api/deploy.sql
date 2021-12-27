DROP TABLE IF EXISTS cards CASCADE;
DROP TABLE IF EXISTS players CASCADE;

CREATE TABLE cards (
    id SERIAL PRIMARY KEY NOT NULL,
    content varchar(360),
    is_black_card boolean
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY NOT NULL,
    username varchar(25) NOT NULL,
    play_card INT REFERENCES cards(id)
);

INSERT INTO cards(content, is_black_card)
    VALUES('test white card', false),
           ('test black card', true);

