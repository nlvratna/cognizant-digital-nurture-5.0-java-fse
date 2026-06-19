DECLARE	
  new_interest_rate NUMBER;
  BEGIN
  	FOR loan_rec IN (
  	SELECT l.id,l.interest_rate,c.first_name,c.last_name
  	FROM loans l
  	 JOIN customers c ON c.id = l.customer_id
  	 WHERE MONTHS_BETWEEN(SYSDATE,c.dob)/12 >= 60
  	) 
  	LOOP
	  	new_interest_rate := loan_rec.interest_rate - 1;

      IF new_interest_rate < 0 THEN
      new_interest_rate := 0;
      END IF;
      
      
      UPDATE loans
       SET interest_rate = new_interest_rate
       WHERE id = loan_rec.id;
      DBMS_OUTPUT.PUT_LINE('Updated Loan ID ' || loan_rec.id || ' for ' || loan_rec.first_name || ' ' || loan_rec.last_name || 
                             ': Old Rate = ' || TO_CHAR(loan_rec.interest_rate, '99.99') || '%, New Rate = ' || TO_CHAR(new_interest_rate, '99.99') || '%');
  		
  	END LOOP;
  END;
  
