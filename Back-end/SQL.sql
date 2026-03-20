CREATE DATABASE college;
create database xyz_cllg;

CREATE DATABASE IF NOT EXISTS college;



CREATE DATABASE instagram;
USE college;
USE instagram;
SHOW tables;

CREATE TABLE users (
  id INT ,
  age INT,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(50) UNIQUE,
  followers INT DEFAULT 0,
  following INT, 
  CONSTRAINT CHECK (age >= 13),
  PRIMARY KEY (id)
);
DROP TABLE user;
CREATE TABLE post (
  id INT PRIMARY KEY,
  content VARCHAR(100),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO users 
(id, age, name, email, followers, following) 
VALUES 
(1,14, "adam", "adam@yahoo.in",123,145),
(2,15,"bob","bob123@gmail.com",200, 200),
(3,16,"casey", "casey@email.com",300, 306),
(4,17,"donald", "donald@gmail.com",200,105);
INSERT INTO student VALUES (101, "Adam", 12), (102, "Bob",20);

SELECT * FROM users where age<16;


USE college;
create table Teacher (
id INT primary key,
name VARCHAR(30),
subject VARCHAR(30),
salary int
);

insert into Teacher values 
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

select * from Teacher;

select * from Teacher 
where salary > 55000;

alter table teacher
change column salary ctc int;

update Teacher
set ctc=ctc+ctc*0.25;

set sql_safe_updates=0;

alter table Teacher
add column city Varchar(30) default "gurgoan";

alter table Teacher
drop column ctc;

create table student(
rollno INT primary key,
name Varchar(30),
city varchar(30),
marks int);

drop table student;

insert into student (rollno, name, city, marks) values 
(110,"adam","delhi",76),
(108,"bob","mumbai",65),
(124,"charlie","pune",94);

select *from student;

select * from student where marks>75;

select distinct city from student;

select city, max(marks) from student group by city;

select avg(marks) from student;

alter table student add column grade varchar(2);

update student set grade="O" where marks >=80;
update student set grade="A" where marks >=70 AND marks <80;
update student set grade="B" where marks >=60 AND marks >=70;