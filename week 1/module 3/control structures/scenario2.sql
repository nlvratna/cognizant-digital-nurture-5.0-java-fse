BEGIN
    FOR cust_rec IN (
        SELECT 
            c.id, 
            c.first_name, 
            c.last_name, 
            c.balance
        FROM customers c 
        WHERE c.balance > 10000
          AND (c.is_vip = 'FALSE' OR c.is_vip IS NULL)
    ) LOOP
        UPDATE customers
        SET is_vip = 'TRUE' 
        WHERE id = cust_rec.id;
        
        DBMS_OUTPUT.PUT_LINE(
            'Customer ' || cust_rec.first_name || ' ' || cust_rec.last_name || 
            ' (ID: ' || cust_rec.id || ') with balance $' || cust_rec.balance || ' promoted to VIP.'
        );
    END LOOP;
    
END;
