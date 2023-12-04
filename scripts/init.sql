USE app_database;

create table User
(
    user_id   int auto_increment
        primary key,
    lastname  varchar(255) not null,
    firstname varchar(255) not null
);

INSERT INTO User(user_id,lastname,firstname)
VALUES (1,'Lombardelli','Nathan');

INSERT INTO User(user_id,lastname,firstname)
VALUES (2,'Doe','Jhon');

INSERT INTO User(user_id,lastname,firstname)
VALUES (3,'Draslec','Toby');