DROP TABLE IF EXISTS  loans;
DROP TABLE IF EXISTS  customers;

-- Create the Customers table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    first_name VARCHAR2(50) NOT NULL,
    last_name VARCHAR2(50) NOT NULL,
    age NUMBER(3) CHECK (age >= 18),
    balance NUMBER(12, 2) DEFAULT 0,
    is_vip VARCHAR2(5) DEFAULT 'FALSE'
);

-- Create the Loans table
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    loan_amount NUMBER(12, 2) NOT NULL,
    interest_rate NUMBER(4, 2) NOT NULL,
    due_date DATE NOT NULL,
    CONSTRAINT fk_customer 
        FOREIGN KEY (customer_id) 
        REFERENCES customers(customer_id)
);



-- Insert Sample Customers
INSERT INTO customers (customer_id, first_name, last_name, age, balance, is_vip) VALUES 
(1, 'Alice', 'Smith', 65, 5000, 'FALSE'),
(2, 'Bob', 'Jones', 45, 15000, 'FALSE'),
(3, 'Carol', 'Davis', 62, 12000, 'FALSE'),
(4, 'David', 'Brown', 30, 2000, 'FALSE');

-- Insert Sample Loans
INSERT INTO loans (loan_id, customer_id, loan_amount, interest_rate, due_date) VALUES 
(101, 1, 10000, 5.50, SYSDATE + 45),
 (102, 2, 25000, 4.00, SYSDATE + 15),
(103, 3, 5000, 6.00, SYSDATE + 10),
(104, 4, 15000, 3.50, SYSDATE + 60);
