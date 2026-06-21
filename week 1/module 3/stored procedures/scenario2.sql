CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept_id IN INT,
    p_bonus_pct IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * (p_bonus_pct / 100))
    WHERE department_id = p_dept_id;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_pct || '% applied to department ' || p_dept_id);
END;

CALL ProcessMonthlyInterest();
SELECT * FROM Accounts;
