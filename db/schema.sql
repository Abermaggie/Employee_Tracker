DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

Use employee_tracker;

CREATE TABLE department_table (
    id: INT NOT NULL AUT0_INCREMENT PRIMARY KEY,
    -- department name//
    name VARCHAR(50) NOT NULL
);

CREATE TABLE roles_table (
    id: INT NOT NULL PRIMARY KEY,
    -- holds role title//
    title: VARCHAR(50) NOT NULL,
    -- holds role salary//
    salary: DECIMAL,
    -- Holds ids that reference department//
    department_id: INT NOT NULL

)

CREATE TABLE employee_table (
    id: INT NOT NULL PRIMARY KEY,
    -- holds employee first name//
    first_name: VARCHAR(50) NOT NULL,
    -- holds employee last name//
    last_name: VARCHAR(50) NOT NULL,
    -- holds employee role//
    role_id: INT,
    -- ID of manager of employee//
    manager_id: INT NOT NULL
)