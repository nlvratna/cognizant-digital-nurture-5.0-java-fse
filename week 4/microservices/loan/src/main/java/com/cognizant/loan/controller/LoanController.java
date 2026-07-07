package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public ResponseEntity<Loan> getLoan(@PathVariable String number) {
        return new ResponseEntity<>(new Loan("H2345122", "car", 25000000.0, 431232.2F, 18), HttpStatus.OK);
    }
}
