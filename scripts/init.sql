USE app_database;

create table User
(
    user_id   int auto_increment
        primary key,
    lastname  varchar(255) not null,
    firstname varchar(255) not null,
    password varchar(255),
    username varchar(255),
    email varchar(255)
);

INSERT INTO User (lastname, firstname, password, username, email)
VALUES
    ('Lombardelli', 'Nathan', 'admin', 'admin nathan', 'nathanlombardelli@hotmail.com'),
    ('Doe', 'John', 'john123', 'john_doe', 'john.doe@email.com'),
    ('Draslec', 'Toby', 'Chocolat01', 'TobyDraslec', 'toby.draslec@hotmail.com'),
    ('Smith', 'Alice', 'alice456', 'alice_smith', 'alice.smith@email.com'),
    ('Johnson', 'Bob', 'bob789', 'bob_johnson', 'bob.johnson@email.com'),
    ('Brown', 'Emma', 'emma321', 'emma_brown', 'emma.brown@email.com');
# ('Williams', 'Charlie', 'charlie234', 'charlie_williams', 'charlie.williams@email.com'),
# ('Jones', 'Eva', 'eva567', 'eva_jones', 'eva.jones@email.com'),
# ('Miller', 'David', 'david890', 'david_miller', 'david.miller@email.com'),
# ('Davis', 'Grace', 'grace123', 'grace_davis', 'grace.davis@email.com'),
# ('Taylor', 'Frank', 'frank456', 'frank_taylor', 'frank.taylor@email.com'),
# ('Wilson', 'Hannah', 'hannah789', 'hannah_wilson', 'hannah.wilson@email.com');