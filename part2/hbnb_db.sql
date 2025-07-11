CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) PRIMARY KEY,
    first_name VARCHAR(255)NOT NULL,
    last_name VARCHAR(255)NOT NULL,
    email VARCHAR(255)NOT NULL UNIQUE,
    password VARCHAR(255)NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS places (
    id CHAR(36) PRIMARY KEY,
    title VARCHAR(255)NOT NULL,
    description TEXT,
    price DECIMAL(10, 2)NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    owner_id CHAR(36)NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id CHAR(36) PRIMARY KEY,
    text TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating BETWEEN 1 AND 5),
    user_id CHAR(36)NOT NULL,
    place_id CHAR(36)NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (place_id) REFERENCES Place(id) ON DELETE CASCADE,
    CONSTRAINT user_review UNIQUE (user_id, place_id)
);

CREATE TABLE IF NOT EXISTS amenities (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255)NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS amenities_places (
    place_id CHAR(36)NOT NULL,
    amenity_id CHAR(36)NOT NULL,
    PRIMARY KEY (place_id, amenity_id),
    FOREIGN KEY (place_id) REFERENCES Place(id) ON DELETE CASCADE,
    FOREIGN KEY (amenity_id) REFERENCES Amenity(id) ON DELETE CASCADE
);
