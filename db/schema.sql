DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

\c department_db;

CREATE TABLE department (
    department_id INTEGER NOT NULL
    department_name VARCHAR(30) NOT NULL,
)

CREATE TABLE roles (
    job_title VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary FLOAT NOT NULL
)

CREATE TABLE employees {
    employee_id INTEGER NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary FLOAT NOT NULL,
    manager VARCHAR(30) NOT NULL
}