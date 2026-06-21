CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS 
BEGIN
    UPDATE Accounts
    SET balance = balance * 1.01;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Interest of 1% applied to all accounts.');
END;


CALL ProcessMonthlyInterest();
SELECT * FROM Accounts;
