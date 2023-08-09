CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE manga (
    manga_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category_id BIGINT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE author (
    author_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE manga_author (
    manga_id BIGINT NOT NULL,
    author_id BIGINT NOT NULL,
    PRIMARY KEY (manga_id, author_id),
    FOREIGN KEY (manga_id) REFERENCES manga(manga_id),
    FOREIGN KEY (author_id) REFERENCES author(author_id)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(120) NOT NULL,
    role VARCHAR(255),
    UNIQUE (username),
    UNIQUE (email)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    total_quantity INT NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    last_updated TIMESTAMP,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_item (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    unit_price NUMERIC(10, 2) NOT NULL,
    quantity INT NOT NULL,
    manga_id BIGINT NOT NULL,
    order_id BIGINT,
	FOREIGN KEY (manga_id) REFERENCES manga(manga_id),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
INSERT INTO category (category_name) VALUES ('Action');
INSERT INTO category (category_name) VALUES ('Fantasy');
INSERT INTO category (category_name) VALUES ('Drama');
INSERT INTO category (category_name) VALUES ('Psychological');
INSERT INTO category (category_name) VALUES ('Sports');
INSERT INTO category (category_name) VALUES ('Horror');
INSERT INTO category (category_name) VALUES ('Mystery');
INSERT INTO category (category_name) VALUES ('Adventure');
INSERT INTO category (category_name) VALUES ('Sci-Fi');
INSERT INTO category (category_name) VALUES ('Slice of Life');
INSERT INTO category (category_name) VALUES ('Supernatural');
INSERT INTO category (category_name) VALUES ('Romance');

select * from category;
INSERT INTO author (name, age, image_url) VALUES ('Hirohiko Araki', 60, 'araki.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Hajime Isayama', 35, 'isayama.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Kentaro Miura', 54, 'miura.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Yoshihiro Togashi', 55, 'togashi.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Gen Urobuchi', 47, 'urobuchi.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Inio Asano', 41, 'asano.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Yasuhisa Hara', 48, 'hara.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Haruichi Furudate', 38, 'furudate.jpg');
INSERT INTO author (name, age, image_url) VALUES ('ONE', 34, 'one.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Sui Ishida', 30, 'ishida.jpg');
INSERT INTO author (name, age, image_url) VALUES ('Kohei Horikoshi', 33, 'horikoshi.jpg');

-- Jojo's Bizarre Adventure Part 7
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Jojos Bizarre Adventure Part 7', 1, 'Steel Ball Run is the seventh part of the JoJos Bizarre Adventure series. Set in the United States in the late 19th century, the story follows a cross-country horse race known as the Steel Ball Run.', 12.99, 'jojo.jpg', NOW());

-- Attack on Titan
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Attack on Titan', 1, 'In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, Eren Yeager and his friends join the fight against these monstrous enemies.', 11.99, 'aot.jpg', NOW());

-- Berserk
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Berserk', 2, 'Guts, a lone mercenary, seeks revenge against the demonic forces that branded him with a cursed mark and took everything from him, including his love and his arm.', 14.99, 'berserk.jpg', NOW());

-- Hunter x Hunter
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Hunter x Hunter', 1, 'Gon Freecss, a young boy, embarks on a journey to become a Hunter and find his long-lost father. Along the way, he forms friendships and faces various challenges.', 10.99, 'hxh.jpg', NOW());

-- Psycho-Pass
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Psycho-Pass', 4, 'In a dystopian future, a powerful computer system known as Sybil governs society, determining an individuals criminality and mental state. Akane Tsunemori joins the Public Safety Bureau to maintain order.', 9.99, 'psychopass.jpg', NOW());

-- Oyasumi Punpun
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Oyasumi Punpun', 3, 'Follow the life of Punpun Punyama, a young boy navigating the challenges of adolescence, family issues, and his journey to find happiness.', 8.99, 'punpun.jpg', NOW());

-- Kingdom
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Kingdom', 1, 'In ancient China, Xin and Piao dream of becoming great generals. When Piao is taken to the palace, Xin vows to fulfill their dreams by becoming a mighty warrior.', 10.99, 'kingdom.jpg', NOW());

-- Haikyuu!
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('Haikyuu!!', 5, 'Shoyo Hinata joins Karasuno High Schools volleyball team, aiming to overcome his short stature and become a powerful player. He forms strong bonds with his teammates.', 8.99, 'haikyuu.jpg', NOW());

-- One Punch Man
INSERT INTO manga (title, category_id, description, price, image_url, created_at)
VALUES ('One Punch Man', 1, 'Saitama, a hero who can defeat any opponent with a single punch, struggles with boredom as he searches for a worthy adversary.', 10.99, 'onepunchman.jpg', NOW());

-- Jojo's Bizarre Adventure Part 7 authors
INSERT INTO manga_author (manga_id, author_id) VALUES (1, 1);

-- Attack on Titan authors
INSERT INTO manga_author (manga_id, author_id) VALUES (2, 2);

-- Berserk authors
INSERT INTO manga_author (manga_id, author_id) VALUES (3, 3);

-- Hunter x Hunter authors
INSERT INTO manga_author (manga_id, author_id) VALUES (4, 4);

-- Psycho-Pass authors
INSERT INTO manga_author (manga_id, author_id) VALUES (5, 5);

-- Oyasumi Punpun authors
INSERT INTO manga_author (manga_id, author_id) VALUES (6, 6);

-- Kingdom authors
INSERT INTO manga_author (manga_id, author_id) VALUES (7, 7);

-- Haikyuu!! authors
INSERT INTO manga_author (manga_id, author_id) VALUES (8, 8);

-- One Punch Man authors
INSERT INTO manga_author (manga_id, author_id) VALUES (9, 9);


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(120) NOT NULL,
    role VARCHAR(255)
);

iNSERT INTO users (username, email, password, role)
VALUES
    ('user1', 'user1@example.com', 'password1', 'user'),
    ('user2', 'user2@example.com', 'password2', 'user'),
    ('admin1', 'admin1@example.com', 'adminpass1', 'admin'),
    ('admin2', 'admin2@example.com', 'adminpass2', 'admin');
	