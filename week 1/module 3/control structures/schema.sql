DROP TABLE IF EXISTS  loans;
DROP TABLE IF EXISTS  customers;

-- Create the Customers table
CREATE TABLE customers (
    id NUMBER PRIMARY KEY,
    first_name VARCHAR2(50) NOT NULL,
    last_name VARCHAR2(50) NOT NULL,
    dob DATE NOT NULL,
    balance NUMBER(12, 2) DEFAULT 0,
    is_vip VARCHAR2(5) DEFAULT 'FALSE'
);

-- Create the Loans table
CREATE TABLE loans (
    id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    loan_amount NUMBER(12, 2) NOT NULL,
    interest_rate NUMBER(4, 2) NOT NULL,
    due_date DATE NOT NULL,
    CONSTRAINT fk_customer 
        FOREIGN KEY (customer_id) 
        REFERENCES customers(id)
);



-- Insert Sample Customers
INSERT INTO customers (id, first_name, last_name, dob, balance, is_vip) VALUES 
(1, 'Jane', 'Doe', TO_DATE('1960-01-15', 'YYYY-MM-DD'), 5000, 'FALSE'),
(2, 'Ratna', 'V', TO_DATE('1980-05-20', 'YYYY-MM-DD'), 15000, 'FALSE'),
(3, 'Ram', 'Venkat', TO_DATE('1962-08-10', 'YYYY-MM-DD'), 12000, 'FALSE'),
(4, 'John', 'Abraham', TO_DATE('1995-11-05', 'YYYY-MM-DD'), 2000, 'FALSE');

-- Insert Sample Loans
INSERT INTO loans (id, customer_id, loan_amount, interest_rate, due_date) VALUES 
(101, 1, 10000, 5.50, SYSDATE + 45),
 (102, 2, 25000, 4.00, SYSDATE + 15),
(103, 3, 5000, 6.00, SYSDATE + 10),
(104, 4, 15000, 3.50, SYSDATE + 60);

SELECT * FROM customers;
