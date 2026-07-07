package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public ResponseEntity<Account> getAccount(@PathVariable Long number) {
        return new ResponseEntity<>(new Account(123456L, "savings", 68941.312), HttpStatus.OK);
    }
}
