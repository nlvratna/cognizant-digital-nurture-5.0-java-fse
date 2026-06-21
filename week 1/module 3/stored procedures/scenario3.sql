CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_id IN INT,
    p_dest_id IN INT,
    p_amount IN NUMBER
) IS
    v_current_balance NUMBER;
BEGIN
    SELECT balance INTO v_current_balance 
    FROM Accounts 
    WHERE id = p_source_id;

    IF v_current_balance >= p_amount THEN
        UPDATE Accounts SET balance = balance - p_amount WHERE id = p_source_id;
        UPDATE Accounts SET balance = balance + p_amount WHERE id = p_dest_id;
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer of ' || p_amount || ' successful from ' || p_source_id || ' to ' || p_dest_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer Failed: Insufficient balance in account ' || p_source_id);
    END IF;
END;

CALL TransferFunds(300, 400, 200);
SELECT * FROM Accounts;
