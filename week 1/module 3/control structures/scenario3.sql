DECLARE
    v_found BOOLEAN := FALSE;
BEGIN   
    FOR loan_rec IN (
        SELECT c.first_name, c.last_name, l.id, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.id
        WHERE l.due_date BETWEEN SYSDATE AND (SYSDATE + 30)
    ) LOOP
        v_found := TRUE;
        DBMS_OUTPUT.PUT_LINE(
            'REMINDER: Customer ' || loan_rec.first_name || ' ' || loan_rec.last_name || 
            ' - Your loan (ID: ' || loan_rec.id || ') is due on ' || 
            TO_CHAR(loan_rec.due_date, 'YYYY-MM-DD') || '.'
        );
    END LOOP;
    
    IF NOT v_found THEN
        DBMS_OUTPUT.PUT_LINE('No loans are due within the next 30 days.');
    END IF;

END;
