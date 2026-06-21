DROP TABLE IF EXISTS  Accounts;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS DEPARTMENTS;
-- Account table
CREATE TABLE Accounts (
    id INT PRIMARY KEY ,
    balance DECIMAL(18, 2) NOT null
);

--Departments Table
CREATE TABLE Departments (
    id INT PRIMARY KEY ,
    department_name VARCHAR(100) NOT NULL
);

--Employee Table
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    department_id INT NOT NULL,
    salary DECIMAL(18, 2) NOT NULL,
    CONSTRAINT FK_Employees_Departments FOREIGN KEY (department_id) 
        REFERENCES Departments(id)
);

INSERT INTO Departments (id, department_name) VALUES 
(10, 'IT'),
(20, 'HR'),
 (30, 'Finance');


INSERT INTO Employees (id, department_id, salary) VALUES 
(1, 10, 5000.00),
(2, 20, 4000.00),
(3, 10, 6000.00),
(4, 30, 7500.00),
(5, 20, 4200.00);

INSERT INTO Accounts (id, balance) VALUES 
(100, 1000.00),
(200, 500.00),
(300, 2500.00),
(400, 50.00),
(500, 12000.00);
